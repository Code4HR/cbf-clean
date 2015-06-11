// on each server startup add an array in memory for all the partners

Meteor.startup(
  function () {
  // code to run on server at startup
  // if (Partners.find().count() === 0) {
    Partners.remove({});
    var names = [
    "Adventure Links at Hemlock Overlook",
    "Anheuser-Busch/Colonial Parkway",
    "Cape Charles, Town of",
    "Charlottesville: Darden Towe Canoe Float",
    "Charlottesville: Meadow Creek",
    "Charlottesville: Pollock’s Branch at S. First Street",
    "Charlottesville: Riverview Park",
    "Chesapeake, City of",
    "Chesterfield County",
    "Chincoteague Bay Field Station & Virginia Eastern Shorekeeper",
    "Citizens for a Better Eastern Shore (CBES)",
    "Crown Pointe Marina",
    "Eastern Shore Soil & Water Conservation District",
    "Fort Monroe Authority/NPS",
    "Hampton Roads Sanitation District Employees Association",
    "Hampton, City of",
    "Isle of Wight County",
    "James River Park System (City of Richmond)",
    "Manassas/Girl Scouts",
    "Newport News, City of",
    "Norfolk, City of",
    "Onancock Creek/Burnham Guides",
    "Poquoson, City of",
    "Port of Virginia",
    "Portsmouth, City of",
    "Reston Association",
    "Shenandoah, Town of",
    "Smithfield Foods",
    "Smithfield, Town of (Windor Castle Park)",
    "SouthEast Expeditions at the Wharf",
    "SP - Bear Creek Lake State Park",
    "SP - Belle Isle State Park",
    "SP - Caledon State Park",
    "SP - Chippokes Plantation State Park",
    "SP - Douthat State Park",
    "SP - False Cape State Park",
    "SP - High Bridge Trail State Park/Clean Virginia Waterways",
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
    "Suffolk, City of",
    "Tangier Pride, Inc.",
    "US Army Corps of Engineers (Craney Island)",
    "US NAVY",
    "Virginia Beach, City of",
    "Virginia Eastern Shore Land Trust (Exmore)",
    "Waste Watchers of the Eastern Shore (Melfa)",
    "Willoughby Harbor Marina",
    "York County"
    ];
    for (var i = 0; i < names.length; i++)
      Partners.insert({name: names[i]});

});
