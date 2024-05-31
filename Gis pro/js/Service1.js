// Initialize the map and set its view to a default location and zoom level
var map = L.map('map').setView([31.2796727, 30.0660797], 10);

// Set up the OSM layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// List of geo-locations to be marked on the map
var locations = [
    { lat: 31.2796727, lng: 30.0660797, name: "General Administration of Medical Affairs - Ain Shams University (Students' Hospital)" },
    { lat: 31.2524874, lng: 30.0634118, name: "Coptic Hospital" },
    { lat: 31.2846066, lng: 30.0662922, name: "مستشفى الصدر" },
    { lat: 31.278967, lng: 30.0728272, name: "Cardiac Surgical Academy" },
    { lat: 31.2807254, lng: 30.066489, name: "المركز المصرى للقدم السكرى - DFC Egypt" },
    { lat: 31.2930408, lng: 30.0857882, name: "عيادات تخصيصة ابو بكر الصديق الخيري 369" },
    { lat: 31.2802206, lng: 30.069271, name: "Abbassia Regional Blood Transfusion Center" },
    { lat: 31.276441, lng: 30.0741391, name: "مستشفى الشهيد المهندس أحمد شوقى لطب المسنين" },
    { lat: 31.2784966, lng: 30.0739505, name: "TEEC Ain Shams University Hospital" },
    { lat: 31.2902058, lng: 30.0763458, name: "Ain Shams University Specialized Hospital (ASUSH)" },
    { lat: 31.2835041, lng: 30.0616235, name: "مستشفى مركز العربى الطبى" },
    { lat: 31.2788882, lng: 30.0725854, name: "مستشفي القلب والاوعية الدموية بالعباسية" },
    { lat: 31.2794452, lng: 30.0744888, name: "Pediatrics Hospital - Ain Shams University" },
    { lat: 31.2834637, lng: 30.0611231, name: "مستشفي العربي مجمع عيادات الامل" },
    { lat: 31.2765855, lng: 30.0741748, name: "Ain Shams Demerdash Hospital" },
    { lat: 31.2785482, lng: 30.0667042, name: "Abbasiya Medical Center" },
    { lat: 31.2800323, lng: 30.0754409, name: "Ainshams University Maternity Hospital" },
    { lat: 31.281388, lng: 30.0740796, name: "Children's Hospital, Faculty of Medicine, Ain Shams University" },
    { lat: 31.2598939, lng: 30.0642781, name: "El Galal Hospital" },
    { lat: 31.2870799, lng: 30.0728494, name: "Egyptian Psychiatric Association" },
    { lat: 31.2744152, lng: 30.0662692, name: "Evangelical Clinic" },
    { lat: 31.2756683, lng: 30.0738972, name: "عيادة الأطفال بمستشفى الدمرداش" },
    { lat: 31.2814659, lng: 30.0647307, name: "Al-Zahraa Hospital - Abdou Pasha" },
    { lat: 31.2703821, lng: 30.0634874, name: "Dr. Muhammad Al 3awady" },
    { lat: 31.2910819, lng: 30.0762849, name: "المستشفي الميداني لمرضي كورونا بمستشفي عين شمس التخصصي" },
    { lat: 31.2769842, lng: 30.0581246, name: "مستشفي البعوث" },
    { lat: 31.2730032, lng: 30.0621381, name: "ميدان الإسبتالية الفرنساوي - Farwansawy Ispetalia square" },
    { lat: 31.2764971, lng: 30.0733427, name: "مشروع إنشاء مستشفي الطوارئ الجديد بمستشفي الدمرداش" },
    { lat: 31.2738788, lng: 30.0624117, name: "مستشفى الطيران" },
    { lat: 31.2765847, lng: 30.0742446, name: "Internal Medicine, Ain Shams University" },
    { lat: 31.2678642, lng: 30.066083, name: "مستشفى الظاهر التخصصى" },
    { lat: 31.2781506, lng: 30.0734767, name: "مستشفى جامعة عين شمس _ الصدر" },
    { lat: 31.2768246, lng: 30.0749256, name: "مبني العياده الخارجيه مستشفي دار الشفاء" },
    { lat: 31.2821768, lng: 30.06677, name: "مستشفى الباطنه" },
    { lat: 31.2840943, lng: 30.0670137, name: "Italian Hospital" },
    { lat: 31.2804697, lng: 30.075276, name: "مستشفى الشعب" },
    { lat: 31.2769151, lng: 30.0577482, name: "Obstetricians & Gynecologists Hospital - Ain Shams University" },
    { lat: 31.26277, lng: 30.0668212, name: "مستشفى الطلبه التأمين" },
    { lat: 31.2786585, lng: 30.0714664, name: "مستشفى الأمل التخصصي" },
    { lat: 31.2825389, lng: 30.0718511, name: "Dar El-Shefa Hospital" },
    { lat: 31.2744887, lng: 30.0626945, name: "مستشفى أركان التخصصي" },
    { lat: 31.2807295, lng: 30.0666359, name: "Air Force General Hospital" },
    { lat: 31.2719091, lng: 30.0722891, name: "Greek Hospital in Cairo" },
    { lat: 31.2804559, lng: 30.0733645, name: "مركز واحة الطب" },
    { lat: 31.2824867, lng: 30.0704467, name: "مستشفي الأطفال الجامعي الجديد - الدمرداش" },
    { lat: 31.2763861, lng: 30.0629301, name: "مستشفى اركان التخصصي بجوار ملجأ المواساة" },
    { lat: 31.2821768, lng: 30.06677, name: "Hassan Hospital" }
];

// Add markers to the map
locations.forEach(function(location) {
    L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(location.name);
});

// Function to add a marker to the map
function addMarker() {
    // Get user input values
    var lat = document.getElementById('latitude').value;
    var lng = document.getElementById('longitude').value;
    var name = document.getElementById('name').value;

    // Validate inputs
    if (lat === '' || lng === '' || name === '') {
        alert('Please fill in all fields');
        return;
    }

    lat = parseFloat(lat);
    lng = parseFloat(lng);

    if (isNaN(lat) || isNaN(lng)) {
        alert('Please enter valid coordinates');
        return;
    }

    // Add marker to the map
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(name)
        .openPopup();

    // Center the map to the new marker
    map.setView([lat, lng], 10);

    // Clear input fields
    document.getElementById('latitude').value = '';
    document.getElementById('longitude').value = '';
    document.getElementById('name').value = '';
}