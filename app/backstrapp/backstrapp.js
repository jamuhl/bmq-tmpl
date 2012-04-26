define([
    './recombinator',
    './baseCollection',
    './baseModel',
    './baseController',
    './baseRouter',
    './extendedItemView',
    './qs'
],

function(recombination, BaseCollection, BaseModel, BaseController, BaseRouter, ExtendedItemView, QS) {

	recombination.Collection = BaseCollection;
	recombination.Model = BaseModel;
	recombination.Controller = BaseController;
	recombination.Router = BaseRouter;
	recombination.ExtendedItemView = ExtendedItemView;
	recombination.qs = new QS();

	return recombination;
});