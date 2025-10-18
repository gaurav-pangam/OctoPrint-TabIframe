# coding=utf-8
from __future__ import absolute_import
import octoprint.plugin


class TabIframePlugin(octoprint.plugin.StartupPlugin,
                      octoprint.plugin.TemplatePlugin,
                      octoprint.plugin.SettingsPlugin,
                      octoprint.plugin.AssetPlugin):

    def on_after_startup(self):
        self._logger.info("Tab Iframe Plugin loaded!")
        self._logger.info("Tab - Title: {}, URL: {}, Icon: {}".format(
            self._settings.get(["title"]),
            self._settings.get(["url"]),
            self._settings.get(["icon"])
        ))

    def get_settings_defaults(self):
        return dict(
            title="Custom Tab",
            url="https://example.com",
            icon="globe"
        )

    def get_template_configs(self):
        return [
            dict(
                type="tab",
                custom_bindings=False,
                name=self._settings.get(["title"]),
                icon=self._settings.get(["icon"])
            ),
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

