// ?! - A lightweight method of tab interaction with jQuery for when you don't want the heavy UI suite

/*
 * Example markup & usage:
 * 
 * <div id="container">
 *   <div class="tabs">
 *     <ul>
 *       <li><a href="#">Tab 1</a></li>
 *       <li><a href="#">Tab 2</a></li>
 *     </ul>
 *   </div>
 *   <div class="tabs-main">
 *     <ul>
 *       <li class="tab-1">
 *         tab content
 *       </li>
 *       <li class="tab-2">
 *         tab content
 *       </li>
 *     </ul>
 *   </div>
 * </div>
 * <script>
 *   $(function() { $('#container').quickTabs(); });
 * </script>
 */

(function($) {

    $.fn.extend({

        quickTabs: function() {

            var container = this;
            var $tabs = $('.tabs a', container);

            $tabs.click(function() {

                var $this = $(this);
                var tab_class = $this.html().toLowerCase().replace(' ', '-');

                $tabs.removeClass();
                $this.addClass('active');

                $('.tabs-main ul', container).hide();
                $('.tabs-main ul.' + tab_class, container).show();

                return false;

           });

           return this;
        }

    });

})(jQuery);
