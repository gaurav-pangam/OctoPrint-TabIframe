# OctoPrint-TabIframe - SIMPLIFIED VERSION

A dead-simple OctoPrint plugin that adds ONE custom tab with a configurable URL displayed in an iframe.

## What It Does

Adds a single custom tab to OctoPrint with:
- Custom title
- Custom URL (displayed in iframe)
- Custom icon

## Installation

1. Download `OctoPrint-TabIframe.zip`
2. OctoPrint → Settings → Plugin Manager → "...from archive"
3. Upload the ZIP
4. Restart OctoPrint

## Configuration

1. Settings → Tab Iframe
2. Fill in 3 fields:
   - **Tab Title**: Name for your tab
   - **URL**: Website to display (e.g., `https://google.com`)
   - **Icon**: Pick from dropdown
3. Click **Save** (at bottom of settings page)
4. **Refresh the page** (Ctrl+F5 or Cmd+Shift+R)
5. Your tab should appear!

## Important Notes

- **After saving, you MUST refresh the page** to see the tab
- **To change the tab name/icon, you need to restart OctoPrint** (not just refresh)
- Only ONE tab is supported (simplified from the original multi-tab version)

## Available Icons

globe, link, external-link, window, folder, file, camera, print, cog, info, question, star, heart, bell, clock

## Troubleshooting

**Tab doesn't appear:**
- Did you click Save?
- Did you refresh the page? (Ctrl+F5)
- Check OctoPrint logs

**Iframe shows "Refused to connect":**
- Some websites block iframe embedding
- Try a different URL

**Tab name doesn't update:**
- Restart OctoPrint (Settings → System → Restart)

## Example Configurations

**Camera Feed:**
- Title: "Camera"
- URL: "http://192.168.1.100:8080"
- Icon: camera

**Documentation:**
- Title: "Docs"
- URL: "https://docs.octoprint.org"
- Icon: question

**Dashboard:**
- Title: "Dashboard"
- URL: "https://your-dashboard.com"
- Icon: cog

## Technical Details

- Plugin ID: `tabiframe`
- Python: 3.7+
- OctoPrint: 1.3.0+
- Settings: `~/.octoprint/config.yaml` under `plugins.tabiframe`

## Files Changed

This simplified version has:
- **Python**: 48 lines (was 265)
- **JavaScript**: 12 lines (was 69)
- **CSS**: 40 lines (was 128)
- **Templates**: 60 lines total (was 110)

Much simpler, much less to break!

