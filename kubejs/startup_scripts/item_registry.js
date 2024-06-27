///// REGISTER NEW ITEMS HERE /////
onEvent("item.registry", (event) => {
    event.create("createastral:crushed_raw_desh"),
    event.create("createastral:crushed_raw_ostrum"),
    event.create("createastral:crushed_raw_calorite"),
    event.create("createastral:subatomic_ingot"),
    event.create("createastral:prismatic_crystal"),
    event.create("createastral:astral_conduit").maxStackSize(1).maxDamage(20);
    event.create("createastral:andesite_compound"),
    event.create("createastral:bronze_sheet"),
    event.create("createastral:olivine_sheet"),
    event.create("create:lapis_sheet"),
    event.create("create:integrated_circuit"),
    event.create("createastral:incomplete_electronic_circuit"),
    event.create("createastral:golden_pin"),
    event.create("createastral:calorite_pin"),
    event.create("createastral:electrified_pin"),
    event.create("createastral:logo"),
    event.create("createastral:bronze_ingot"),
    event.create("createastral:navigation_mechanism");
    event.create("createastral:coin", "create:sequenced_assembly").displayName("Golden Coin");

    event.create("createastral:quadrocopter_blueprint").texture("create:item/schematic"),
    event.create("createastral:gyrodyne_blueprint").texture("create:item/schematic"),
    event.create("createastral:biplane_blueprint").texture("create:item/schematic"),
    event.create("createastral:airship_blueprint").texture("create:item/schematic"),
    event.create("createastral:refining_agent"),
    event.create("createastral:separation_agent"),
    event.create("createastral:shimmer_amplifier"),
    event.create("createastral:star_shard").glow(true),
    event.create("createastral:pure_star_shard").glow(true),
    event.create("createastral:crushed_raw_gadolinite"),
    event.create("createastral:experience_ingot").glow(true),
    event.create("createastral:stone_dust").displayName("Stone Dust");
    event.create("createastral:stone_small_dust").displayName("Small Pile of Stone Dust");

    event.create("createastral:golden_bowl").displayName("Golden Bowl");
    event
        .create("createastral:filled_golden_bowl", "create:sequenced_assembly")
        .displayName("Filled Golden Bowl")
        .food((food) => {
            food.hunger(0).saturation(0).effect("drinkbeer:drunk", 3000, 0, 1).alwaysEdible();
        });
    event
        .create("createastral:seitan")
        .displayName("Seitan")
        .food((food) => {
            food.hunger(2).saturation(0.5).alwaysEdible();
        });

    //Radiant Armor And Tools//
    event.create("createastral:radiant_helmet", "helmet").tier("radiantarmor").glow(true).rarity("Epic"),
    event.create("createastral:radiant_chestplate", "chestplate").tier("radiantarmor").glow(true).rarity("Epic"),
    event.create("createastral:radiant_leggings", "leggings").tier("radiantarmor").glow(true).rarity("Epic"),
    event.create("createastral:radiant_boots", "boots").tier("radiantarmor").glow(true).rarity("Epic"),
    event.create("createastral:radiant_sword", "sword").tier("radiant").glow(true).rarity("Epic"),
    event.create("createastral:radiant_pickaxe", "pickaxe").tier("radiant").glow(true).rarity("Epic"),
    event.create("createastral:radiant_axe", "axe").tier("radiant").glow(true).rarity("Epic"),
    event.create("createastral:radiant_shovel", "shovel").tier("radiant").glow(true).rarity("Epic"),
    //Copper Armor And Tools//
    event.create("createastral:copper_helmet", "helmet").tier("copperarmor"),
    event.create("createastral:copper_chestplate", "chestplate").tier("copperarmor"),
    event.create("createastral:copper_leggings", "leggings").tier("copperarmor"),
    event.create("createastral:copper_boots", "boots").tier("copperarmor"),
    event.create("createastral:copper_sword", "sword").tier("copper"),
    event.create("createastral:copper_pickaxe", "pickaxe").tier("copper"),
    event.create("createastral:copper_axe", "axe").tier("copper"),
    event.create("createastral:copper_shovel", "shovel").tier("copper"),
    event.create("createastral:copper_hoe", "hoe").tier("copper"),
    //Brass Armor And Tools//
    event.create("createastral:brass_helmet", "helmet").tier("brassarmor"),
    event.create("createastral:brass_chestplate", "chestplate").tier("brassarmor"),
    event.create("createastral:brass_leggings", "leggings").tier("brassarmor"),
    event.create("createastral:brass_boots", "boots").tier("brassarmor"),
    event.create("createastral:brass_sword", "sword").tier("brass"),
    event.create("createastral:brass_pickaxe", "pickaxe").tier("brass"),
    event.create("createastral:brass_axe", "axe").tier("brass"),
    event.create("createastral:brass_shovel", "shovel").tier("brass"),
    event.create("createastral:brass_hoe", "hoe").tier("brass"),
    //Steel Armor//
    event.create("createastral:steel_helmet", "helmet").tier("steelarmor"),
    event.create("createastral:steel_chestplate", "chestplate").tier("steelarmor"),
    event.create("createastral:steel_leggings", "leggings").tier("steelarmor"),
    event.create("createastral:steel_boots", "boots").tier("steelarmor"),
    //Sturdy Armor//
    event.create("createastral:sturdy_helmet", "helmet").tier("sturdyarmor"),
    event.create("createastral:sturdy_chestplate", "chestplate").tier("sturdyarmor"),
    event.create("createastral:sturdy_leggings", "leggings").tier("sturdyarmor"),
    event.create("createastral:sturdy_boots", "boots").tier("sturdyarmor"),
    //Other Items//
    event.create("createastral:orcane").displayName("Information / General Progression").glow(true),
    event.create("createastral:astral_singularity").food((food) => {
        food.hunger(50)
            .saturation(50) //This value does not directly translate to saturation points gained
            //The real value can be assumed to be:
            //min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
            .effect("regeneration", 3000, 0, 1)
            .effect("speed", 3000, 0, 1)
            .effect("saturation", 3000, 0, 1)
            .effect("glowing", 6000, 0, 1)
            .removeEffect("poison")
            .alwaysEdible(); //Like golden apples
    });
    event.create("createastral:pure_biomatter");
    event.create("createastral:lime").displayName("Lime Dust");
});