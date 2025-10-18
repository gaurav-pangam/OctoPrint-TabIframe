# Quick Start Guide - OctoPrint-TabIframe

## Installation

### Option 1: From Archive (Recommended)
1. Download the plugin as a ZIP file
2. Open OctoPrint → Settings → Plugin Manager
3. Click **"...from archive"**
4. Select the ZIP file and upload
5. Restart OctoPrint

### Option 2: From Command Line
```bash
pip install https://github.com/yourusername/OctoPrint-TabIframe/archive/master.zip
```

### Option 3: Development Installation
```bash
cd OctoPrint-TabIframe
pip install -e .
```

## First Steps

### 1. Access Plugin Settings
- Open OctoPrint
- Go to **Settings** (gear icon)
- Find **Tab Iframe** under the Plugins section

### 2. Add Your First Tab
- Click the **"Add Tab"** button
- Fill in the fields:
  - **Title**: "My Dashboard" (or any name)
  - **URL**: "https://example.com" (or your desired URL)
  - **Icon**: Select "globe" or another icon
- Click **Save**

### 3. View Your Tab
- Go back to the main OctoPrint interface
- Look for your new tab in the tab bar
- Click on it to view the content in an iframe

## Common Use Cases

### Monitoring Dashboard
```
Title: Dashboard
URL: https://your-monitoring-tool.com
Icon: globe
```

### Webcam Stream
```
Title: Webcam
URL: https://your-webcam-url.com/stream
Icon: camera
```

### Documentation
```
Title: Docs
URL: https://docs.example.com
Icon: info
```

### Settings/Configuration
```
Title: Settings
URL: https://your-app.com/settings
Icon: cog
```

## Tips & Tricks

### Multiple Tabs
You can add as many tabs as you want. Just click "Add Tab" multiple times.

### Changing Tab Order
Edit the `config.yaml` file directly to reorder tabs:
```yaml
plugins:
  tabiframe:
    tabs:
      - title: "First Tab"
        url: "https://example1.com"
        icon: "globe"
      - title: "Second Tab"
        url: "https://example2.com"
        icon: "camera"
```

### Icon Selection
Choose icons that match the content:
- **globe** - Websites, dashboards
- **camera** - Webcams, video streams
- **cog** - Settings, configuration
- **info** - Documentation, help
- **print** - Printer-related content
- **folder** - File browsers
- **star** - Favorites, important links

### Testing URLs
Before adding a tab, test if the URL works in your browser and allows iframe embedding.

## Troubleshooting

### Tab doesn't appear after saving
1. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Check OctoPrint logs for errors
3. Verify the URL is correct

### iframe shows blank or error
1. Verify the URL is accessible from your network
2. Some websites block iframe embedding (X-Frame-Options)
3. Check browser console (F12) for CORS errors
4. Try a different URL to test

### Can't access settings
1. Make sure you're logged in to OctoPrint
2. Check that you have admin permissions
3. Restart OctoPrint if needed

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Check [PLUGIN_GUIDE.md](PLUGIN_GUIDE.md) for technical details
- Explore different URLs and icons
- Customize the plugin for your needs

## Support

If you encounter issues:
1. Check the OctoPrint logs: `~/.octoprint/logs/octoprint.log`
2. Check browser console (F12) for JavaScript errors
3. Verify your URLs are correct and accessible
4. Try disabling other plugins to isolate issues

## Examples

### Grafana Dashboard
```
Title: Grafana
URL: https://grafana.example.com/d/dashboard-id
Icon: globe
```

### Home Assistant
```
Title: Home Assistant
URL: https://homeassistant.example.com
Icon: cog
```

### Octoeverywhere
```
Title: Octoeverywhere
URL: https://octoeverywhere.com
Icon: link
```

### Local Network Camera
```
Title: Camera
URL: http://192.168.1.100:8080/stream
Icon: camera
```

Enjoy your custom OctoPrint tabs!

