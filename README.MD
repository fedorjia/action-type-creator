> action type creator for react or vue

we don't want

```
export const USER_UPDATE = 'USER_UPDATE';
export const USER_LOAD = 'USER_LOAD';
export const USER_LOAD_REQUEST = 'USER_LOAD_REQUEST';
export const USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS';
export const USER_LOAD_FAILURE = 'USER_LOAD_FAILURE';
```

what about this

```
const types = {
	user: [ 'UPDATE',  '_LOAD_' ]
}
```

#Usage

1. `npm install --save action-types-creator`

2. _create file something like `actions.js`_

```
import { createActionType } from 'action-types-creator';

const types = {
	user: [ 'UPDATE',  '_LOAD_' ]
}

const o = createActionType(types);

// export each action type
for(const item in o) {
	exports[item] = o[item];
}
```

then

```
import { user } from './to/path/actions.js';

console.log(user.UPDATE); // USER_UPDATE
console.log(user.LOAD); //  USER_LOAD
console.log(user.LOAD_REQUEST); //  USER_LOAD_REQUEST
console.log(user.LOAD_SUCCESS); //  USER_LOAD_SUCCESS
console.log(user.LOAD_FAILURE); //  USER_LOAD_FAILURE
```

enjoy