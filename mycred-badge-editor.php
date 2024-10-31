<?php
/**
 * Plugin Name: myCred Badge Editor
 * Plugin URI: https://mycred.me
 * Description: myCred Badge Editor
 * Version: 1.0.2
 * Tags: badge editor, badges, gamification, rank editor, badge design
 * Author: myCred
 * Author URI: https://mycred.me
 * Author Email: support@mycred.me
 * Requires at least: WP 4.8
 * Tested up to: WP 6.6.1
 * Text Domain: mycred-badge-editor
 * Domain Path: /lang
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */
if( ! class_exists( 'myCred_Badge_Editor_Core' ) ) :

    /**
     * myCred_Badge_Editor_Core
     */
    class myCred_Badge_Editor_Core {
        
        /**
         * Hold the singleton object
         */
        private static $_instance;
        
        /**
         * get_instance
         *
         * @return void
         */
        public static function get_instance() {
            if ( self::$_instance == null )
                self::$_instance = new self();

            return self::$_instance;
        }
        
        /**
         * __construct
         *
         * @return void
         */
        public function __construct() {

            $this->define_constants();
        
            add_action( 'plugins_loaded', array( $this, 'init_badge_editor' ) );
        
        }

        /**
         * Define
         * @since 1.0
         * @version 1.0
         */
        private function define( $name, $value ) {
            if ( ! defined( $name ) )
                define( $name, $value );
        }

        /**
         * Define Constants
         * First, we start with defining all requires constants if they are not defined already.
         * @since 1.0
         * @version 1.0
         */
        private function define_constants() {

            $this->define( 'MYCRED_BADGE_EDITOR_THIS',    __FILE__ );
            $this->define( 'MYCRED_BADGE_EDITOR_VERSION', '1.0' );

        }
        
        /**
         * init_badge_editor
         *
         * @return void
         */
        public function init_badge_editor() {
            if ( !class_exists( 'myCRED_Addons_Module' ) ) {
                add_action( 'admin_notices', array( $this, 'mycred_core_required' ) );
                return;
            } 

            include 'includes/class-mycred-badge-editor.php';
        }
        
        /**
         * mycred_core_required
         *
         * @return void
         */
        public function mycred_core_required() {
            $class = 'notice notice-error';
            $message = __( 'In order to use myCred Badge Editor, myCred required.', 'mycred-badge-editor' );
            printf(
                '<div class="%1$s"><p>%2$s</p></div>', 
                esc_attr( $class ), esc_html( $message )
            );
        }
    }
endif;

myCred_Badge_Editor_Core::get_instance();