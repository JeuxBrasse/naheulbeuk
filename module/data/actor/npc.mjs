export default class CharacterData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const {SchemaField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;
        let data = {
            health:new SchemaField({
                value:new NumberField({initial: 10}),
                min:new NumberField({initial: 0}),
                max:new NumberField({initial: 10})
            }),
            pa:new SchemaField({
                value:new NumberField({initial: 5}),
                min:new NumberField({initial: 0}),
                max:new NumberField({initial: 5})
            }),
            biography:new HTMLField({initial: ""}),
            attributes: new SchemaField({
                level: new SchemaField({
                    value: new NumberField({initial: 1})
                }),
                bioCombat: new StringField({initial: ""}),
                moreStats: new BooleanField({initial: false}),
                categorie: new StringField({initial: ""}),
                categorie2: new StringField({initial: ""}),
                xp: new SchemaField({
                    value: new NumberField({initial: 0})
                }),
                pr: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0}),
                    trucdemauviette: new NumberField({initial: 0}),
                    nb_pr_ss_encombrement: new NumberField({initial: 0}),
                    max: new StringField({initial: "-"})
                }),
                prm: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                rm: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                esq: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                mvt: new SchemaField({
                    value: new NumberField({initial: 0})
                }),
                mphy: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                mpsy: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                init: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0}),
                    noises: new NumberField({initial: 0}),
                    total: new NumberField({initial: 0})
                }),
            }),
            abilities: new SchemaField({
                cou: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                int: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                cha: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    ignorempsy: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                ad: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_malus_AD: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                fo: new SchemaField({
                    value: new NumberField({initial: 0}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0})
                }),
                att: new SchemaField({
                    value: new NumberField({initial: 8}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0}),
                    degat: new NumberField({initial: 0}),
                    bonus_ad: new NumberField({initial: 0})
                }),
                prd: new SchemaField({
                    value: new NumberField({initial: 10}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0}),
                    bonus_ad: new NumberField({initial: 0})
                })
            })
        }

		return data;
    }

	_initialize(options = {}) {
		super._initialize(options);
	}

    get actor() {
        return this.parent;
    }

    prepareBaseData() {
    }

    prepareDerivedData() {
    }

    static migrateData(source) {
        return super.migrateData(source);
    }
}
