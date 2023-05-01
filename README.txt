=== Calendar and time extension for ContactForm 7 ===
Contributors: Krzysztof Haller
Donate link: https://khaller.com
Tags: extension, contact-form
Requires at least: 3.0.1
Tested up to: 6.2
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Here is a short description of the plugin.  This should be no more than 150 characters.  No markup here.

== Description ==

Looking for an easy way to upgrade your WordPress contact form with a stylish date picker and time selector? Look no further than our plugin, which seamlessly integrates with your existing contact form to provide a simple and elegant user interface.

Built on the powerful flatpickr and jsCalendar libraries, our plugin provides fast and reliable performance, ensuring that your users can easily select the date and time they need. And with a wide range of customization options, you can easily tailor the look and feel of your date and time inputs to match the style of your website.

Whether you're running a small blog or a large eCommerce site, our plugin is the perfect choice for enhancing your contact form and providing your users with a better, more intuitive way to select dates and times. So why wait? Download our plugin today and start enjoying the benefits of a beautiful and functional date picker and time selector for your WordPress site.


== Installation ==

Download latest .zip package and upload it into your wordpress plugin installer, or easier way search `Calendar and time extension for ContactForm 7` in plugins library in your wordpress admin area.


== Screenshots ==

[https://i.imgur.com/N9e3Foc.png Calendar]
[https://i.imgur.com/5oCBgiC.png Time picker]

== Changelog ==

= 1.0 =
* First release

== Usage in form ==
Calendar:
```html
<div class="khaller-calendar-randomNumber">
[text* book-date]
</div>
```

Time picker:
```html
<div id="khaller-time-data-randomNumber" data-mintime="12:00" data-maxtime="18:00"></div>
[text* text-759 class:khaller-time-thisSameNumberAsBefore]
```