const products = 
[
  {
    "id": "prod001",
    "title": "Scandinavian Oak Dining Table",
    "description": "A sturdy, minimalist dining table made from solid natural oak with clean, tapered legs. Comfortably seats 6 people.",
    "price": 1250.00,
    "oldPrice": 1499.00,
    "stock": 15,
    "reviews": 4.7,
    "color": {
      "name": "Natural Oak",
      "referenceColor": "#B8860B",
      "availableColors": [
        {
          "name": "Natural Oak",
          "referenceColor": "#B8860B"
        },
        {
          "name": "Smoke Gray",
          "referenceColor": "#708090"
        }
      ]
    },
    "materials": [
      "Solid Oak Wood",
      "Steel Reinforcements"
    ],
    "details": [
      "Seats 6-8",
      "Water-resistant matte finish",
      "Easy assembly",
      "Tapered legs",
      "Materials: Solid Oak Wood, Steel Reinforcements",
      "Dimensions: 180 cm (W) x 95 cm (D) x 75 cm (H)"
    ],
    "dimensions": {
      "widthCm": 180,
      "heightCm": 75,
      "depthCm": 95
    },
    "photos": {
      "Natural Oak": {
        "main": "Scandinavian_Oak_Dining_Table_1.jpg",
        "other": [
          "Scandinavian_Oak_Dining_Table_3.jpg",
          "Scandinavian_Oak_Dining_Table_5.jpg",
          "Scandinavian_Oak_Dining_Table_7.jpg"
        ]
      },
      "Smoke Gray": {
        "main": "Scandinavian_Oak_Dining_Table_2.jpg",
        "other": [
          "Scandinavian_Oak_Dining_Table_4.jpg",
          "Scandinavian_Oak_Dining_Table_6.jpg",
          "Scandinavian_Oak_Dining_Table_8.jpg"
        ]
      }
    },
    "tags": {
      "type": "Table",
      "place": "Dining Room",
      "other": [
        "Wood",
        "Modern",
        "Solid",
        "Large"
      ]
    }
  },
  {
    "id": "prod002",
    "title": "Velvet Tufted Armchair",
    "description": "A luxurious accent armchair upholstered in soft emerald velvet, featuring classic button tufting and elegant tapered brass legs.",
    "price": 450.00,
    "oldPrice": null,
    "stock": 25,
    "reviews": 4.8,
    "color": {
      "name": "Emerald Green",
      "referenceColor": "#50C878",
      "availableColors": [
        {
          "name": "Emerald Green",
          "referenceColor": "#50C878"
        },
        {
          "name": "Navy Blue",
          "referenceColor": "#000080"
        },
        {
          "name": "Blush Pink",
          "referenceColor": "#FFC0CB"
        }
      ]
    },
    "materials": [
      "Velvet Upholstery",
      "Solid Pine Frame",
      "Brass Legs"
    ],
    "details": [
      "High-density foam cushion",
      "Brass finish legs",
      "Diamond tufting",
      "Minor assembly",
      "Materials: Velvet Upholstery, Solid Pine Frame, Brass Legs",
      "Dimensions: 80 cm (W) x 85 cm (D) x 85 cm (H)"
    ],
    "dimensions": {
      "widthCm": 80,
      "heightCm": 85,
      "depthCm": 85
    },
    "photos": {
      "Emerald Green": {
        "main": "Velvet_Tufted_Armchair_1.jpg",
        "other": [
          "Velvet_Tufted_Armchair_4.jpg",
          "Velvet_Tufted_Armchair_7.jpg"
        ]
      },
      "Navy Blue": {
        "main": "Velvet_Tufted_Armchair_2.jpg",
        "other": [
          "Velvet_Tufted_Armchair_5.jpg",
          "Velvet_Tufted_Armchair_8.jpg"
        ]
      },
      "Blush Pink": {
        "main": "Velvet_Tufted_Armchair_3.jpg",
        "other": [
          "Velvet_Tufted_Armchair_6.jpg",
          "Velvet_Tufted_Armchair_9.jpg"
        ]
      }
    },
    "tags": {
      "type": "Chair",
      "place": "Living Room",
      "other": [
        "Comfort",
        "Velvet",
        "Accent",
        "Luxury"
      ]
    }
  },
  {
    "id": "prod003",
    "title": "Industrial Open Bookshelf",
    "description": "A tall, five-tier shelving unit combining distressed wood and matte black metal. Perfect for an industrial or urban loft look.",
    "price": 289.99,
    "oldPrice": 349.99,
    "stock": 80,
    "reviews": 4.5,
    "color": {
      "name": "Rustic Brown",
      "referenceColor": "#8B4513",
      "availableColors": [
        {
          "name": "Rustic Brown",
          "referenceColor": "#8B4513"
        },
        {
          "name": "Smoke Gray",
          "referenceColor": "#A9A9A9"
        }
      ]
    },
    "materials": [
      "Wood Veneer (MDF)",
      "Powder-Coated Iron"
    ],
    "details": [
      "Five spacious tiers",
      "Anti-tip hardware included",
      "Adjustable feet",
      "Industrial style",
      "Materials: Wood Veneer (MDF), Powder-Coated Iron",
      "Dimensions: 90 cm (W) x 30 cm (D) x 180 cm (H)"
    ],
    "dimensions": {
      "widthCm": 90,
      "heightCm": 180,
      "depthCm": 30
    },
    "photos": {
      "Rustic Brown": {
        "main": "Industrial_Open_Bookshelf_1.jpg",
        "other": [
          "Industrial_Open_Bookshelf_3.jpg",
          "Industrial_Open_Bookshelf_5.jpg"
        ]
      },
      "Smoke Gray": {
        "main": "Industrial_Open_Bookshelf_2.jpg",
        "other": [
          "Industrial_Open_Bookshelf_4.jpg",
          "Industrial_Open_Bookshelf_6.jpg"
        ]
      }
    },
    "tags": {
      "type": "Storage",
      "place": "Office",
      "other": [
        "Metal",
        "Wood",
        "Open-back",
        "Tall"
      ]
    }
  },
  {
    "id": "prod004",
    "title": "Modern Linen 3-Seater Sofa",
    "description": "Comfortable, deep-seated sofa with durable linen fabric and squared arms. Features high-resiliency foam cushions for long life.",
    "price": 999.99,
    "oldPrice": 1200.00,
    "stock": 10,
    "reviews": 4.6,
    "color": {
      "name": "Light Grey",
      "referenceColor": "#D3D3D3",
      "availableColors": [
        {
          "name": "Light Grey",
          "referenceColor": "#D3D3D3"
        },
        {
          "name": "Oatmeal",
          "referenceColor": "#F0EAD6"
        },
        {
          "name": "Charcoal",
          "referenceColor": "#36454F"
        }
      ]
    },
    "materials": [
      "Linen Blend Fabric",
      "Kiln-Dried Hardwood"
    ],
    "details": [
      "Reversible seat cushions",
      "Stain-resistant fabric",
      "Removable pillow covers",
      "No-sag spring system",
      "Materials: Linen Blend Fabric, Kiln-Dried Hardwood",
      "Dimensions: 210 cm (W) x 90 cm (D) x 88 cm (H)"
    ],
    "dimensions": {
      "widthCm": 210,
      "heightCm": 88,
      "depthCm": 90
    },
    "photos": {
      "Light Grey": {
        "main": "Modern_Linen_3-Seater_Sofa_1.jpg",
        "other": [
          "Modern_Linen_3-Seater_Sofa_4.jpg",
          "Modern_Linen_3-Seater_Sofa_7.jpg"
        ]
      },
      "Oatmeal": {
        "main": "Modern_Linen_3-Seater_Sofa_2.jpg",
        "other": [
          "Modern_Linen_3-Seater_Sofa_5.jpg",
          "Modern_Linen_3-Seater_Sofa_8.jpg"
        ]
      },
      "Charcoal": {
        "main": "Modern_Linen_3-Seater_Sofa_3.jpg",
        "other": [
          "Modern_Linen_3-Seater_Sofa_6.jpg",
          "Modern_Linen_3-Seater_Sofa_9.jpg"
        ]
      }
    },
    "tags": {
      "type": "Sofa",
      "place": "Living Room",
      "other": [
        "Comfort",
        "Fabric",
        "Modern",
        "Hardwood"
      ]
    }
  },
  {
    "id": "prod005",
    "title": "Carrara Marble Coffee Table",
    "description": "Elegant round coffee table with a genuine white Carrara marble top and a matte gold geometric base.",
    "price": 350.00,
    "oldPrice": null,
    "stock": 35,
    "reviews": 4.9,
    "color": {
      "name": "White Marble / Gold",
      "referenceColor": "#FFD700",
      "availableColors": [
        {
          "name": "White Marble / Gold",
          "referenceColor": "#FFD700"
        },
        {
          "name": "Black Marble / Silver",
          "referenceColor": "#C0C0C0"
        }
      ]
    },
    "materials": [
      "Natural Carrara Marble",
      "Gold-Plated Metal"
    ],
    "details": [
      "Genuine marble top",
      "Hand-polished finish",
      "Scratch-resistant base",
      "Minimalist design",
      "Materials: Natural Carrara Marble, Gold-Plated Metal",
      "Dimensions: 80 cm (W) x 80 cm (D) x 40 cm (H)"
    ],
    "dimensions": {
      "widthCm": 80,
      "heightCm": 40,
      "depthCm": 80
    },
    "photos": {
      "White Marble / Gold": {
        "main": "Carrara_Marble_Coffee_Table_1.jpg",
        "other": [
          "Carrara_Marble_Coffee_Table_3.jpg",
          "Carrara_Marble_Coffee_Table_5.jpg"
        ]
      },
      "Black Marble / Silver": {
        "main": "Carrara_Marble_Coffee_Table_2.jpg",
        "other": [
          "Carrara_Marble_Coffee_Table_4.jpg",
          "Carrara_Marble_Coffee_Table_6.jpg"
        ]
      }
    },
    "tags": {
      "type": "Table",
      "place": "Living Room",
      "other": [
        "Stone",
        "Metal",
        "Round",
        "Luxury"
      ]
    }
  },
  {
    "id": "prod006",
    "title": "Mid-Century Walnut Dresser",
    "description": "A six-drawer dresser with a rich walnut finish and distinctive tapered legs. Provides generous storage for any bedroom.",
    "price": 780.00,
    "oldPrice": 850.00,
    "stock": 5,
    "reviews": 4.7,
    "color": {
      "name": "Dark Walnut",
      "referenceColor": "#654321",
      "availableColors": [
        {
          "name": "Dark Walnut",
          "referenceColor": "#654321"
        },
        {
          "name": "Natural Teak",
          "referenceColor": "#C99A6E"
        }
      ]
    },
    "materials": [
      "Walnut Veneer",
      "Solid Rubberwood"
    ],
    "details": [
      "Six deep drawers",
      "Soft-close slides",
      "Tapered mid-century legs",
      "Assembly required",
      "Materials: Walnut Veneer, Solid Rubberwood",
      "Dimensions: 150 cm (W) x 45 cm (D) x 85 cm (H)"
    ],
    "dimensions": {
      "widthCm": 150,
      "heightCm": 85,
      "depthCm": 45
    },
    "photos": {
      "Dark Walnut": {
        "main": "Mid-Century Walnut Dresser_1.jpg",
        "other": [
          "Mid-Century Walnut Dresser_3.jpg",
          "Mid-Century Walnut Dresser_5.jpg"
        ]
      },
      "Natural Teak": {
        "main": "Mid-Century Walnut Dresser_2.jpg",
        "other": [
          "Mid-Century Walnut Dresser_4.jpg",
          "Mid-Century Walnut Dresser_6.jpg"
        ]
      }
    },
    "tags": {
      "type": "Storage",
      "place": "Bedroom",
      "other": [
        "Wood",
        "Mid-Century",
        "Dresser",
        "Large"
      ]
    }
  },
  {
    "id": "prod007",
    "title": "Adjustable Bar Stool (Set of 2)",
    "description": "Hydraulic lift bar stools with a faux leather seat and chrome base. Ideal for kitchen islands or bar areas.",
    "price": 199.99,
    "oldPrice": 249.99,
    "stock": 120,
    "reviews": 4.5,
    "color": {
      "name": "Black",
      "referenceColor": "#000000",
      "availableColors": [
        {
          "name": "Black",
          "referenceColor": "#000000"
        },
        {
          "name": "White",
          "referenceColor": "#FFFFFF"
        },
        {
          "name": "Red",
          "referenceColor": "#FF0000"
        }
      ]
    },
    "materials": [
      "Faux Leather",
      "Chrome-Plated Steel"
    ],
    "details": [
      "Set of 2",
      "360-degree swivel",
      "Adjustable height (60-80cm)",
      "Built-in footrest",
      "Materials: Faux Leather, Chrome-Plated Steel",
      "Dimensions: 45 cm (W) x 45 cm (D) x 90 cm (H)"
    ],
    "dimensions": {
      "widthCm": 45,
      "heightCm": 90,
      "depthCm": 45
    },
    "photos": {
      "Black": {
        "main": "Adjustable_Bar_Stool_(Set_of_2)_1.jpg",
        "other": [
          "Adjustable_Bar_Stool_(Set_of_2)_4.jpg",
          "Adjustable_Bar_Stool_(Set_of_2)_7.jpg"
        ]
      },
      "White": {
        "main": "Adjustable_Bar_Stool_(Set_of_2)_2.jpg",
        "other": [
          "Adjustable_Bar_Stool_(Set_of_2)_5.jpg",
          "Adjustable_Bar_Stool_(Set_of_2)_8.jpg"
        ]
      },
      "Red": {
        "main": "Adjustable_Bar_Stool_(Set_of_2)_3.jpg",
        "other": [
          "Adjustable_Bar_Stool_(Set_of_2)_6.jpg",
          "Adjustable_Bar_Stool_(Set_of_2)_9.jpg"
        ]
      }
    },
    "tags": {
      "type": "Chair",
      "place": "Kitchen",
      "other": [
        "Metal",
        "Adjustable",
        "Set",
        "Comfort"
      ]
    }
  },
  {
    "id": "prod008",
    "title": "Rustic Farmhouse Console Table",
    "description": "A long, narrow console table featuring a distressed gray finish and lower slatted shelf. Perfect for hallways or behind a sofa.",
    "price": 320.00,
    "oldPrice": null,
    "stock": 50,
    "reviews": 4.4,
    "color": {
      "name": "Distressed Gray",
      "referenceColor": "#A9A9A9",
      "availableColors": [
        {
          "name": "Distressed Gray",
          "referenceColor": "#A9A9A9"
        },
        {
          "name": "Antique White",
          "referenceColor": "#FAEBD7"
        }
      ]
    },
    "materials": [
      "Reclaimed Pinewood"
    ],
    "details": [
      "Two-tier design",
      "Slatted bottom shelf",
      "Hand-painted distressed finish",
      "Wall anchor included",
      "Materials: Reclaimed Pinewood",
      "Dimensions: 140 cm (W) x 35 cm (D) x 80 cm (H)"
    ],
    "dimensions": {
      "widthCm": 140,
      "heightCm": 80,
      "depthCm": 35
    },
    "photos": {
      "Distressed Gray": {
        "main": "Rustic_Farmhouse_Console_Table_1.jpg",
        "other": [
          "Rustic_Farmhouse_Console_Table_3.jpg",
          "Rustic_Farmhouse_Console_Table_5.jpg"
        ]
      },
      "Antique White": {
        "main": "Rustic_Farmhouse_Console_Table_2.jpg",
        "other": [
          "Rustic_Farmhouse_Console_Table_4.jpg",
          "Rustic_Farmhouse_Console_Table_6.jpg"
        ]
      }
    },
    "tags": {
      "type": "Table",
      "place": "Hallway",
      "other": [
        "Wood",
        "Rustic",
        "Reclaimed",
        "Narrow"
      ]
    }
  },
  {
    "id": "prod009",
    "title": "Convertible Sleeper Sofa",
    "description": "A versatile sectional sofa that easily pulls out into a comfortable queen-size bed. Includes hidden storage chaise.",
    "price": 1650.00,
    "oldPrice": 1999.00,
    "stock": 8,
    "reviews": 4.7,
    "color": {
      "name": "Dark Charcoal",
      "referenceColor": "#36454F",
      "availableColors": [
        {
          "name": "Dark Charcoal",
          "referenceColor": "#36454F"
        },
        {
          "name": "Stone Beige",
          "referenceColor": "#E6E6CC"
        }
      ]
    },
    "materials": [
      "Polyester Fabric",
      "Hardwood Frame",
      "Steel Mechanism"
    ],
    "details": [
      "Pulls out to Queen bed",
      "Left-side storage chaise",
      "Three reversible pillows",
      "Assembly required",
      "Materials: Polyester Fabric, Hardwood Frame, Steel Mechanism",
      "Dimensions: 250 cm (W) x 160 cm (D) x 90 cm (H)"
    ],
    "dimensions": {
      "widthCm": 250,
      "heightCm": 90,
      "depthCm": 160
    },
    "photos": {
      "Dark Charcoal": {
        "main": "Convertible_Sleeper_Sofa_1.jpg",
        "other": [
          "Convertible_Sleeper_Sofa_3.jpg",
          "Convertible_Sleeper_Sofa_5.jpg"
        ]
      },
      "Stone Beige": {
        "main": "Convertible_Sleeper_Sofa_2.jpg",
        "other": [
          "Convertible_Sleeper_Sofa_4.jpg",
          "Convertible_Sleeper_Sofa_6.jpg"
        ]
      }
    },
    "tags": {
      "type": "Sofa",
      "place": "Living Room",
      "other": [
        "Convertible",
        "Fabric",
        "Sectional",
        "Storage"
      ]
    }
  },
  {
    "id": "prod010",
    "title": "Modern Gold Floor Lamp",
    "description": "A contemporary arc floor lamp with a gold brass finish and a white linen drum shade. Ideal for reading next to a sofa.",
    "price": 159.00,
    "oldPrice": null,
    "stock": 60,
    "reviews": 4.6,
    "color": {
      "name": "Brushed Gold",
      "referenceColor": "#CFB53B",
      "availableColors": [
        {
          "name": "Brushed Gold",
          "referenceColor": "#CFB53B"
        },
        {
          "name": "Matte Black",
          "referenceColor": "#000000"
        }
      ]
    },
    "materials": [
      "Steel",
      "Brass Finish",
      "Linen"
    ],
    "details": [
      "Weighted marble base",
      "Adjustable height arc",
      "Foot-pedal switch",
      "Max 100W bulb",
      "Materials: Steel, Brass Finish, Linen",
      "Dimensions: 120 cm (D) x 170 cm (H) (Arc Span)"
    ],
    "dimensions": {
      "widthCm": 40,
      "heightCm": 170,
      "depthCm": 120
    },
    "photos": {
      "Brushed Gold": {
        "main": "Modern_Gold_Floor_Lamp_1.jpg",
        "other": [
          "Modern_Gold_Floor_Lamp_3.jpg",
          "Modern_Gold_Floor_Lamp_5.jpg"
        ]
      },
      "Matte Black": {
        "main": "Modern_Gold_Floor_Lamp_2.jpg",
        "other": [
          "Modern_Gold_Floor_Lamp_4.jpg",
          "Modern_Gold_Floor_Lamp_6.jpg"
        ]
      }
    },
    "tags": {
      "type": "Lighting",
      "place": "Living Room",
      "other": [
        "Metal",
        "Arc",
        "Luxury",
        "Accessory"
      ]
    }
  },
  {
    "id": "prod011",
    "title": "Round Velvet Storage Ottoman",
    "description": "A compact round ottoman upholstered in performance velvet. The lid lifts off to reveal ample storage space.",
    "price": 125.00,
    "oldPrice": 150.00,
    "stock": 90,
    "reviews": 4.5,
    "color": {
      "name": "Navy Blue",
      "referenceColor": "#000080",
      "availableColors": [
        {
          "name": "Navy Blue",
          "referenceColor": "#000080"
        },
        {
          "name": "Forest Green",
          "referenceColor": "#228B22"
        },
        {
          "name": "Dusty Rose",
          "referenceColor": "#C291A7"
        }
      ]
    },
    "materials": [
      "Performance Velvet",
      "Plywood Frame"
    ],
    "details": [
      "Hidden storage compartment",
      "High-density foam",
      "Fully assembled",
      "Dual-use as seat or footrest",
      "Materials: Performance Velvet, Plywood Frame",
      "Dimensions: 45 cm (W) x 45 cm (D) x 45 cm (H)"
    ],
    "dimensions": {
      "widthCm": 45,
      "heightCm": 45,
      "depthCm": 45
    },
    "photos": {
      "Navy Blue": {
        "main": "Round_Velvet_Storage_Ottoman_1.jpg",
        "other": [
          "Round_Velvet_Storage_Ottoman_4.jpg",
          "Round_Velvet_Storage_Ottoman_7.jpg"
        ]
      },
      "Forest Green": {
        "main": "Round_Velvet_Storage_Ottoman_2.jpg",
        "other": [
          "Round_Velvet_Storage_Ottoman_5.jpg",
          "Round_Velvet_Storage_Ottoman_8.jpg"
        ]
      },
      "Dusty Rose": {
        "main": "Round_Velvet_Storage_Ottoman_3.jpg",
        "other": [
          "Round_Velvet_Storage_Ottoman_6.jpg",
          "Round_Velvet_Storage_Ottoman_9.jpg"
        ]
      }
    },
    "tags": {
      "type": "Storage",
      "place": "Bedroom",
      "other": [
        "Fabric",
        "Round",
        "Velvet",
        "Small"
      ]
    }
  },
  {
    "id": "prod012",
    "title": "Tufted Queen Platform Bed",
    "description": "A sturdy platform bed with a tall, diamond-tufted linen headboard. No box spring required.",
    "price": 680.00,
    "oldPrice": 750.00,
    "stock": 22,
    "reviews": 4.8,
    "color": {
      "name": "Light Beige",
      "referenceColor": "#F5F5DC",
      "availableColors": [
        {
          "name": "Light Beige",
          "referenceColor": "#F5F5DC"
        },
        {
          "name": "Slate Gray",
          "referenceColor": "#708090"
        },
        {
          "name": "Charcoal",
          "referenceColor": "#36454F"
        }
      ]
    },
    "materials": [
      "Linen Fabric",
      "Solid Wood Slats"
    ],
    "details": [
      "Queen size",
      "Tufted headboard",
      "Requires assembly",
      "Slat system included",
      "Materials: Linen Fabric, Solid Wood Slats",
      "Dimensions: 160 cm (W) x 215 cm (D) x 120 cm (H)"
    ],
    "dimensions": {
      "widthCm": 160,
      "heightCm": 120,
      "depthCm": 215
    },
    "photos": {
      "Light Beige": {
        "main": "https://[your-image-hosting]/tufted_queen_bed_main.jpg",
        "other": [
          "https://[your-image-hosting]/tufted_queen_bed_headboard_closeup.jpg",
          "https://[your-image-hosting]/tufted_queen_bed_lifestyle.jpg"
        ]
      },
      "Slate Gray": {
        "main": "https://[your-image-hosting]/tufted_queen_bed_slate_gray_main.jpg",
        "other": [
          "https://[your-image-hosting]/tufted_queen_bed_slate_gray_closeup.jpg",
          "https://[your-image-hosting]/tufted_queen_bed_slate_gray_room.jpg"
        ]
      },
      "Charcoal": {
        "main": "https://[your-image-hosting]/tufted_queen_bed_charcoal_main.jpg",
        "other": [
          "https://[your-image-hosting]/tufted_queen_bed_charcoal_closeup.jpg",
          "https://[your-image-hosting]/tufted_queen_bed_charcoal_room.jpg"
        ]
      }
    },
    "tags": {
      "type": "Bed",
      "place": "Bedroom",
      "other": [
        "Fabric",
        "Tufted",
        "Platform",
        "Queen"
      ]
    }
  },
  {
    "id": "prod013",
    "title": "Ergonomic Mesh Office Chair",
    "description": "High-back office chair with lumbar support, adjustable armrests, and breathable mesh for all-day comfort.",
    "price": 220.00,
    "oldPrice": 270.00,
    "stock": 150,
    "reviews": 4.7,
    "color": {
      "name": "Black Mesh",
      "referenceColor": "#000000",
      "availableColors": [
        {
          "name": "Black Mesh",
          "referenceColor": "#000000"
        },
        {
          "name": "Gray Mesh",
          "referenceColor": "#808080"
        }
      ]
    },
    "materials": [
      "Nylon Mesh",
      "Aluminum Base",
      "High-Density Foam"
    ],
    "details": [
      "Adjustable lumbar support",
      "3D armrests",
      "Tilt lock function",
      "Smooth-rolling casters",
      "Materials: Nylon Mesh, Aluminum Base, High-Density Foam",
      "Dimensions: 65 cm (W) x 60 cm (D) x 110 cm (H)"
    ],
    "dimensions": {
      "widthCm": 65,
      "heightCm": 110,
      "depthCm": 60
    },
    "photos": {
      "Black Mesh": {
        "main": "https://[your-image-hosting]/ergonomic_office_chair_main.jpg",
        "other": [
          "https://[your-image-hosting]/ergonomic_office_chair_back_view.jpg",
          "https://[your-image-hosting]/ergonomic_office_chair_detail.jpg"
        ]
      },
      "Gray Mesh": {
        "main": "https://[your-image-hosting]/ergonomic_office_chair_gray_mesh_main.jpg",
        "other": [
          "https://[your-image-hosting]/ergonomic_office_chair_gray_mesh_back.jpg",
          "https://[your-image-hosting]/ergonomic_office_chair_gray_mesh_adjust.jpg"
        ]
      }
    },
    "tags": {
      "type": "Chair",
      "place": "Office",
      "other": [
        "Ergonomic",
        "Adjustable",
        "Mesh",
        "Comfort"
      ]
    }
  },
  {
    "id": "prod014",
    "title": "Two-Tone Kitchen Island",
    "description": "A large, two-tone kitchen island with a butcher block top, two drawers, and open shelving. Ideal for food prep and extra storage.",
    "price": 899.00,
    "oldPrice": null,
    "stock": 12,
    "reviews": 4.9,
    "color": {
      "name": "White/Oak Top",
      "referenceColor": "#F5F5F5",
      "availableColors": [
        {
          "name": "White/Oak Top",
          "referenceColor": "#F5F5F5"
        },
        {
          "name": "Gray/Maple Top",
          "referenceColor": "#C0C0C0"
        }
      ]
    },
    "materials": [
      "Solid Wood",
      "Butcher Block (Maple)"
    ],
    "details": [
      "Towel bar mount",
      "Two utility drawers",
      "Fixed shelving",
      "Requires assembly",
      "Materials: Solid Wood, Butcher Block (Maple)",
      "Dimensions: 130 cm (W) x 70 cm (D) x 90 cm (H)"
    ],
    "dimensions": {
      "widthCm": 130,
      "heightCm": 90,
      "depthCm": 70
    },
    "photos": {
      "White/Oak Top": {
        "main": "https://[your-image-hosting]/two_tone_kitchen_island_main.jpg",
        "other": [
          "https://[your-image-hosting]/two_tone_kitchen_island_top_detail.jpg",
          "https://[your-image-hosting]/two_tone_kitchen_island_storage_view.jpg"
        ]
      },
      "Gray/Maple Top": {
        "main": "https://[your-image-hosting]/two_tone_kitchen_island_gray_maple_top_main.jpg",
        "other": [
          "https://[your-image-hosting]/two_tone_kitchen_island_gray_maple_top_detail.jpg",
          "https://[your-image-hosting]/two_tone_kitchen_island_gray_maple_top_storage.jpg"
        ]
      }
    },
    "tags": {
      "type": "Storage",
      "place": "Kitchen",
      "other": [
        "Wood",
        "Island",
        "Butcher Block",
        "Prep"
      ]
    }
  },
  {
    "id": "prod015",
    "title": "Geometric Wool Area Rug (5' x 8')",
    "description": "Hand-tufted wool rug featuring a modern, geometric pattern in neutral cream and gray tones. Durable and soft underfoot.",
    "price": 299.00,
    "oldPrice": 350.00,
    "stock": 70,
    "reviews": 4.6,
    "color": {
      "name": "Cream/Gray",
      "referenceColor": "#E5E4E2",
      "availableColors": [
        {
          "name": "Cream/Gray",
          "referenceColor": "#E5E4E2"
        },
        {
          "name": "Navy/White",
          "referenceColor": "#000080"
        }
      ]
    },
    "materials": [
      "100% New Zealand Wool"
    ],
    "details": [
      "Hand-tufted construction",
      "Low-pile height",
      "Requires rug pad",
      "Made in India",
      "Materials: 100% New Zealand Wool",
      "Dimensions: 152 cm (W) x 244 cm (D) x 0.8 cm (H)"
    ],
    "dimensions": {
      "widthCm": 152,
      "heightCm": 0.8,
      "depthCm": 244
    },
    "photos": {
      "Cream/Gray": {
        "main": "https://[your-image-hosting]/geometric_wool_rug_main.jpg",
        "other": [
          "https://[your-image-hosting]/geometric_wool_rug_texture_closeup.jpg",
          "https://[your-image-hosting]/geometric_wool_rug_room_view.jpg"
        ]
      },
      "Navy/White": {
        "main": "https://[your-image-hosting]/geometric_wool_rug_navy_white_main.jpg",
        "other": [
          "https://[your-image-hosting]/geometric_wool_rug_navy_white_texture.jpg",
          "https://[your-image-hosting]/geometric_wool_rug_navy_white_room.jpg"
        ]
      }
    },
    "tags": {
      "type": "Accessory",
      "place": "Living Room",
      "other": [
        "Wool",
        "Rug",
        "Patterned",
        "Soft"
      ]
    }
  },
  {
    "id": "prod016",
    "title": "Woven Rattan Outdoor Lounge Chair",
    "description": "A weather-resistant lounge chair crafted from durable woven rattan. Includes thick, water-repellent cushions.",
    "price": 410.00,
    "oldPrice": null,
    "stock": 45,
    "reviews": 4.5,
    "color": {
      "name": "Natural Rattan",
      "referenceColor": "#D2B48C",
      "availableColors": [
        {
          "name": "Natural Rattan",
          "referenceColor": "#D2B48C"
        },
        {
          "name": "Dark Espresso",
          "referenceColor": "#382D2C"
        }
      ]
    },
    "materials": [
      "Synthetic Rattan",
      "Aluminum Frame",
      "Olefin Fabric"
    ],
    "details": [
      "UV-resistant material",
      "Cushions included",
      "Lightweight frame",
      "No assembly required",
      "Materials: Synthetic Rattan, Aluminum Frame, Olefin Fabric",
      "Dimensions: 75 cm (W) x 85 cm (D) x 70 cm (H)"
    ],
    "dimensions": {
      "widthCm": 75,
      "heightCm": 70,
      "depthCm": 85
    },
    "photos": {
      "Natural Rattan": {
        "main": "https://[your-image-hosting]/rattan_lounge_chair_main.jpg",
        "other": [
          "https://[your-image-hosting]/rattan_lounge_chair_cushion_detail.jpg",
          "https://[your-image-hosting]/rattan_lounge_chair_patio_view.jpg"
        ]
      },
      "Dark Espresso": {
        "main": "https://[your-image-hosting]/rattan_lounge_chair_dark_espresso_main.jpg",
        "other": [
          "https://[your-image-hosting]/rattan_lounge_chair_dark_espresso_cushion.jpg",
          "https://[your-image-hosting]/rattan_lounge_chair_dark_espresso_patio.jpg"
        ]
      }
    },
    "tags": {
      "type": "Chair",
      "place": "Outdoor",
      "other": [
        "Woven",
        "Weather-resistant",
        "Comfort",
        "Rattan"
      ]
    }
  },
  {
    "id": "prod017",
    "title": "Glass Top Side Table",
    "description": "A small, elegant side table with a tempered glass top and polished chrome legs. Perfect next to a sofa or bed.",
    "price": 99.99,
    "oldPrice": 120.00,
    "stock": 110,
    "reviews": 4.6,
    "color": {
      "name": "Chrome/Clear",
      "referenceColor": "#CCCCCC",
      "availableColors": [
        {
          "name": "Chrome/Clear",
          "referenceColor": "#CCCCCC"
        },
        {
          "name": "Matte Black/Smoked",
          "referenceColor": "#444444"
        }
      ]
    },
    "materials": [
      "Tempered Glass",
      "Polished Chrome"
    ],
    "details": [
      "Safety-tempered glass",
      "Minimalist design",
      "Easy to clean",
      "Small footprint",
      "Materials: Tempered Glass, Polished Chrome",
      "Dimensions: 50 cm (W) x 50 cm (D) x 55 cm (H)"
    ],
    "dimensions": {
      "widthCm": 50,
      "heightCm": 55,
      "depthCm": 50
    },
    "photos": {
      "Chrome/Clear": {
        "main": "https://[your-image-hosting]/glass_side_table_main.jpg",
        "other": [
          "https://[your-image-hosting]/glass_side_table_chrome_base.jpg",
          "https://[your-image-hosting]/glass_side_table_detail.jpg"
        ]
      },
      "Matte Black/Smoked": {
        "main": "https://[your-image-hosting]/glass_side_table_matte_black_smoked_main.jpg",
        "other": [
          "https://[your-image-hosting]/glass_side_table_matte_black_base.jpg",
          "https://[your-image-hosting]/glass_side_table_matte_black_detail.jpg"
        ]
      }
    },
    "tags": {
      "type": "Table",
      "place": "Living Room",
      "other": [
        "Glass",
        "Metal",
        "Small",
        "Modern"
      ]
    }
  },
  {
    "id": "prod018",
    "title": "Rustic Industrial TV Stand",
    "description": "Wide TV stand capable of holding up to a 70-inch screen. Features open shelves and two sliding barn doors for storage.",
    "price": 380.00,
    "oldPrice": 420.00,
    "stock": 28,
    "reviews": 4.4,
    "color": {
      "name": "Rustic Oak",
      "referenceColor": "#8B572A",
      "availableColors": [
        {
          "name": "Rustic Oak",
          "referenceColor": "#8B572A"
        },
        {
          "name": "Aged Pine",
          "referenceColor": "#A0522D"
        }
      ]
    },
    "materials": [
      "Engineered Wood",
      "Steel Hardware"
    ],
    "details": [
      "Fits 70-inch TV",
      "Cable management cutouts",
      "Sliding barn doors",
      "Adjustable inner shelves",
      "Materials: Engineered Wood, Steel Hardware",
      "Dimensions: 160 cm (W) x 40 cm (D) x 60 cm (H)"
    ],
    "dimensions": {
      "widthCm": 160,
      "heightCm": 60,
      "depthCm": 40
    },
    "photos": {
      "Rustic Oak": {
        "main": "https://[your-image-hosting]/industrial_tv_stand_main.jpg",
        "other": [
          "https://[your-image-hosting]/industrial_tv_stand_door_open.jpg",
          "https://[your-image-hosting]/industrial_tv_stand_storage_view.jpg"
        ]
      },
      "Aged Pine": {
        "main": "https://[your-image-hosting]/industrial_tv_stand_aged_pine_main.jpg",
        "other": [
          "https://[your-image-hosting]/industrial_tv_stand_aged_pine_door_open.jpg",
          "https://[your-image-hosting]/industrial_tv_stand_aged_pine_storage_view.jpg"
        ]
      }
    },
    "tags": {
      "type": "Storage",
      "place": "Living Room",
      "other": [
        "Wood",
        "Industrial",
        "Media",
        "Sliding Door"
      ]
    }
  },
  {
    "id": "prod019",
    "title": "Compact Student Desk",
    "description": "A simple, space-saving desk with one drawer, perfect for student dorms or small home offices.",
    "price": 149.00,
    "oldPrice": null,
    "stock": 200,
    "reviews": 4.3,
    "color": {
      "name": "White",
      "referenceColor": "#FFFFFF",
      "availableColors": [
        {
          "name": "White",
          "referenceColor": "#FFFFFF"
        },
        {
          "name": "Black",
          "referenceColor": "#000000"
        },
        {
          "name": "Light Oak",
          "referenceColor": "#E6D7B9"
        }
      ]
    },
    "materials": [
      "Laminate Finish",
      "MDF"
    ],
    "details": [
      "One utility drawer",
      "Minimalist design",
      "Compact size",
      "Easy assembly",
      "Materials: Laminate Finish, MDF",
      "Dimensions: 100 cm (W) x 50 cm (D) x 75 cm (H)"
    ],
    "dimensions": {
      "widthCm": 100,
      "heightCm": 75,
      "depthCm": 50
    },
    "photos": {
      "White": {
        "main": "https://[your-image-hosting]/compact_student_desk_main.jpg",
        "other": [
          "https://[your-image-hosting]/compact_student_desk_drawer_open.jpg",
          "https://[your-image-hosting]/compact_student_desk_detail.jpg"
        ]
      },
      "Black": {
        "main": "https://[your-image-hosting]/compact_student_desk_black_main.jpg",
        "other": [
          "https://[your-image-hosting]/compact_student_desk_black_drawer_open.jpg",
          "https://[your-image-hosting]/compact_student_desk_black_detail.jpg"
        ]
      },
      "Light Oak": {
        "main": "https://[your-image-hosting]/compact_student_desk_light_oak_main.jpg",
        "other": [
          "https://[your-image-hosting]/compact_student_desk_light_oak_drawer_open.jpg",
          "https://[your-image-hosting]/compact_student_desk_light_oak_detail.jpg"
        ]
      }
    },
    "tags": {
      "type": "Table",
      "place": "Office",
      "other": [
        "Small",
        "Minimalist",
        "Student",
        "Storage"
      ]
    }
  },
  {
    "id": "prod020",
    "title": "Patio Dining Set (4-Seater)",
    "description": "Four-person outdoor dining set with a glass-top table and four stackable mesh chairs. Weather-resistant and durable.",
    "price": 499.00,
    "oldPrice": 550.00,
    "stock": 40,
    "reviews": 4.5,
    "color": {
      "name": "Dark Bronze",
      "referenceColor": "#79553D",
      "availableColors": [
        {
          "name": "Dark Bronze",
          "referenceColor": "#79553D"
        },
        {
          "name": "White",
          "referenceColor": "#FFFFFF"
        }
      ]
    },
    "materials": [
      "Aluminum Frame",
      "Tempered Glass",
      "Textilene Mesh"
    ],
    "details": [
      "Set includes 1 table, 4 chairs",
      "Chairs are stackable",
      "Umbrella hole included",
      "Rust-proof frame",
      "Materials: Aluminum Frame, Tempered Glass, Textilene Mesh",
      "Dimensions: 90 cm (W) x 90 cm (D) x 75 cm (H) (Table)"
    ],
    "dimensions": {
      "widthCm": 90,
      "heightCm": 75,
      "depthCm": 90
    },
    "photos": {
      "Dark Bronze": {
        "main": "https://[your-image-hosting]/patio_dining_set_main.jpg",
        "other": [
          "https://[your-image-hosting]/patio_dining_set_chair_stack.jpg",
          "https://[your-image-hosting]/patio_dining_set_outdoor_view.jpg"
        ]
      },
      "White": {
        "main": "https://[your-image-hosting]/patio_dining_set_white_main.jpg",
        "other": [
          "https://[your-image-hosting]/patio_dining_set_white_chair_stack.jpg",
          "https://[your-image-hosting]/patio_dining_set_white_outdoor_view.jpg"
        ]
      }
    },
    "tags": {
      "type": "Table",
      "place": "Outdoor",
      "other": [
        "Metal",
        "Glass",
        "Set",
        "Weather-resistant"
      ]
    }
  },
  {
    "id": "prod021",
    "title": "Upholstered Headboard (King)",
    "description": "Free-standing, button-tufted headboard with soft velvet upholstery. Attaches to any standard King frame.",
    "price": 280.00,
    "oldPrice": 310.00,
    "stock": 30,
    "reviews": 4.8,
    "color": {
      "name": "Silver Gray",
      "referenceColor": "#C0C0C0",
      "availableColors": [
        {
          "name": "Silver Gray",
          "referenceColor": "#C0C0C0"
        },
        {
          "name": "Cream",
          "referenceColor": "#FFFDD0"
        },
        {
          "name": "Charcoal",
          "referenceColor": "#36454F"
        }
      ]
    },
    "materials": [
      "Velvet Fabric",
      "Wood"
    ],
    "details": [
      "King size",
      "Deep button tufting",
      "Adjustable height",
      "Hardware included",
      "Materials: Velvet Fabric, Wood",
      "Dimensions: 195 cm (W) x 10 cm (D) x 140 cm (H)"
    ],
    "dimensions": {
      "widthCm": 195,
      "heightCm": 140,
      "depthCm": 10
    },
    "photos": {
      "Silver Gray": {
        "main": "https://[your-image-hosting]/upholstered_headboard_king_main.jpg",
        "other": [
          "https://[your-image-hosting]/upholstered_headboard_closeup.jpg",
          "https://[your-image-hosting]/upholstered_headboard_in_room.jpg"
        ]
      },
      "Cream": {
        "main": "https://[your-image-hosting]/upholstered_headboard_king_cream_main.jpg",
        "other": [
          "https://[your-image-hosting]/upholstered_headboard_cream_closeup.jpg",
          "https://[your-image-hosting]/upholstered_headboard_cream_lifestyle.jpg"
        ]
      },
      "Charcoal": {
        "main": "https://[your-image-hosting]/upholstered_headboard_king_charcoal_main.jpg",
        "other": [
          "https://[your-image-hosting]/upholstered_headboard_charcoal_closeup.jpg",
          "https://[your-image-hosting]/upholstered_headboard_charcoal_lifestyle.jpg"
        ]
      }
    },
    "tags": {
      "type": "Bed",
      "place": "Bedroom",
      "other": [
        "Fabric",
        "Tufted",
        "Headboard",
        "Velvet"
      ]
    }
  },
  {
    "id": "prod022",
    "title": "Small Cube Storage Unit",
    "description": "Four-cube shelving unit, perfect for vinyl records, books, or organizational bins. Can be used vertically or horizontally.",
    "price": 59.99,
    "oldPrice": 75.00,
    "stock": 180,
    "reviews": 4.3,
    "color": {
      "name": "Black",
      "referenceColor": "#000000",
      "availableColors": [
        {
          "name": "Black",
          "referenceColor": "#000000"
        },
        {
          "name": "White",
          "referenceColor": "#FFFFFF"
        },
        {
          "name": "Oak Look",
          "referenceColor": "#E6D7B9"
        }
      ]
    },
    "materials": [
      "Laminated Particle Board"
    ],
    "details": [
      "4 storage cubes",
      "Modular design",
      "Includes wall-mounting hardware",
      "Fits standard storage bins",
      "Materials: Laminated Particle Board",
      "Dimensions: 77 cm (W) x 39 cm (D) x 77 cm (H)"
    ],
    "dimensions": {
      "widthCm": 77,
      "heightCm": 77,
      "depthCm": 39
    },
    "photos": {
      "Black": {
        "main": "https://[your-image-hosting]/cube_storage_unit_main.jpg",
        "other": [
          "https://[your-image-hosting]/cube_storage_unit_with_bins.jpg",
          "https://[your-image-hosting]/cube_storage_unit_detail.jpg"
        ]
      },
      "White": {
        "main": "https://[your-image-hosting]/cube_storage_unit_white_main.jpg",
        "other": [
          "https://[your-image-hosting]/cube_storage_unit_white_with_bins.jpg",
          "https://[your-image-hosting]/cube_storage_unit_white_detail.jpg"
        ]
      },
      "Oak Look": {
        "main": "https://[your-image-hosting]/cube_storage_unit_oak_look_main.jpg",
        "other": [
          "https://[your-image-hosting]/cube_storage_unit_oak_look_with_bins.jpg",
          "https://[your-image-hosting]/cube_storage_unit_oak_look_detail.jpg"
        ]
      }
    },
    "tags": {
      "type": "Storage",
      "place": "Living Room",
      "other": [
        "Modular",
        "Cube",
        "Small",
        "Bookcase"
      ]
    }
  },
  {
    "id": "prod023",
    "title": "Swivel Leather Office Chair",
    "description": "Executive high-back office chair in bonded leather with padded armrests and pneumatic seat adjustment.",
    "price": 190.00,
    "oldPrice": 230.00,
    "stock": 65,
    "reviews": 4.6,
    "color": {
      "name": "Brown Leather",
      "referenceColor": "#8B4513",
      "availableColors": [
        {
          "name": "Brown Leather",
          "referenceColor": "#8B4513"
        },
        {
          "name": "Black Leather",
          "referenceColor": "#000000"
        }
      ]
    },
    "materials": [
      "Bonded Leather",
      "Steel Base"
    ],
    "details": [
      "Adjustable tilt tension",
      "360-degree swivel",
      "Pneumatic seat lift",
      "Heavy-duty casters",
      "Materials: Bonded Leather, Steel Base",
      "Dimensions: 70 cm (W) x 75 cm (D) x 120 cm (H)"
    ],
    "dimensions": {
      "widthCm": 70,
      "heightCm": 120,
      "depthCm": 75
    },
    "photos": {
      "Brown Leather": {
        "main": "https://[your-image-hosting]/swivel_leather_chair_main.jpg",
        "other": [
          "https://[your-image-hosting]/swivel_leather_chair_side.jpg",
          "https://[your-image-hosting]/swivel_leather_chair_detail.jpg"
        ]
      },
      "Black Leather": {
        "main": "https://[your-image-hosting]/swivel_leather_chair_black_leather_main.jpg",
        "other": [
          "https://[your-image-hosting]/swivel_leather_chair_black_leather_side.jpg",
          "https://[your-image-hosting]/swivel_leather_chair_black_leather_detail.jpg"
        ]
      }
    },
    "tags": {
      "type": "Chair",
      "place": "Office",
      "other": [
        "Leather",
        "Executive",
        "Comfort",
        "Swivel"
      ]
    }
  },
  {
    "id": "prod024",
    "title": "Modern White Buffet Cabinet",
    "description": "Sleek, handle-less buffet cabinet with high-gloss white lacquer finish. Features three drawers and two large cabinets.",
    "price": 650.00,
    "oldPrice": 750.00,
    "stock": 18,
    "reviews": 4.7,
    "color": {
      "name": "High-Gloss White",
      "referenceColor": "#FFFFFF",
      "availableColors": [
        {
          "name": "High-Gloss White",
          "referenceColor": "#FFFFFF"
        },
        {
          "name": "Matte Gray",
          "referenceColor": "#808080"
        }
      ]
    },
    "materials": [
      "MDF",
      "High-Gloss Lacquer"
    ],
    "details": [
      "Push-to-open doors",
      "Soft-close drawers",
      "Adjustable interior shelving",
      "No handles",
      "Materials: MDF, High-Gloss Lacquer",
      "Dimensions: 150 cm (W) x 40 cm (D) x 80 cm (H)"
    ],
    "dimensions": {
      "widthCm": 150,
      "heightCm": 80,
      "depthCm": 40
    },
    "photos": {
      "High-Gloss White": {
        "main": "https://[your-image-hosting]/white_buffet_cabinet_main.jpg",
        "other": [
          "https://[your-image-hosting]/white_buffet_cabinet_doors_open.jpg",
          "https://[your-image-hosting]/white_buffet_cabinet_kitchen_view.jpg"
        ]
      },
      "Matte Gray": {
        "main": "https://[your-image-hosting]/white_buffet_cabinet_matte_gray_main.jpg",
        "other": [
          "https://[your-image-hosting]/white_buffet_cabinet_matte_gray_doors_open.jpg",
          "https://[your-image-hosting]/white_buffet_cabinet_matte_gray_kitchen_view.jpg"
        ]
      }
    },
    "tags": {
      "type": "Storage",
      "place": "Living Room",
      "other": [
        "Modern",
        "Cabinet",
        "Glossy",
        "Storage"
      ]
    }
  }
]