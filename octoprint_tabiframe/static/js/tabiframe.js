$(function () {
  function TabIframeViewModel(parameters) {
    var self = this;
    self.settingsViewModel = parameters[0];

    // Direct observables for the tab - initialize with defaults
    self.tabUrl = ko.observable("https://example.com");
    self.tabTitle = ko.observable("Custom Tab");
    self.tabIcon = ko.observable("globe");

    // Load settings when they become available
    self.onBeforeBinding = function () {
      console.log("TabIframe: onBeforeBinding called");
      self.loadSettings();
    };

    self.loadSettings = function () {
      try {
        var settings = self.settingsViewModel.settings;
        if (settings && settings.plugins && settings.plugins.tabiframe) {
          var url = settings.plugins.tabiframe.url();
          var title = settings.plugins.tabiframe.title();
          var icon = settings.plugins.tabiframe.icon();

          console.log(
            "TabIframe: Loaded settings - URL:",
            url,
            "Title:",
            title,
            "Icon:",
            icon
          );

          if (url) self.tabUrl(url);
          if (title) self.tabTitle(title);
          if (icon) self.tabIcon(icon);
        } else {
          console.log("TabIframe: Settings not yet available");
        }
      } catch (e) {
        console.error("TabIframe: Error loading settings:", e);
      }
    };

    // Refresh iframe function
    self.refreshIframe = function () {
      var iframe = document.getElementById("tabiframe_iframe");
      if (iframe) {
        iframe.src = iframe.src;
      }
    };

    // Subscribe to settings changes
    self.onSettingsShown = function () {
      console.log("TabIframe: Settings shown, reloading");
      self.loadSettings();
    };

    self.onSettingsHidden = function () {
      console.log("TabIframe: Settings hidden, reloading");
      self.loadSettings();
    };
  }

  OCTOPRINT_VIEWMODELS.push([
    TabIframeViewModel,
    ["settingsViewModel"],
    ["#settings_plugin_tabiframe", "#tab_plugin_tabiframe"],
  ]);
});
