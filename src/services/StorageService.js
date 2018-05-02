import _ from 'lodash';
const STORAGE_KEY = 'admin28328_*@&';

class StorageService {

	constructor() {}

	static isStorageSupported() {
		return typeof(Storage) !== 'undefined';
	}

	static setStorageData(dataObj) {
		if (!StorageService.isStorageSupported()) {
			return null;
		}		

		if (_.isString(dataObj)) {
			localStorage.setItem(STORAGE_KEY, dataObj);
			return true;
		} else if (_.isObject(dataObj)) {
			let serializiedData;
			try {
				serializiedData = JSON.stringify(dataObj);
				localStorage.setItem(STORAGE_KEY, serializiedData);
			} catch (err) { 
				console.log(err);
				return null;
			};
			return true;			
		}		
	}

	static getStorageData() {
		if (!StorageService.isStorageSupported()) {
			return;
		}
		let data = null;
		try {
			let serializiedData = localStorage.getItem(STORAGE_KEY);
			data = JSON.parse(serializiedData);
		} catch (err) { data = null; console.log(err); };
		return data;
	}

	static setUser(user) {
		if (!StorageService.isStorageSupported()) {
			return;
		}
		let allData = StorageService.getStorageData();
		if (_.isNil(allData)) {
			allData = {};
		}
		allData.userData = user;
		StorageService.setStorageData(allData);
	}

	static getUser() {
		if (!StorageService.isStorageSupported()) {
			return null;
		}
		const allData = StorageService.getStorageData();
		let userData = false;
		if (allData) {
			userData = allData.userData;
		}
		return userData;
	}

	static getToken() {		
		const userData = StorageService.getUser();
		return userData.token || null;
	}

	static removeUser() {
		if (!StorageService.isStorageSupported()) {
			return;
		}		
		StorageService.setUser(null);
	}

	static removeStorageData() {
		if (!StorageService.isStorageSupported()) {
			return;
		}
		try {
			localStorage.removeItem(STORAGE_KEY);
		} catch (err) { console.log(err) };		
	}	
}

export default StorageService;
