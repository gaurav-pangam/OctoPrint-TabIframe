# OctoPrint-TabIframe

A simple OctoPrint plugin that allows users to add custom tabs with configurable URLs displayed in iframes.

## Features

- **Add Custom Tabs**: Create multiple custom tabs with user-defined titles
- **Configure URLs**: Set any URL for each tab to be displayed in an iframe
- **Icon Selection**: Choose from a variety of built-in OctoPrint icons for each tab
- **Easy Management**: Add or remove tabs directly from the plugin settings
- **Responsive Design**: Tabs adapt to different screen sizes
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

### Adding a Tab

1. Go to **Settings** → **Tab Iframe** (under Plugins)
2. Click the **"Add Tab"** button
3. Enter the following information:
   - **Title**: The name of the tab (e.g., "Dashboard", "Webcam")
   - **URL**: The full URL to display (e.g., `https://example.com`)
   - **Icon**: Select an icon from the dropdown (e.g., Globe, Camera, Settings)
4. Click **Save** to apply changes

### Removing a Tab

1. Go to **Settings** → **Tab Iframe**
2. Find the tab you want to remove
3. Click the **"Remove"** button
4. Click **Save** to apply changes

### Viewing Tabs

Once configured, your custom tabs will appear in the main OctoPrint interface. Click on any tab to view the configured URL in an iframe.

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
    tabs:
      - title: "My Dashboard"
        url: "https://example.com/dashboard"
        icon: "globe"
      - title: "Webcam"
        url: "https://example.com/webcam"
        icon: "camera"
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
- Add/remove custom tabs
- Configure URLs and icons
- Responsive iframe display
