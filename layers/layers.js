var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_geo_voies_2 = new ol.format.GeoJSON();
var features_geo_voies_2 = format_geo_voies_2.readFeatures(json_geo_voies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_voies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_voies_2.addFeatures(features_geo_voies_2);
var lyr_geo_voies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geo_voies_2, 
                style: style_geo_voies_2,
                popuplayertitle: 'geo_voies',
                interactive: true,
                title: '<img src="styles/legend/geo_voies_2.png" /> geo_voies'
            });
var format_Typetablissement_3 = new ol.format.GeoJSON();
var features_Typetablissement_3 = format_Typetablissement_3.readFeatures(json_Typetablissement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Typetablissement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Typetablissement_3.addFeatures(features_Typetablissement_3);
var lyr_Typetablissement_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Typetablissement_3, 
                style: style_Typetablissement_3,
                popuplayertitle: 'Type établissement',
                interactive: true,
    title: 'Type établissement<br />\
    <img src="styles/legend/Typetablissement_3_0.png" /> Primaires<br />\
    <img src="styles/legend/Typetablissement_3_1.png" /> Collèges<br />\
    <img src="styles/legend/Typetablissement_3_2.png" /> Lycées<br />\
    <img src="styles/legend/Typetablissement_3_3.png" /> Maternelle<br />\
    <img src="styles/legend/Typetablissement_3_4.png" /> Autres<br />' });
var format_Statuttablissement_4 = new ol.format.GeoJSON();
var features_Statuttablissement_4 = format_Statuttablissement_4.readFeatures(json_Statuttablissement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Statuttablissement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Statuttablissement_4.addFeatures(features_Statuttablissement_4);
var lyr_Statuttablissement_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Statuttablissement_4, 
                style: style_Statuttablissement_4,
                popuplayertitle: 'Statut établissement',
                interactive: true,
    title: 'Statut établissement<br />\
    <img src="styles/legend/Statuttablissement_4_0.png" /> Privé<br />\
    <img src="styles/legend/Statuttablissement_4_1.png" /> Public<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_geo_voies_2.setVisible(true);lyr_Typetablissement_3.setVisible(true);lyr_Statuttablissement_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleTerrain_1,lyr_geo_voies_2,lyr_Typetablissement_3,lyr_Statuttablissement_4];
lyr_geo_voies_2.set('fieldAliases', {'id_armen': 'id_armen', 'id_ligne': 'id_ligne', 'pkd': 'pkd', 'pkf': 'pkf', 'voie': 'voie', 'qualite': 'qualite', 'date_maj': 'date_maj', 'source': 'source', 'observations': 'observations', 'garde': 'garde', 'vs': 'vs', 'id_li': 'id_li', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'long': 'long', });
lyr_Typetablissement_3.set('fieldAliases', {'identifiant_de_l_etablissement': 'identifiant_de_l_etablissement', 'nom_etablissement': 'nom_etablissement', 'type_etablissement': 'type_etablissement', 'Type_etab': 'Type_etab', 'statut_public_prive': 'statut_public_prive', 'adresse_1': 'adresse_1', 'adresse_2': 'adresse_2', 'adresse_3': 'adresse_3', 'code_postal': 'code_postal', 'code_commune': 'code_commune', 'nom_commune': 'nom_commune', 'code_departement': 'code_departement', 'telephone': 'telephone', 'mail': 'mail', 'latitude': 'latitude', 'longitude': 'longitude', 'date_ouverture': 'date_ouverture', });
lyr_Statuttablissement_4.set('fieldAliases', {'identifiant_de_l_etablissement': 'identifiant_de_l_etablissement', 'nom_etablissement': 'nom_etablissement', 'type_etablissement': 'type_etablissement', 'statut_public_prive': 'statut_public_prive', 'adresse_1': 'adresse_1', 'adresse_2': 'adresse_2', 'adresse_3': 'adresse_3', 'code_postal': 'code_postal', 'code_commune': 'code_commune', 'nom_commune': 'nom_commune', 'code_departement': 'code_departement', 'code_academie': 'code_academie', 'code_region': 'code_region', 'ecole_maternelle': 'ecole_maternelle', 'ecole_elementaire': 'ecole_elementaire', 'voie_generale': 'voie_generale', 'voie_technologique': 'voie_technologique', 'voie_professionnelle': 'voie_professionnelle', 'telephone': 'telephone', 'fax': 'fax', 'web': 'web', 'mail': 'mail', 'restauration': 'restauration', 'hebergement': 'hebergement', 'ulis': 'ulis', 'apprentissage': 'apprentissage', 'segpa': 'segpa', 'section_arts': 'section_arts', 'section_cinema': 'section_cinema', 'section_theatre': 'section_theatre', 'section_sport': 'section_sport', 'section_internationale': 'section_internationale', 'section_europeenne': 'section_europeenne', 'lycee_agricole': 'lycee_agricole', 'lycee_militaire': 'lycee_militaire', 'lycee_des_metiers': 'lycee_des_metiers', 'post_bac': 'post_bac', 'appartenance_education_prioritaire': 'appartenance_education_prioritaire', 'greta': 'greta', 'siren_siret': 'siren_siret', 'fiche_onisep': 'fiche_onisep', 'type_contrat_prive': 'type_contrat_prive', 'libelle_departement': 'libelle_departement', 'libelle_academie': 'libelle_academie', 'libelle_region': 'libelle_region', 'coordx_origine': 'coordx_origine', 'coordy_origine': 'coordy_origine', 'epsg_origine': 'epsg_origine', 'nom_circonscription': 'nom_circonscription', 'latitude': 'latitude', 'longitude': 'longitude', 'precision_localisation': 'precision_localisation', 'date_ouverture': 'date_ouverture', 'date_maj_ligne': 'date_maj_ligne', 'etat': 'etat', 'ministere_tutelle': 'ministere_tutelle', 'multi_uai': 'multi_uai', 'rpi_concentre': 'rpi_concentre', 'rpi_disperse': 'rpi_disperse', 'code_nature': 'code_nature', 'libelle_nature': 'libelle_nature', 'code_type_contrat_prive': 'code_type_contrat_prive', 'pial': 'pial', 'etablissement_mere': 'etablissement_mere', 'type_rattachement_etablissement_mere': 'type_rattachement_etablissement_mere', 'code_circonscription': 'code_circonscription', 'code_zone_animation_pedagogique': 'code_zone_animation_pedagogique', 'libelle_zone_animation_pedagogique': 'libelle_zone_animation_pedagogique', 'code_bassin_formation': 'code_bassin_formation', 'libelle_bassin_formation': 'libelle_bassin_formation', 'id_armen': 'id_armen', 'id_ligne': 'id_ligne', 'pkd': 'pkd', 'pkf': 'pkf', 'voie': 'voie', 'qualite': 'qualite', 'date_maj': 'date_maj', 'source': 'source', 'observations': 'observations', 'garde': 'garde', 'vs': 'vs', 'id_li': 'id_li', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'long': 'long', });
lyr_geo_voies_2.set('fieldImages', {'id_armen': '', 'id_ligne': '', 'pkd': '', 'pkf': '', 'voie': '', 'qualite': '', 'date_maj': '', 'source': '', 'observations': '', 'garde': '', 'vs': '', 'id_li': '', 'osm_id': '', 'osm_type': '', 'long': '', });
lyr_Typetablissement_3.set('fieldImages', {'identifiant_de_l_etablissement': 'TextEdit', 'nom_etablissement': 'TextEdit', 'type_etablissement': 'TextEdit', 'Type_etab': 'TextEdit', 'statut_public_prive': 'TextEdit', 'adresse_1': 'TextEdit', 'adresse_2': 'TextEdit', 'adresse_3': 'TextEdit', 'code_postal': 'TextEdit', 'code_commune': 'TextEdit', 'nom_commune': 'TextEdit', 'code_departement': 'TextEdit', 'telephone': 'TextEdit', 'mail': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'date_ouverture': 'DateTime', });
lyr_Statuttablissement_4.set('fieldImages', {'identifiant_de_l_etablissement': 'TextEdit', 'nom_etablissement': 'TextEdit', 'type_etablissement': 'TextEdit', 'statut_public_prive': 'TextEdit', 'adresse_1': 'TextEdit', 'adresse_2': 'TextEdit', 'adresse_3': 'TextEdit', 'code_postal': 'TextEdit', 'code_commune': 'TextEdit', 'nom_commune': 'TextEdit', 'code_departement': 'TextEdit', 'code_academie': 'TextEdit', 'code_region': 'TextEdit', 'ecole_maternelle': 'Range', 'ecole_elementaire': 'Range', 'voie_generale': 'TextEdit', 'voie_technologique': 'TextEdit', 'voie_professionnelle': 'TextEdit', 'telephone': 'TextEdit', 'fax': 'TextEdit', 'web': 'TextEdit', 'mail': 'TextEdit', 'restauration': 'Range', 'hebergement': 'Range', 'ulis': 'Range', 'apprentissage': 'TextEdit', 'segpa': 'TextEdit', 'section_arts': 'TextEdit', 'section_cinema': 'TextEdit', 'section_theatre': 'TextEdit', 'section_sport': 'TextEdit', 'section_internationale': 'TextEdit', 'section_europeenne': 'TextEdit', 'lycee_agricole': 'TextEdit', 'lycee_militaire': 'TextEdit', 'lycee_des_metiers': 'TextEdit', 'post_bac': 'TextEdit', 'appartenance_education_prioritaire': 'TextEdit', 'greta': 'TextEdit', 'siren_siret': 'TextEdit', 'fiche_onisep': 'TextEdit', 'type_contrat_prive': 'TextEdit', 'libelle_departement': 'TextEdit', 'libelle_academie': 'TextEdit', 'libelle_region': 'TextEdit', 'coordx_origine': 'TextEdit', 'coordy_origine': 'TextEdit', 'epsg_origine': 'TextEdit', 'nom_circonscription': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision_localisation': 'TextEdit', 'date_ouverture': 'DateTime', 'date_maj_ligne': 'DateTime', 'etat': 'TextEdit', 'ministere_tutelle': 'TextEdit', 'multi_uai': 'Range', 'rpi_concentre': 'Range', 'rpi_disperse': 'TextEdit', 'code_nature': 'Range', 'libelle_nature': 'TextEdit', 'code_type_contrat_prive': 'TextEdit', 'pial': 'TextEdit', 'etablissement_mere': 'TextEdit', 'type_rattachement_etablissement_mere': 'TextEdit', 'code_circonscription': 'TextEdit', 'code_zone_animation_pedagogique': 'TextEdit', 'libelle_zone_animation_pedagogique': 'TextEdit', 'code_bassin_formation': 'TextEdit', 'libelle_bassin_formation': 'TextEdit', 'id_armen': 'Range', 'id_ligne': 'Range', 'pkd': 'Range', 'pkf': 'Range', 'voie': 'TextEdit', 'qualite': 'Range', 'date_maj': 'DateTime', 'source': 'TextEdit', 'observations': 'TextEdit', 'garde': 'Range', 'vs': 'Range', 'id_li': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'long': 'Range', });
lyr_geo_voies_2.set('fieldLabels', {'id_armen': 'no label', 'id_ligne': 'no label', 'pkd': 'no label', 'pkf': 'no label', 'voie': 'no label', 'qualite': 'no label', 'date_maj': 'no label', 'source': 'no label', 'observations': 'no label', 'garde': 'no label', 'vs': 'no label', 'id_li': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'long': 'no label', });
lyr_Typetablissement_3.set('fieldLabels', {'identifiant_de_l_etablissement': 'no label', 'nom_etablissement': 'no label', 'type_etablissement': 'no label', 'Type_etab': 'no label', 'statut_public_prive': 'no label', 'adresse_1': 'no label', 'adresse_2': 'no label', 'adresse_3': 'no label', 'code_postal': 'no label', 'code_commune': 'no label', 'nom_commune': 'no label', 'code_departement': 'no label', 'telephone': 'no label', 'mail': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'date_ouverture': 'no label', });
lyr_Statuttablissement_4.set('fieldLabels', {'identifiant_de_l_etablissement': 'no label', 'nom_etablissement': 'no label', 'type_etablissement': 'no label', 'statut_public_prive': 'no label', 'adresse_1': 'no label', 'adresse_2': 'no label', 'adresse_3': 'no label', 'code_postal': 'no label', 'code_commune': 'no label', 'nom_commune': 'no label', 'code_departement': 'no label', 'code_academie': 'no label', 'code_region': 'no label', 'ecole_maternelle': 'no label', 'ecole_elementaire': 'no label', 'voie_generale': 'no label', 'voie_technologique': 'no label', 'voie_professionnelle': 'no label', 'telephone': 'no label', 'fax': 'no label', 'web': 'no label', 'mail': 'no label', 'restauration': 'no label', 'hebergement': 'no label', 'ulis': 'no label', 'apprentissage': 'no label', 'segpa': 'no label', 'section_arts': 'no label', 'section_cinema': 'no label', 'section_theatre': 'no label', 'section_sport': 'no label', 'section_internationale': 'no label', 'section_europeenne': 'no label', 'lycee_agricole': 'no label', 'lycee_militaire': 'no label', 'lycee_des_metiers': 'no label', 'post_bac': 'no label', 'appartenance_education_prioritaire': 'no label', 'greta': 'no label', 'siren_siret': 'no label', 'fiche_onisep': 'no label', 'type_contrat_prive': 'no label', 'libelle_departement': 'no label', 'libelle_academie': 'no label', 'libelle_region': 'no label', 'coordx_origine': 'no label', 'coordy_origine': 'no label', 'epsg_origine': 'no label', 'nom_circonscription': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision_localisation': 'no label', 'date_ouverture': 'no label', 'date_maj_ligne': 'no label', 'etat': 'no label', 'ministere_tutelle': 'no label', 'multi_uai': 'no label', 'rpi_concentre': 'no label', 'rpi_disperse': 'no label', 'code_nature': 'no label', 'libelle_nature': 'no label', 'code_type_contrat_prive': 'no label', 'pial': 'no label', 'etablissement_mere': 'no label', 'type_rattachement_etablissement_mere': 'no label', 'code_circonscription': 'no label', 'code_zone_animation_pedagogique': 'no label', 'libelle_zone_animation_pedagogique': 'no label', 'code_bassin_formation': 'no label', 'libelle_bassin_formation': 'no label', 'id_armen': 'no label', 'id_ligne': 'no label', 'pkd': 'no label', 'pkf': 'no label', 'voie': 'no label', 'qualite': 'no label', 'date_maj': 'no label', 'source': 'no label', 'observations': 'no label', 'garde': 'no label', 'vs': 'no label', 'id_li': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'long': 'no label', });
lyr_Statuttablissement_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});