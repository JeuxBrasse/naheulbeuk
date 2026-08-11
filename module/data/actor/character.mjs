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
                destin: new SchemaField({
                    value: new NumberField({initial: 1})
                }),
                xp: new SchemaField({
                    value: new NumberField({initial: 0})
                }),
                sexe: new SchemaField({
                    value: new StringField({initial: ""})
                }),
                signe: new SchemaField({
                    value: new StringField({initial: ""})
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
                att_arme_jet: new SchemaField({
                    value: new StringField({initial: "0"}),
                    bonus: new StringField({initial: "0"}),
                    degat: new StringField({initial: "0"})
                }),
                bourse: new SchemaField({
                    value: new NumberField({initial: 0}),
                    max: new NumberField({initial: 0})
                }),
                sac: new SchemaField({
                    value: new NumberField({initial: 0}),
                    max: new NumberField({initial: 0})
                }),
                charge: new SchemaField({
                    value: new NumberField({initial: 0}),
                    max: new NumberField({initial: 0})
                }),
                magie: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                generaliste: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                combat: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                domestique: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                feu: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                metamorphose: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                thermodynamique: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                invocation: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                necromancie: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                illusion: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                eau: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                terre: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                air: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                tzinntch: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pr-niourgl": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pr-dlul": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pr-youclidh": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pr-slanoush": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pr-adathie": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pa-niourgl": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pa-dlul": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pa-braav": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pa-khornettoh": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                "pa-crom": new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                chamane: new SchemaField({
                    value: new BooleanField({initial: false})
                }),
                hidespeciaux: new BooleanField({initial: false}),
                hidelivres: new BooleanField({initial: false}),
                hidefioles: new BooleanField({initial: false}),
                hideingredients: new BooleanField({initial: false}),
                hidearmes: new BooleanField({initial: false}),
                hideprotections: new BooleanField({initial: false}),
                hidenourritures: new BooleanField({initial: false}),
                hiderichesses: new BooleanField({initial: false}),
                hideperso: new BooleanField({initial: false}),
                hidebourse: new BooleanField({initial: false}),
                hidenosac: new BooleanField({initial: false}),
                hidesac: new BooleanField({initial: false}),
                hidesachs: new BooleanField({initial: false}),
                hideautrehs: new BooleanField({initial: false}),
                hidearmehs: new BooleanField({initial: false}),
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
                    degat: new StringField({initial: "0"}),
                    bonus_ad: new NumberField({initial: 0})
                }),
                prd: new SchemaField({
                    value: new NumberField({initial: 10}),
                    bonus: new NumberField({initial: 0}),
                    bonus_man: new NumberField({initial: 0}),
                    bonus_ad: new NumberField({initial: 0})
                })
            }),
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
