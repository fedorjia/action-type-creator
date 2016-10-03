function startsWith(s0, s1) {
	return s1.length > 0 && s0.substring( 0, s1.length ) === s1;
}

function endsWith(s0, s1) {
	return s1.length > 0 && s0.substring( s0.length - s1.length, s0.length ) === s1;
}

/***
 * action types creator
 *
 * types likes :
 *
 *   const types = {
 *		user: [ 'LOAD', '_LOAD_' ]
 *	}
 *
 *  * user.LOAD
 *          will generate: USER_LOAD
 *
 *  * user._LOAD_
 *          will generate four action types:
 * 	        USER_LOAD, USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAILURE
 */

exports.createActionType = function(types) {
	var o = {};
	for(var type in types) {
		o[type] = {};
		const items = types[type];
		for(var i=0; i<items.length; i++) {
			var item = items[i];
			item = item.toUpperCase();
			if(startsWith(item, '_') && endsWith(item, '_')) {
				item = item.substring(1, item.length - 1);
				o[type][item] = type.toUpperCase() + '_' + item;
				o[type][item + '_REQUEST'] = type.toUpperCase() + '_' + item + '_REQUEST';
				o[type][item + '_SUCCESS'] = type.toUpperCase() + '_' + item + '_SUCCESS';
				o[type][item + '_FAILURE'] = type.toUpperCase() + '_' + item + '_FAILURE';
			} else {
				o[type][item] = type.toUpperCase() + '_' + item;
			}
		}
	}
	return o;
};