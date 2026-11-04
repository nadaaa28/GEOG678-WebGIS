function Run() {
    // Get the array of points from data.js
    var data = theJSON.data;

    // Calculate the four bounding box corners
    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    // Store the corners in one output object
    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };
    console.log("Bounding box computed for nandita.qothrunnada@tamu.edu:");
    console.log(boundingBox);
}
// Top left: maximum latitude and minimum longitude
function findTopLeft(data) {
    var maxLat = data[0].lat;
    var minLon = data[0].lon;

    data.forEach(function(point) {
        if (point.lat > maxLat) {
            maxLat = point.lat;
        }
        if (point.lon < minLon) {
            minLon = point.lon;
        }
    });

    return { lat: maxLat, lon: minLon };
}

// Top right: maximum latitude and maximum longitude
function findTopRight(data) {
    var maxLat = data[0].lat;
    var maxLon = data[0].lon;

    data.forEach(function(point) {
        if (point.lat > maxLat) {
            maxLat = point.lat;
        }
        if (point.lon > maxLon) {
            maxLon = point.lon;
        }
    });

    return { lat: maxLat, lon: maxLon };
}

// Bottom left: minimum latitude and minimum longitude
function findBottomLeft(data) {
    var minLat = data[0].lat;
    var minLon = data[0].lon;

    data.forEach(function(point) {
        if (point.lat < minLat) {
            minLat = point.lat;
        }
        if (point.lon < minLon) {
            minLon = point.lon;
        }
    });

    return { lat: minLat, lon: minLon };
}

// Bottom right: minimum latitude and maximum longitude
function findBottomRight(data) {
    var minLat = data[0].lat;
    var maxLon = data[0].lon;

    data.forEach(function(point) {
        if (point.lat < minLat) {
            minLat = point.lat;
        }
        if (point.lon > maxLon) {
            maxLon = point.lon;
        }
    });

    return { lat: minLat, lon: maxLon };
}