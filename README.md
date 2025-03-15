# README

# aiesec-exchanges
Site built with Ruby on Rails + Vite

## Getting Started
Ensure node, npm is installed

## Run the steps
1. Enable rails with corepack
```
corepack enable

corepack prepare yarn@4.7.0 --activate
```
2. Install with yarn
```
yarn --version

yarn install
```
3. Start Vite Server
```
bin/vite dev
```
4. Start Rails Server
```
bin/rails s
```
## Upon Changes to Vite
Run:
1. To discard previous vite build
```
bin/vite clobber
```
2. To build vite assets
```
bin/vite build
```
3. Start Vite Server
```
bin/vite dev
```
