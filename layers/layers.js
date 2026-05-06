var wms_layers = [];


        var lyr_Googlesatellite2_0 = new ol.layer.Tile({
            'title': 'Google satellite 2',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DescargaCanalSanCarlo_1 = new ol.format.GeoJSON();
var features_DescargaCanalSanCarlo_1 = format_DescargaCanalSanCarlo_1.readFeatures(json_DescargaCanalSanCarlo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DescargaCanalSanCarlo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DescargaCanalSanCarlo_1.addFeatures(features_DescargaCanalSanCarlo_1);
var lyr_DescargaCanalSanCarlo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DescargaCanalSanCarlo_1, 
                style: style_DescargaCanalSanCarlo_1,
                popuplayertitle: 'Descarga Canal San Carlo',
                interactive: true,
                title: '<img src="styles/legend/DescargaCanalSanCarlo_1.png" /> Descarga Canal San Carlo'
            });
var format_ColectoresProyectados_2 = new ol.format.GeoJSON();
var features_ColectoresProyectados_2 = format_ColectoresProyectados_2.readFeatures(json_ColectoresProyectados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColectoresProyectados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColectoresProyectados_2.addFeatures(features_ColectoresProyectados_2);
var lyr_ColectoresProyectados_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColectoresProyectados_2, 
                style: style_ColectoresProyectados_2,
                popuplayertitle: 'Colectores Proyectados',
                interactive: true,
                title: '<img src="styles/legend/ColectoresProyectados_2.png" /> Colectores Proyectados'
            });
var format_Excavacin_3 = new ol.format.GeoJSON();
var features_Excavacin_3 = format_Excavacin_3.readFeatures(json_Excavacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Excavacin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Excavacin_3.addFeatures(features_Excavacin_3);
var lyr_Excavacin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Excavacin_3, 
                style: style_Excavacin_3,
                popuplayertitle: 'Excavación',
                interactive: true,
                title: '<img src="styles/legend/Excavacin_3.png" /> Excavación'
            });
var group_Colectores = new ol.layer.Group({
                                layers: [lyr_DescargaCanalSanCarlo_1,lyr_ColectoresProyectados_2,],
                                fold: 'open',
                                title: 'Colectores'});
var group_RedHidro = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Red Hidro'});
var group_muestreocalidadagua = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'muestreo calidad agua'});
var group_Otros = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Otros'});
var group_Calicatas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Calicatas'});
var group_ObrasProyectadas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Obras Proyectadas'});
var group_Tramos = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Tramos'});
var group_Factibilidad2017 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Factibilidad 2017'});
var group_reasProtegidas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Áreas Protegidas'});
var group_CENSO2024 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CENSO 2024'});
var group_MedioFsico = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Medio Físico'});
var group_MedioSocialHumano = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Medio Social Humano'});
var group_PRC = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PRC'});
var group_Calles = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Calles'});
var group_JERARQUIACALLE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'JERARQUIA CALLE'});

lyr_Googlesatellite2_0.setVisible(true);lyr_DescargaCanalSanCarlo_1.setVisible(true);lyr_ColectoresProyectados_2.setVisible(true);lyr_Excavacin_3.setVisible(true);
var layersList = [lyr_Googlesatellite2_0,group_Colectores,lyr_Excavacin_3];
lyr_DescargaCanalSanCarlo_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_ColectoresProyectados_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Excavacin_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'Text': 'Text', });
lyr_DescargaCanalSanCarlo_1.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_ColectoresProyectados_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Excavacin_3.set('fieldImages', {'fid': '', 'Layer': '', 'Text': '', });
lyr_DescargaCanalSanCarlo_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_ColectoresProyectados_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Excavacin_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'Text': 'no label', });
lyr_Excavacin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});