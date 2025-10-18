# OctoPrint-TabIframe Plugin Guide

## Overview

The OctoPrint-TabIframe plugin is a simple yet powerful tool that allows users to extend OctoPrint's interface by adding custom tabs that display external content via iframes. This is useful for integrating dashboards, monitoring tools, webcams, or any web-based content directly into OctoPrint.

## Plugin Structure

```
OctoPrint-TabIframe/
├── octoprint_tabiframe/           # Main plugin package
│   ├── __init__.py                # Plugin implementation
│   ├── templates/                 # Jinja2 templates
│   │   ├── tabiframe_settings.jinja2   # Settings UI
│   │   └── tabiframe_tab.jinja2        # Tab display UI
│   └── static/                    # Static assets
│       ├── css/
│       │   └── tabiframe.css      # Styling
│       └── js/
│           └── tabiframe.js       # Knockout view model
├── setup.py                       # Package configuration
├── requirements.txt               # Dependencies
├── MANIFEST.in                    # Package manifest
├── README.md                      # User documentation
└── .gitignore                     # Git ignore rules
```

## Key Components

### 1. Plugin Implementation (`__init__.py`)

The main plugin class inherits from multiple OctoPrint mixins:

- **StartupPlugin**: Handles plugin initialization
- **TemplatePlugin**: Manages template injection
- **SettingsPlugin**: Handles plugin settings
- **AssetPlugin**: Manages static assets (CSS, JS)

**Key Methods:**
- `on_after_startup()`: Called after OctoPrint starts
- `get_settings_defaults()`: Returns default settings (empty tabs array)
- `get_template_configs()`: Configures template injection
- `get_assets()`: Registers CSS and JS files

### 2. Settings Template (`tabiframe_settings.jinja2`)

Provides the UI for managing tabs in OctoPrint settings:

- **Tab List Table**: Displays all configured tabs
- **Input Fields**: For title, URL, and icon selection
- **Add/Remove Buttons**: For managing tabs
- **Icon Dropdown**: Pre-defined OctoPrint icons

**Data Binding:**
- Uses Knockout.js for two-way data binding
- Binds to `settings.plugins.tabiframe.tabs`

### 3. Tab Display Template (`tabiframe_tab.jinja2`)

Displays the configured tabs in the main OctoPrint interface:

- **Tab Container**: Holds all custom tabs
- **Tab Items**: Each tab has a header and iframe content
- **Empty State**: Shows message when no tabs are configured

### 4. JavaScript View Model (`tabiframe.js`)

Implements the Knockout.js view model for tab management:

**Key Functions:**
- `addTab()`: Adds a new tab to the settings
- `removeTab()`: Removes a tab from the settings
- `onBeforeBinding()`: Initializes tabs from settings
- `subscribe()`: Watches for settings changes

**Observable Arrays:**
- `tabs`: Holds the current tabs to display

### 5. Styling (`tabiframe.css`)

Provides responsive styling for:

- Settings interface
- Tab containers and headers
- Iframe display
- Empty state message
- Mobile responsiveness

## How It Works

### User Flow

1. **User opens OctoPrint Settings**
   - Navigates to Settings → Tab Iframe

2. **User adds a tab**
   - Clicks "Add Tab" button
   - Fills in Title, URL, and Icon
   - Clicks Save

3. **Settings are saved**
   - Data is sent to OctoPrint backend
   - Stored in `config.yaml`

4. **Tab appears in main interface**
   - New tab shows up in the tab bar
   - User can click to view the iframe content

### Data Flow

```
User Input (Settings UI)
    ↓
Knockout.js View Model
    ↓
OctoPrint Settings API
    ↓
config.yaml (persistent storage)
    ↓
Tab Display View Model
    ↓
Rendered in Main Interface
```

## Configuration

### Default Settings

```python
{
    "tabs": []  # Empty array of tabs
}
```

### Tab Object Structure

```python
{
    "title": "Tab Title",
    "url": "https://example.com",
    "icon": "globe"
}
```

### Stored in config.yaml

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

## Available Icons

The plugin uses Font Awesome icons (via OctoPrint's icon set):

- globe, link, external-link, window
- folder, file, camera, print
- cog (settings), info, question (help)
- star, heart, bell, clock

## Development Notes

### Adding New Features

To extend the plugin:

1. **Add new settings**: Update `get_settings_defaults()` in `__init__.py`
2. **Add new UI elements**: Update templates in `templates/`
3. **Add new functionality**: Update `tabiframe.js` view model
4. **Add styling**: Update `tabiframe.css`

### Testing

1. Install the plugin in development mode:
   ```bash
   cd OctoPrint-TabIframe
   pip install -e .
   ```

2. Restart OctoPrint

3. Check logs for any errors:
   ```bash
   tail -f ~/.octoprint/logs/octoprint.log
   ```

### Debugging

- Check browser console (F12) for JavaScript errors
- Check OctoPrint logs for Python errors
- Use browser DevTools to inspect Knockout bindings
- Verify URLs are accessible and allow iframe embedding

## Limitations

1. **X-Frame-Options**: Some websites block embedding via X-Frame-Options header
2. **CORS**: Cross-origin requests may be restricted
3. **Authentication**: Embedded content may require separate authentication
4. **Performance**: Multiple iframes can impact performance

## Future Enhancements

Possible improvements:

- Tab ordering/reordering
- Tab visibility toggle
- Custom CSS per tab
- Tab refresh controls
- Responsive iframe sizing
- Tab grouping/categories
- Keyboard shortcuts for tab switching

## Troubleshooting

### Tabs not appearing
- Verify settings were saved
- Refresh browser (Ctrl+F5)
- Check OctoPrint logs

### iframes not loading
- Verify URL is correct
- Check if site allows iframe embedding
- Verify network connectivity
- Check browser console for CORS errors

### Settings not saving
- Check OctoPrint permissions
- Verify server is running
- Check browser console for errors
- Review OctoPrint logs

## License

MIT License - See LICENSE file for details

