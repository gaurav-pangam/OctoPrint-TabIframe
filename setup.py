# coding=utf-8
import setuptools

plugin_identifier = "tabiframe"
plugin_package = "octoprint_tabiframe"
plugin_name = "OctoPrint-TabIframe"
plugin_version = "1.0.0"
plugin_description = "A plugin that allows users to add custom tabs with configurable URLs displayed in iframes"
plugin_author = "Custom"
plugin_author_email = ""
plugin_url = ""
plugin_license = "MIT"
plugin_requires = []

setuptools.setup(
    name=plugin_name,
    version=plugin_version,
    description=plugin_description,
    author=plugin_author,
    author_email=plugin_author_email,
    url=plugin_url,
    license=plugin_license,
    packages=[plugin_package],
    package_data={
        plugin_package: [
            "templates/*",
            "static/css/*",
            "static/js/*"
        ]
    },
    install_requires=plugin_requires,
    entry_points={
        "octoprint.plugin": [
            "{} = {}".format(plugin_identifier, plugin_package)
        ]
    }
)

