export default function health(dict) {
    if ( dict['health'] >= 0 ) {
        if ( dict['health'] > 50 ) {
            return "healthy"
        } else if ( dict['health'] < 15 ) {
            return "critical"
        } else { return "wounded" }
    } else { return "" }
}

