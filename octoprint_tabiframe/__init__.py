# coding=utf-8
from __future__ import absolute_import
import octoprint.plugin


class TabIframePlugin(octoprint.plugin.StartupPlugin,
                      octoprint.plugin.TemplatePlugin,
                      octoprint.plugin.SettingsPlugin,
                      octoprint.plugin.AssetPlugin):

    def on_after_startup(self):
        self._logger.info("Tab Iframe Plugin loaded!")

    def get_settings_defaults(self):
        return dict(
            tabs=[]
        )

    def get_template_configs(self):
        return [
            dict(type="settings", custom_bindings=False)
        ]

    def get_assets(self):
        return dict(
            js=["js/tabiframe.js"],
            css=["css/tabiframe.css"]
        )


__plugin_name__ = "Tab Iframe"
__plugin_pythoncompat__ = ">=3.7,<4"
__plugin_implementation__ = TabIframePlugin()

