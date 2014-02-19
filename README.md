smartquotes
===========

A jQuery plugin to replace curly quotes, elipses, and em-dashes inserted by MS Word ('smart characters') with straight quotes, three periods, and hyphens.
To use, simply include the script in your page after the jQuery library and call the plugin on any element where you don't want 
smart characters to appear.

For example, if I didn't want any of the form inputs on my page to contain smart quotes, I would add this line:

$('form input').smartQuotes();

This plugin is recursive, so any child elements of the target element will also be checked for smart replacements.
