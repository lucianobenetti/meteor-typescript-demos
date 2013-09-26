/// <reference path="packages/typescript-libs/lib.d.ts" />
/// <reference path="packages/typescript-libs/meteor.d.ts" />


interface ItemsDAO {
	_id?: string;
	body:string;
}

declare var Items:Meteor.Collection<ItemsDAO>;

Items = new Meteor.Collection<ItemsDAO>('items');