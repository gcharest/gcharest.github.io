#!/usr/bin/env bash
set -euo pipefail

user_gem_dir="$(ruby -e 'print Gem.user_dir')"
user_gem_bin="${user_gem_dir}/bin"

# Ensure user gem bin is in PATH for future shells.
if ! echo "$PATH" | tr ':' '\n' | grep -qx "$user_gem_bin"; then
  for profile in "$HOME/.profile" "$HOME/.bashrc" "$HOME/.zshrc"; do
    if [ ! -f "$profile" ]; then
      touch "$profile"
    fi
    if ! grep -q "$user_gem_bin" "$profile"; then
      printf '\n# GEM user bin\nexport PATH="%s:$PATH"\n' "$user_gem_bin" >> "$profile"
    fi
  done
fi

if [ -f "Gemfile" ]; then
  if ! command -v bundle >/dev/null 2>&1; then
    gem install --user-install bundler
  fi
  if ! command -v bundle >/dev/null 2>&1 && [ -x "$user_gem_bin/bundle" ]; then
    bundle_cmd="$user_gem_bin/bundle"
  else
    bundle_cmd="bundle"
  fi
  "$bundle_cmd" config set --local path "vendor/bundle"
  "$bundle_cmd" install
fi

if [ -f "package.json" ]; then
  npm install
fi
