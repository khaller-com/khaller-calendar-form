<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://khaller.com
 * @since      1.0.0
 *
 * @package    Khaller_Calendar_Form
 * @subpackage Khaller_Calendar_Form/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Khaller_Calendar_Form
 * @subpackage Khaller_Calendar_Form/includes
 * @author     Krzysztof Haller <contact@khaller.com>
 */
class Khaller_Calendar_Form_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'khaller-calendar-form',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
