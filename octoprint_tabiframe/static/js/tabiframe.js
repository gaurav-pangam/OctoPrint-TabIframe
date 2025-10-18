$(function() {
    function TabIframeViewModel(parameters) {
        var self = this;

        self.settings = parameters[0];

        // Observable array to hold the tabs
        self.tabs = ko.observableArray([]);

        // Add a new tab
        self.addTab = function() {
            self.settings.plugins.tabiframe.tabs.push({
                title: ko.observable("New Tab"),
                url: ko.observable("https://example.com"),
                icon: ko.observable("globe")
            });
        };

        // Remove a tab
        self.removeTab = function(tab) {
            self.settings.plugins.tabiframe.tabs.remove(tab);
        };

        // This will get called before the TabIframeViewModel gets bound to the DOM
        self.onBeforeBinding = function() {
            // Load tabs from settings
            var savedTabs = self.settings.settings.plugins.tabiframe.tabs();
            if (savedTabs && savedTabs.length > 0) {
                self.tabs(savedTabs);
            }
        };

        // Watch for changes in settings and update tabs
        self.settings.settings.plugins.tabiframe.tabs.subscribe(function(newTabs) {
            self.tabs(newTabs);
        });
    }

    // Register the view model
    OCTOPRINT_VIEWMODELS.push([
        TabIframeViewModel,
        ["settingsViewModel"],
        ["#tab_plugin_tabiframe"]
    ]);
});

