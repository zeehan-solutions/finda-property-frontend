(function ($) {
    "use strict";
    const maxProperties = 5;
    const storageKey = "recentlyViewedProperties";

    function getRecentlyViewed() {
        let properties = localStorage.getItem(storageKey);
        return properties ? JSON.parse(properties) : [];
    }

    function saveRecentlyViewed(properties) {
        localStorage.setItem(storageKey, JSON.stringify(properties));
    }

    function addProperty(property) {
        let properties = getRecentlyViewed();
        if (properties.some(p => p.id === property.id)) {
            return;
        }
        properties.unshift(property);
        if (properties.length > maxProperties) {
            properties.pop();
        }
        saveRecentlyViewed(properties);
    }

    function renderRecentlyViewed() {
        let properties = getRecentlyViewed();
        let container = $("#recentlyViewedContainer");
        container.empty();
        properties.forEach(property => {
            let formattedPrice = Number(property.price).toLocaleString();
            let item = `<div class="media">
            <img style="width: 30%;height:100px" class="align-self-start mr-3" src="${property.img}">
            <div class="media-body">
                <a href="/property/${property.id}"><h5 class="m0 post_title">${property.title}</h5></a>
                <a class="text-black">AED ${formattedPrice}</a>
            </div>
            </div>`;
            container.append(item);
        });
    }

    $("body").on("click", ".view-property", function () {
        let property = {
            id: $(this).closest(".feat_property_cus").attr('data-listing-id'),
            img: $(this).closest(".feat_property_cus").attr('data-listing-img'),
            price: $(this).closest(".feat_property_cus").attr('data-listing-price'),
            title: $(this).closest(".feat_property_cus").attr('data-listing-title'),
        };
        addProperty(property);
        renderRecentlyViewed();
        setTimeout(function () {
            window.location.href = "/property/" + property.id
        }, 500)
    });

    renderRecentlyViewed();
})(window.jQuery);