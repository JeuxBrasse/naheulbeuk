export default class GemmeData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const {SchemaField, StringField, NumberField, BooleanField, HTMLField} = foundry.data.fields;
        let data = {
            description:new HTMLField({initial:""}),
            img: new StringField({initial: "icons/svg/chest.svg"}),
            quantity: new NumberField({initial: 1}),
            weight: new NumberField({initial: 0}),
            taille: new StringField({initial: "brute"}),
            prix: new NumberField({initial: 0}),
            ug: new StringField({initial: "1"}),
            note: new StringField({initial: ""}),
            note2: new StringField({initial: "<p>➢ &Eacute;valuation ou d&eacute;couverte d'une pierre brute : NAIN, MARCHAND<br />➢ &Eacute;valuation pr&eacute;cise de la raret&eacute; et du poids : NAIN, MARCHAND, VOLEUR (humain ou elfe)<br />➢ &Eacute;valuation approximative raret&eacute;/poids : VOLEUR, NOBLE, PIRATE, HAUT-ELFE, ELFE NOIR<br />➢ &Eacute;valuation li&eacute;e au poids, vague id&eacute;e pour la raret&eacute; : MAGE, PR&Ecirc;TRE, RANGER, ING&Eacute;NIEUR<br />➢ &Eacute;valuation tr&egrave;s laborieuse : BARBARE, GUERRIER, ELFE SYLVAIN, DEMI-ELFE, HOBBIT<br />➢ Aucune &eacute;valuation : ORQUE, DEMI-ORQUE, GOBELIN, GNOME, OGRE</p>\n<p><strong>Type de pierre/gemme - Valeur U.G. (brut) - Valeur U.G. (taill&eacute;e) - Notes</strong><br />Barbonate Chatoyante 70 P.O. 210 P.O. Jaune luminescent<br />Diamant bleu 60 P.O. 160 P.O. L&eacute;g&egrave;rement bleut&eacute;<br />Diamant blanc 50 P.O. 130 P.O. Rien &agrave; signaler<br />Klokolium 35 P.O. 150 P.O. Jaune opaque, iris&eacute;<br />Saphir 35 P.O. 100 P.O. Bleu assez profond<br />Rubis 30 P.O. 95 P.O. Rouge/rose<br />Zacorite 25 p.O. 90 P.O. Mauve translucide, iris&eacute;<br />&Eacute;meraude 25 P.O. 70 P.O. Vert profond<br />Ambre 22 P.O. 65 P.O. Orang&eacute;/jaune translucide<br />Opale noire 20 P.O. 60 P.O. Noire, iris&eacute;e<br />Spinelle 18 P.O. 60 P.O. Rouge<br />Jaspe 18 P.O. 55 P.O. Attention, couleurs vari&eacute;es<br />Grenat 18 P.O. 50 P.O. Rouge-brun<br />B&eacute;ryl rouge 15 P.O. 45 P.O. Rouge<br />Cornaline 8 P.O. 20 P.O. Rouge orang&eacute; sombre<br />Kunzite 8 P.O. 15 P.O. Gris l&eacute;g&egrave;rement teint&eacute;<br />Perle rose Sans objet 12 P.O. Ronde, rose p&acirc;le, iris&eacute;e<br />Perle blanche Sans objet 10 P.O. Ronde, blanche, iris&eacute;e<br />Serpentine 3 P.O. 5 P.O. G&eacute;n&eacute;ralement verte/turquoise<br />Sardonyx 2 P.O. 4 P.O. Couleurs vari&eacute;es ou noir</p>\n<p>&nbsp;</p>"}),
            equipe: new BooleanField({initial: false}),
            categorie: new StringField({initial: "Richesses"}),
            formula: new StringField({initial: "-"}),
            cacher: new BooleanField({initial: false}),
            desccacher: new StringField({initial: ""}),
            nomcacher: new StringField({initial: "Nom de l'objet caché"}),
            stockage: new StringField({initial: "sac"}),
            conteneur: new SchemaField({})

        }
		return data;
    }

	_initialize(options = {}) {
		super._initialize(options);
	}

    get item() {
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
