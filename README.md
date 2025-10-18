# OctoPrint-TabIframe

A simple OctoPrint plugin that adds a custom tab with an embedded iframe to display any web page within your OctoPrint interface.

## Features

- **Single Custom Tab**: Add one iframe tab to your OctoPrint interface
- **Simple Configuration**: Just 3 fields - Title, URL, and Icon
- **Refresh Button**: Built-in refresh button to reload the iframe without refreshing the entire page
- **Responsive**: 600px height iframe that displays your content cleanly
- **Automatic Saving**: Changes are saved automatically

## Installation

### Method 1: From Archive (Recommended)

1. Download the plugin ZIP file from the [releases page](https://github.com/gaurav-pangam/OctoPrint-TabIframe/releases)
2. Open OctoPrint and navigate to **Settings** → **Plugin Manager**
3. Click **"...from archive"** button
4. Upload the downloaded ZIP file
5. Restart OctoPrint

### Method 2: From URL

1. Open OctoPrint and navigate to **Settings** → **Plugin Manager**
2. Click **"...from archive"** button
3. Enter this URL in the dialog:
   ```
   https://github.com/gaurav-pangam/OctoPrint-TabIframe/archive/master.zip
   ```
4. Click **Install**
5. Restart OctoPrint

### Method 3: Command Line

Run this command in your terminal:

```bash
pip install https://github.com/gaurav-pangam/OctoPrint-TabIframe/archive/master.zip
```

Then restart OctoPrint.

## Usage

### Configuring the Tab

1. Go to **Settings** → **Tab Iframe** (under Plugins)
2. Enter the following information:
   - **Tab Title**: The name of the tab (e.g., "Dashboard", "Camera", "Power Control")
   - **URL**: The full URL to display (e.g., `https://example.com` or `http://192.168.0.203`)
   - **Icon**: Select an icon from the dropdown (e.g., globe, camera, plug)
3. Click **Save** to apply changes
4. Refresh the page (Ctrl+F5 or Cmd+Shift+R)

### Using the Tab

Once configured, your custom tab will appear in the main OctoPrint interface.

- Click on the tab to view the configured URL in an iframe
- Use the **Refresh** button in the toolbar to reload just the iframe content without refreshing the entire page

## Available Icons

The plugin includes the following built-in OctoPrint icons:

- Globe
- Link
- External Link
- Window
- Folder
- File
- Camera
- Print
- Settings
- Info
- Help
- Star
- Heart
- Bell
- Clock

## Configuration

The plugin stores its configuration in OctoPrint's `config.yaml` file under the `plugins.tabiframe` section:

```yaml
plugins:
  tabiframe:
    title: "Custom Tab"
    url: "https://example.com"
    icon: "globe"
```

## Examples

**Camera Feed:**

```yaml
title: "Camera"
url: "http://192.168.1.100:8080/stream"
icon: "camera"
```

**Dashboard:**

```yaml
title: "Dashboard"
url: "https://grafana.example.com/dashboard"
icon: "chart"
```

**Smart Switch:**

```yaml
title: "Power Control"
url: "http://192.168.0.203"
icon: "plug"
```

## Troubleshooting

### Tabs not appearing

- Make sure you've saved the settings
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check the OctoPrint logs for any errors

### iframes not loading

- Verify the URL is correct and accessible
- Check if the website allows embedding in iframes (some sites have X-Frame-Options restrictions)
- Ensure your OctoPrint instance has internet access to reach the URL

### Settings not saving

- Check that you have proper permissions in OctoPrint
- Verify the OctoPrint server is running properly
- Check the browser console for JavaScript errors

## License

MIT License

## Support

For issues, feature requests, or contributions, please visit the GitHub repository.

## Changelog

### Version 1.0.0

- Initial release
- Single custom tab with iframe
- Simple 3-field configuration (Title, URL, Icon)
- Built-in refresh button
- 600px responsive iframe display
- Automatic settings loading
