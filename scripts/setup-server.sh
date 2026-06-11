#!/bin/bash
#
# One-time server setup for deploying Next.js app with PM2 + Nginx + SSL
#
# Usage:
#   curl -sL https://raw.githubusercontent.com/<user>/<repo>/master/scripts/setup-server.sh | bash
#   — or —
#   bash setup-server.sh
#

set -euo pipefail

APP_NAME="evakuator725"
APP_PATH="/var/www/$APP_NAME"
DOMAIN="725.uz"
NODE_VERSION=20

echo "========================================="
echo "  Server Setup: $APP_NAME"
echo "========================================="
echo ""

# --- Check root ---
if [ "$EUID" -ne 0 ]; then
  echo "❌ Please run as root: sudo bash setup-server.sh"
  exit 1
fi

# --- System update ---
echo "📦 Updating system packages..."
apt-get update -y
apt-get upgrade -y

# --- Install essential tools ---
echo "🔧 Installing essential tools..."
apt-get install -y curl wget git ufw software-properties-common

# --- Install Node.js ---
if command -v node &>/dev/null; then
  CURRENT_NODE=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
  echo "✅ Node.js v$(node -v) already installed"
  if [ "$CURRENT_NODE" -lt "$NODE_VERSION" ]; then
    echo "⚠️  Upgrading Node.js to v$NODE_VERSION..."
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
    apt-get install -y nodejs
  fi
else
  echo "📦 Installing Node.js v$NODE_VERSION..."
  curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
  apt-get install -y nodejs
fi

echo "  Node: $(node -v)"
echo "  npm:  $(npm -v)"

# --- Install PM2 ---
if command -v pm2 &>/dev/null; then
  echo "✅ PM2 already installed: $(pm2 -v)"
else
  echo "📦 Installing PM2..."
  npm install -g pm2
fi

# --- PM2 startup (auto-start on reboot) ---
echo "🔄 Configuring PM2 startup..."
pm2 startup systemd -u root --hp /root
systemctl enable pm2-root

# --- Install Nginx ---
if command -v nginx &>/dev/null; then
  echo "✅ Nginx already installed: $(nginx -v 2>&1)"
else
  echo "📦 Installing Nginx..."
  apt-get install -y nginx
fi

systemctl enable nginx
systemctl start nginx

# --- Install Certbot for SSL ---
if command -v certbot &>/dev/null; then
  echo "✅ Certbot already installed: $(certbot --version 2>&1)"
else
  echo "📦 Installing Certbot..."
  apt-get install -y certbot python3-certbot-nginx
fi

# --- Create app directory ---
echo "📁 Creating app directory: $APP_PATH"
mkdir -p "$APP_PATH/logs"

# --- Configure firewall ---
echo "🔒 Configuring firewall (ufw)..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
ufw status

# --- Remove default Nginx site ---
rm -f /etc/nginx/sites-enabled/default

# --- Print summary ---
echo ""
echo "========================================="
echo "  ✅ Server setup complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Add these GitHub Secrets to your repository:"
echo "   Settings → Secrets and variables → Actions → New repository secret"
echo ""
echo "   SERVER_HOST     = $(curl -s ifconfig.me 2>/dev/null || hostname -I | awk '{print $1}')"
echo "   SERVER_USER     = root"
echo "   SERVER_SSH_KEY  = <your private SSH key>"
echo "   TG_BOT_TOKEN    = <your Telegram bot token>"
echo "   TG_CHAT_ID      = <your Telegram chat ID>"
echo ""
echo "2. Setup SSH key (if not done):"
echo "   ssh-keygen -t ed25519 -C 'deploy' -f ~/.ssh/deploy_key"
echo "   cat ~/.ssh/deploy_key.pub >> ~/.ssh/authorized_keys"
echo "   cat ~/.ssh/deploy_key  # ← copy this as SERVER_SSH_KEY secret"
echo ""
echo "3. Point DNS for '$DOMAIN' to this server's IP"
echo ""
echo "4. Push to master branch — deploy will start automatically!"
echo ""
