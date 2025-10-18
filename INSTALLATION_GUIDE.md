# Installation & Setup Guide - OctoPrint-TabIframe

## System Requirements

- OctoPrint 1.3.0 or higher
- Python 3.7 or higher
- Modern web browser with JavaScript enabled

## Installation Methods

### Method 1: OctoPrint Plugin Manager (Recommended)

1. **Open OctoPrint Web Interface**
   - Navigate to your OctoPrint instance (usually `http://localhost:5000`)

2. **Access Plugin Manager**
   - Click the **Settings** icon (gear) in the top right
   - Select **Plugin Manager** from the left menu

3. **Install from Archive**
   - Click **"...from archive"** button
   - Choose the `OctoPrint-TabIframe.zip` file
   - Click **Install**

4. **Restart OctoPrint**
   - The plugin will prompt you to restart
   - Click **Restart** or manually restart OctoPrint

5. **Verify Installation**
   - After restart, go to Settings → Plugins
   - You should see "Tab Iframe" in the list

### Method 2: Command Line Installation

```bash
# Navigate to your OctoPrint environment
source ~/oprint/bin/activate  # or your venv path

# Install from GitHub
pip install https://github.com/yourusername/OctoPrint-TabIframe/archive/master.zip

# Restart OctoPrint
sudo systemctl restart octoprint  # or your restart method
```

### Method 3: Development Installation

For developers who want to modify the plugin:

```bash
# Clone or download the repository
cd OctoPrint-TabIframe

# Install in development mode
pip install -e .

# Restart OctoPrint
```

## Post-Installation Setup

### 1. Verify Plugin is Loaded

Check OctoPrint logs:
```bash
tail -f ~/.octoprint/logs/octoprint.log
```

Look for:
```
octoprint.plugins.tabiframe - INFO - Tab Iframe Plugin loaded!
```

### 2. Access Plugin Settings

1. Open OctoPrint Settings (gear icon)
2. Scroll down to **Plugins** section
3. Click on **Tab Iframe**

### 3. Add Your First Tab

1. Click **"Add Tab"** button
2. Fill in:
   - **Title**: "My First Tab"
   - **URL**: "https://example.com"
   - **Icon**: "globe"
3. Click **Save**

### 4. View Your Tab

1. Go back to main OctoPrint interface
2. Look for your new tab in the tab bar
3. Click to view the iframe content

## Configuration File

The plugin stores settings in `~/.octoprint/config.yaml`:

```yaml
plugins:
  tabiframe:
    tabs:
      - title: "Dashboard"
        url: "https://example.com/dashboard"
        icon: "globe"
      - title: "Webcam"
        url: "https://example.com/webcam"
        icon: "camera"
```

You can edit this file directly to:
- Add/remove tabs
- Change tab order
- Modify URLs and titles

## Uninstallation

### Via Plugin Manager

1. Go to Settings → Plugin Manager
2. Find "Tab Iframe" in the list
3. Click the **trash icon** to uninstall
4. Restart OctoPrint

### Via Command Line

```bash
pip uninstall OctoPrint-TabIframe
```

## Troubleshooting Installation

### Plugin doesn't appear in Plugin Manager

**Solution:**
1. Restart OctoPrint completely
2. Clear browser cache (Ctrl+F5)
3. Check OctoPrint logs for errors
4. Verify Python version is 3.7+

### "Module not found" error

**Solution:**
1. Verify installation: `pip list | grep TabIframe`
2. Reinstall: `pip install -e .`
3. Restart OctoPrint

### Settings not accessible

**Solution:**
1. Verify you're logged in as admin
2. Check browser console (F12) for errors
3. Restart OctoPrint
4. Try a different browser

### Tabs not appearing after adding

**Solution:**
1. Refresh browser (Ctrl+F5)
2. Check OctoPrint logs
3. Verify settings were saved
4. Restart OctoPrint

## Updating the Plugin

### From Plugin Manager

1. Go to Settings → Plugin Manager
2. Find "Tab Iframe"
3. If update available, click **Update**
4. Restart OctoPrint

### From Command Line

```bash
pip install --upgrade https://github.com/yourusername/OctoPrint-TabIframe/archive/master.zip
```

## Backup & Restore

### Backup Settings

```bash
# Backup config file
cp ~/.octoprint/config.yaml ~/.octoprint/config.yaml.backup
```

### Restore Settings

```bash
# Restore from backup
cp ~/.octoprint/config.yaml.backup ~/.octoprint/config.yaml
```

## Performance Considerations

- **Multiple iframes**: Each iframe consumes memory and bandwidth
- **Large content**: Heavy websites may slow down OctoPrint
- **Network**: Slow connections may cause timeouts
- **Recommendation**: Limit to 3-5 tabs for optimal performance

## Security Notes

- **HTTPS**: Use HTTPS URLs when possible
- **Authentication**: Some sites may require separate login
- **Trusted URLs**: Only add URLs from trusted sources
- **X-Frame-Options**: Some sites block iframe embedding

## Getting Help

If you encounter issues:

1. **Check Logs**
   ```bash
   tail -f ~/.octoprint/logs/octoprint.log
   ```

2. **Browser Console**
   - Press F12 to open Developer Tools
   - Check Console tab for errors

3. **Verify URL**
   - Test the URL in your browser
   - Ensure it allows iframe embedding

4. **Restart OctoPrint**
   - Sometimes a restart resolves issues

5. **Check Documentation**
   - Read README.md
   - Check PLUGIN_GUIDE.md
   - Review QUICKSTART.md

## Next Steps

- Read [QUICKSTART.md](QUICKSTART.md) for quick setup
- Check [README.md](README.md) for full documentation
- Review [PLUGIN_GUIDE.md](PLUGIN_GUIDE.md) for technical details
- Explore different URLs and icons

Enjoy using OctoPrint-TabIframe!

