// on each server startup add an array in memory for all the partners

Meteor.startup(
  function () {
  // code to run on server at startup
  // if (Partners.find().count() === 0) {
    Partners.remove({});
    var names = [
      "Adventure Links at Hemlock Overlook",
      "Anheuser-Busch",
      "Burnham Guides",
      "Chesterfield County Environmental Engineering",
      "Citizens for a Better Eastern Shore (CBES)",
      "City of Chesapeake CEIC",
      "City of Hampton Clean City Commission",
      "City of Manassas",
      "City of Newport News",
      "City of Norfolk (Keep Norfolk Beautiful)",
      "City of Poquoson - Office of Community Recreations",
      "City of Portsmouth - Keep Portsmouth Beautiful",
      "City of Richmond - James River Park System",
      "City of Suffolk",
      "City of Virginia Beach",
      "City of Williamsburg",
      "County of York",
      "Crown Pointe Marina",
      "Fort Monroe Authority",
      "Friends of the Lower Appomattox River",
      "Hampton Roads Saniation Distrrict",
      "Port of Virginia",
      "Reston Association",
      "SouthEast Expeditions at the Wharf",
      "SP - Bear Creek Lake State Park",
      "SP - Belle Isle State Park",
      "SP - Caledon State Park",
      "SP - Chippokes Plantation State Park",
      "SP - Douthat State Park",
      "SP - False Cape State Park",
      "SP - First Landing State Park",
      "SP - High Bridge Trail State Park",
      "SP - Holliday Lake State Park",
      "SP - James River State Park",
      "SP - Kiptopeke State Park",
      "SP - Lake Anna State Park",
      "SP - Leesylvania State Park",
      "SP - Mason Neck State Park",
      "SP - Pocahontas State Park",
      "SP - Powhatan State Park",
      "SP - Sailors Creek State Park",
      "SP - Shenandoah River State Park",
      "SP - Sky Meadows State Park",
      "SP - Twin Lakes State Park",
      "SP - Westmoreland State Park",
      "SP - York River State Park",
      "Tangier Pride, Inc.",
      "The Nature Conservancy",
      "The Oyster Farm at Kings Creek",
      "Town of Cape Charles",
      "Town of Shenandoah",
      "Town of Smithfield",
      "US Army Corps of Engineers",
      "US Navy - Hampton Roads",
      "US Navy - NAS Patuxent River",
      "Virginia Eastern Shore Land Trust",
      "Waste Watchers of the Eastern Shore",
      "Willoughby Harbor Marina"
    ];
    for (var i = 0; i < names.length; i++)
      Partners.insert({name: names[i]});

});
