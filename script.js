document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const propertyId = getQueryParam('id');

    const propertyDetails = {
        1: {
            title: 'Siam Ocean View / 2 Bed 2 Bath Condo',
            location: 'Pratumnak',
            price: '฿8,900,000',
            description: 'Discover the perfect blend of luxury and convenience in this beautiful condo located in the heart of Pratumnak, Pattaya.',
            features: [
                '2 Bedrooms',
                '2 Bathrooms',
                'Ocean View',
                'Fully Furnished',
                'High-speed Internet'
            ],
            amenities: [
                'Swimming Pool',
                'Fitness Center',
                '24/7 Security',
                'Parking Space',
                'Garden Area'
            ],
            images: ['images/siamoceanview.jpg', 'images/kitchen.jpg', 'images/livingroom.jpg', 'images/livingroom2.jpg', 'images/bedroom2.jpg', 'images/bathroom.jpg']
        },
        2: {
            title: '2 Bed 2 Bath Condo',
            location: 'Pratumnak',
            price: '฿8,900,000',
            description: 'Discover this beautifully furnished 146 sqm condo on the second floor, offering an exquisite view over the swimming pool. Located in a tranquil soi near the golf course on Prathumnak Hill, this property is just a short walk to the beach, restaurants, and pubs.',
            features: [
                '2 Bedrooms',
                '2 Bathrooms',
                'Pool View',
                'Fully Furnished',
                'Balcony'
            ],
            amenities: [
                'Swimming Pool',
                'Gym',
                'Security System',
                'Covered Parking'
            ],
            images: ['images/house2a.jpg', 'images/house2b.jpg']
        },
        3: {
            title: 'Luxury Apartment',
            location: 'Pratumank',
            price: '฿8,000,000',
            description: 'An elegant apartment with premium finishes and a prime location.',
            features: [
                '3 Bedrooms',
                '3 Bathrooms',
                'City View',
                'Modern Design'
            ],
            amenities: [
                'Rooftop Pool',
                'Fitness Studio',
                'Concierge Service',
                'Parking',
                '24/7 Security'
            ],
            images: ['images/house3a.jpg', 'images/house3b.jpg']
        }
    };

    const property = propertyDetails[propertyId];
    if (property) {
        document.getElementById('property-title').innerText = property.title;
        document.getElementById('property-location').innerHTML = `<i class='bx bx-location-plus'></i> Location: ${property.location}`;
        document.getElementById('property-price').innerHTML = `<i class='bx bx-money'></i> Price: ${property.price}`;
        document.getElementById('property-description').innerHTML = `<i class='bx bx-description'></i> Description: ${property.description}`;
        
        const featuresList = document.getElementById('features-list');
        featuresList.innerHTML = property.features.map(feature => `<li>${feature}</li>`).join('');

        const amenitiesList = document.getElementById('amenities-list');
        amenitiesList.innerHTML = property.amenities.map(amenity => `<li>${amenity}</li>`).join('');

        const sliderImages = document.getElementById('slider-images');
        sliderImages.innerHTML = property.images.map(img => `<div class="slide"><img src="${img}" alt="${property.title}"></div>`).join('');
    } else {
        document.querySelector('.property-details').innerHTML = `<p>Property not found. <a href="buy-rent.html" class="btn">Back to Listings</a></p>`;
    }

    // Slider Functionality
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let index = 0;

    function showSlide(newIndex) {
        if (newIndex >= slideCount) {
            index = 0;
        } else if (newIndex < 0) {
            index = slideCount - 1;
        } else {
            index = newIndex;
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => showSlide(index - 1));
    nextButton.addEventListener('click', () => showSlide(index + 1));
});
