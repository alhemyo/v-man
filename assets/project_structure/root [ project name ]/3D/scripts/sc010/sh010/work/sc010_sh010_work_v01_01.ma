//Maya ASCII 2018 scene
//Name: sc010_sh010_work_v01_01.ma
//Last modified: Fri, May 11, 2018 04:46:08 PM
//Codeset: 1252
requires maya "2018";
requires -nodeType "RedshiftOptions" "redshift4maya" "2.5.50";
currentUnit -l centimeter -a degree -t film;
fileInfo "application" "maya";
fileInfo "product" "Maya 2018";
fileInfo "version" "2018";
fileInfo "cutIdentifier" "201708311015-002f4fe637";
fileInfo "osv" "Microsoft Windows 8 Business Edition, 64-bit  (Build 9200)\n";
fileInfo "vrayBuild" "3.60.01 fedb29f";
createNode transform -s -n "persp";
	rename -uid "C8879C74-48AA-AEE3-C767-3EA24FAACCC8";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 8.3633184093122193 7.1689699918986669 11.065944265089456 ;
	setAttr ".r" -type "double3" -18.938352729614227 36.199999999999733 0 ;
createNode camera -s -n "perspShape" -p "persp";
	rename -uid "1CE96285-4A2C-4ADA-0007-C18443C2ED80";
	setAttr -k off ".v" no;
	setAttr ".fl" 34.999999999999993;
	setAttr ".ncp" 1;
	setAttr ".fcp" 1000000;
	setAttr ".coi" 15.171836338130358;
	setAttr ".imn" -type "string" "persp";
	setAttr ".den" -type "string" "persp_depth";
	setAttr ".man" -type "string" "persp_mask";
	setAttr ".tp" -type "double3" -0.11220329860510558 2.2449408358241216 -0.51438761788189102 ;
	setAttr ".hc" -type "string" "viewSet -p %camera";
createNode transform -s -n "top";
	rename -uid "A76CA199-47F7-0EA9-B4AA-4B8A2C1F6080";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 0 1000.1 0 ;
	setAttr ".r" -type "double3" -89.999999999999986 0 0 ;
createNode camera -s -n "topShape" -p "top";
	rename -uid "7A5EA9CA-4980-A50E-3634-94A38A5DF5FA";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".ncp" 1;
	setAttr ".fcp" 1000000;
	setAttr ".coi" 1000.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "top";
	setAttr ".den" -type "string" "top_depth";
	setAttr ".man" -type "string" "top_mask";
	setAttr ".hc" -type "string" "viewSet -t %camera";
	setAttr ".o" yes;
createNode transform -s -n "front";
	rename -uid "860B6CC9-41AE-556D-0378-FB8028FB895E";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 0 0 1000.1 ;
createNode camera -s -n "frontShape" -p "front";
	rename -uid "75EDF82D-4EDF-732B-9926-439A190B2A4C";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".ncp" 1;
	setAttr ".fcp" 1000000;
	setAttr ".coi" 1000.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "front";
	setAttr ".den" -type "string" "front_depth";
	setAttr ".man" -type "string" "front_mask";
	setAttr ".hc" -type "string" "viewSet -f %camera";
	setAttr ".o" yes;
createNode transform -s -n "side";
	rename -uid "864A0FCD-48CC-7F70-0430-6CA2038C93A0";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 1000.1 0 0 ;
	setAttr ".r" -type "double3" 0 89.999999999999986 0 ;
createNode camera -s -n "sideShape" -p "side";
	rename -uid "1637B44F-4CB2-272D-78AD-DDBF07E29CAA";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".ncp" 1;
	setAttr ".fcp" 1000000;
	setAttr ".coi" 1000.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "side";
	setAttr ".den" -type "string" "side_depth";
	setAttr ".man" -type "string" "side_mask";
	setAttr ".hc" -type "string" "viewSet -s %camera";
	setAttr ".o" yes;
createNode transform -n "pCube1";
	rename -uid "1810F29F-4FF0-A508-64D6-5DBFDD6F01F6";
	setAttr ".s" -type "double3" 2.0353122788621625 1.0054293983551785 1 ;
createNode mesh -n "pCubeShape1" -p "pCube1";
	rename -uid "52A88628-4CDC-72B0-E3D3-1D9CF935BBA1";
	setAttr -k off ".v";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
createNode pointEmitter -n "emitter1" -p "pCube1";
	rename -uid "7E47D065-4EF0-87E0-E202-1E9FFABE58B8";
	setAttr ".emt" 2;
	setAttr -l on ".urpp";
createNode turbulenceField -n "turbulenceField1" -p "pCube1";
	rename -uid "A973DE17-4F3D-2EE1-0B45-6D9BBDEC41DF";
	setAttr ".att" 1;
	setAttr ".fc[0]"  0 1 1;
	setAttr ".amag[0]"  0 1 1;
	setAttr ".crad[0]"  0 1 1;
	setAttr ".frq" 1.1;
createNode transform -n "particle1";
	rename -uid "FF758827-4FC8-42BE-0254-A8BFCE3BD154";
createNode particle -n "particleShape1" -p "particle1";
	rename -uid "BC6EEEE2-4FF3-7E15-FD79-3E80A6E22DC7";
	addAttr -s false -ci true -sn "lifespanPP" -ln "lifespanPP" -dt "doubleArray";
	addAttr -ci true -h true -sn "lifespanPP0" -ln "lifespanPP0" -dt "doubleArray";
	addAttr -ci true -sn "lifespan" -ln "lifespan" -at "double";
	addAttr -s false -ci true -sn "radiusPP" -ln "radiusPP" -dt "doubleArray";
	addAttr -ci true -h true -sn "radiusPP0" -ln "radiusPP0" -dt "doubleArray";
	addAttr -s false -ci true -h true -sn "radiusPPCache" -ln "radiusPPCache" -dt "doubleArray";
	addAttr -ci true -sn "ageNormalized" -ln "ageNormalized" -dt "doubleArray";
	addAttr -ci true -sn "fireScale" -ln "fireScale" -dv 1 -min 0 -at "double";
	addAttr -ci true -sn "fireSpeed" -ln "fireSpeed" -dv 85 -min 0 -at "double";
	addAttr -ci true -sn "fireDirectionX" -ln "fireDirectionX" -min -100 -at "double";
	addAttr -ci true -sn "fireDirectionY" -ln "fireDirectionY" -dv 1 -min -100 -at "double";
	addAttr -ci true -sn "fireDirectionZ" -ln "fireDirectionZ" -min -100 -at "double";
	addAttr -ci true -sn "fireSpread" -ln "fireSpread" -min 0 -max 1 -at "double";
	addAttr -ci true -sn "fireTurbulence" -ln "fireTurbulence" -dv 240 -min 0 -at "double";
	addAttr -ci true -sn "fireDensity" -ln "fireDensity" -dv 25 -min 0 -at "double";
	addAttr -ci true -sn "flameStartRadius" -ln "flameStartRadius" -dv 1 -min 0 -at "double";
	addAttr -ci true -sn "flameEndRadius" -ln "flameEndRadius" -dv 0.4 -min 0 -at "double";
	addAttr -ci true -sn "fireIntensity" -ln "fireIntensity" -dv 0.5 -min 0 -max 1 -at "double";
	addAttr -ci true -sn "fireLifespan" -ln "fireLifespan" -dv 1 -min 0 -at "double";
	addAttr -is true -ci true -sn "betterIllumination" -ln "betterIllumination" -min 
		0 -max 1 -at "bool";
	addAttr -is true -ci true -sn "surfaceShading" -ln "surfaceShading" -min 0 -max 
		1 -at "float";
	addAttr -is true -ci true -sn "threshold" -ln "threshold" -min 0 -max 1 -at "float";
	addAttr -is true -ci true -sn "radius" -ln "radius" -dv 1 -min 0 -max 20 -at "float";
	setAttr -k off ".v";
	setAttr ".gf" -type "Int32Array" 0 ;
	setAttr -s 3 ".ifc";
	setAttr ".pos0" -type "vectorArray" 0 ;
	setAttr ".vel0" -type "vectorArray" 0 ;
	setAttr ".acc0" -type "vectorArray" 0 ;
	setAttr ".mas0" -type "doubleArray" 0 ;
	setAttr ".id0" -type "doubleArray" 0 ;
	setAttr ".nid" 84;
	setAttr ".bt0" -type "doubleArray" 0 ;
	setAttr ".ag0" -type "doubleArray" 0 ;
	setAttr ".lfm" 3;
	setAttr -s 3 ".xi";
	setAttr ".irbx" -type "string" "";
	setAttr ".irax" -type "string" "";
	setAttr ".icx" -type "string" "float $myphase = -3*time;\n.O[0] = (dnoise(.I[0] * .5 * .I[1] + $myphase) + .1) * .I[2]";
	setAttr ".cts" 21;
	setAttr ".cst" 21;
	setAttr ".prt" 8;
	setAttr -s 3 ".ppfd";
	setAttr ".lifespanPP0" -type "doubleArray" 0 ;
	setAttr -k on ".lifespan" 1;
	setAttr ".radiusPP0" -type "doubleArray" 0 ;
	setAttr ".ageNormalized" -type "doubleArray" 55 0.7516093617271028 0.63731265719557018
		 0.9140950981195346 0.87639021913896398 0.072249969308683437 0.55876953801349638 0.044118625036243163
		 0.96502862108801346 0.92898702140761302 0.72895025494638421 0.086181410305210746
		 0.4889400821108485 0.7552914883741938 0.78315223890092633 0.46619850527505308 0.017828447039223101
		 0.77961177380501123 0.62380909742862001 0.98057427787704377 0.34082632580325767 0.78856269566852955
		 0.034052469263337701 0.97607737932427363 0.44702856816178616 0.36808757275298998
		 0.74038813926814528 0.19995484942406033 0.25037021796207937 0.75965720309627183 0.6742542466262621
		 0.54688237428263919 0.77241982115184238 0.54160382690898556 0.54779968413014768 0.62164760183641532
		 0.85326273277002274 0.30955718437622043 0.7246940895461802 0.49337294412395138 0.30334027570528527
		 0.37907478131478767 0.26335659519786697 0.25821215274576792 0.31197036934021438 0.50957004733951128
		 0.48333335881352607 0.46392469902634959 0.26827249183959601 0.31758980958612498 0.23510761773671596
		 0.13016193717210001 0.31291435472950152 0.12684175574451062 0.072247625975195254
		 0.11215604522659041 ;
	setAttr -k on ".fireScale";
	setAttr -k on ".fireSpeed";
	setAttr -k on ".fireDirectionX";
	setAttr -k on ".fireDirectionY";
	setAttr -k on ".fireDirectionZ";
	setAttr -k on ".fireSpread" 0.15;
	setAttr -k on ".fireTurbulence";
	setAttr -k on ".fireDensity" 10;
	setAttr -k on ".flameStartRadius";
	setAttr -k on ".flameEndRadius";
	setAttr -k on ".fireIntensity" 0.35;
	setAttr -k on ".fireLifespan";
createNode dragField -n "dragField1";
	rename -uid "2BB99A87-4BBD-DA04-99A8-5E8841992371";
	setAttr ".mag" 10;
	setAttr ".fc[0]"  0 1 1;
	setAttr ".amag[0]"  0 1 1;
	setAttr ".crad[0]"  0 1 1;
	setAttr ".dx" 1;
createNode gravityField -n "gravityField1";
	rename -uid "E9DB8054-44CF-348B-04DB-498F7C7B46E9";
	setAttr ".fc[0]"  0 1 1;
	setAttr ".amag[0]"  0 1 1;
	setAttr ".crad[0]"  0 1 1;
createNode transform -n "group1";
	rename -uid "DCF49CB0-4B0C-9164-7BCC-70B9676E54E0";
	setAttr ".v" no;
	setAttr ".rp" -type "double3" -0.125 7.4541666666666666 -0.25 ;
	setAttr ".sp" -type "double3" -0.125 7.4541666666666666 -0.25 ;
createNode place3dTexture -n "place3dTexture1" -p "group1";
	rename -uid "2CD36B59-43DE-D79B-326C-2BAFA66049E0";
	setAttr ".s" -type "double3" 2 5 2 ;
	setAttr ".it" no;
createNode transform -n "particleShape1_fireDirection" -p "group1";
	rename -uid "86CB3617-4EA1-961B-B030-B88463937049";
	setAttr ".it" no;
createNode locator -n "particleShape1_fireDirectionShape" -p "particleShape1_fireDirection";
	rename -uid "7BE28EA8-4D31-6B89-263F-6FA2D35E7B9D";
	setAttr -k off ".v";
createNode transform -n "particleShape1_fireOrientation" -p "group1";
	rename -uid "F602F9E1-4C12-7B03-02B0-70A11D8B77B1";
	setAttr -l on ".tx";
	setAttr -l on ".ty";
	setAttr -l on ".tz";
	setAttr ".it" no;
createNode locator -n "particleShape1_fireOrientationShape" -p "particleShape1_fireOrientation";
	rename -uid "D763B00D-4F3A-56CA-CE78-90A9E4F2BE5D";
	setAttr -k off ".v";
createNode aimConstraint -n "particleShape1_fireOrientation_aimConstraint1" -p "particleShape1_fireOrientation";
	rename -uid "11408ECA-48A8-2DA3-5D65-17BC8DE45A80";
	addAttr -dcb 0 -ci true -sn "w0" -ln "particleShape1_fireDirectionW0" -dv 1 -at "double";
	setAttr -k on ".nds";
	setAttr -k off ".v";
	setAttr -k off ".tx";
	setAttr -k off ".ty";
	setAttr -k off ".tz";
	setAttr -k off ".rx";
	setAttr -k off ".ry";
	setAttr -k off ".rz";
	setAttr -k off ".sx";
	setAttr -k off ".sy";
	setAttr -k off ".sz";
	setAttr ".erp" yes;
	setAttr ".a" -type "double3" 0 1 0 ;
	setAttr -k on ".w0";
createNode lightLinker -s -n "lightLinker1";
	rename -uid "B48D95F8-4C7D-EEF0-F133-3C878A844BE4";
	setAttr -s 3 ".lnk";
	setAttr -s 3 ".slnk";
createNode shapeEditorManager -n "shapeEditorManager";
	rename -uid "12C41923-4EC0-2B3C-D2B4-BF828F5225BC";
createNode poseInterpolatorManager -n "poseInterpolatorManager";
	rename -uid "01F7DA69-4C89-2EE4-FF27-BFAB5B5EB84A";
createNode displayLayerManager -n "layerManager";
	rename -uid "EAE3B6AD-4D25-CA9E-8C23-A4B6CD815243";
createNode displayLayer -n "defaultLayer";
	rename -uid "E5BDD2F4-47B5-386B-5F45-B58DB74C884C";
createNode renderLayerManager -n "renderLayerManager";
	rename -uid "110BE421-4155-B993-4573-48BC704BAEF3";
createNode renderLayer -n "defaultRenderLayer";
	rename -uid "FF44E411-4B31-801A-7779-B5B7AEAB8C7B";
	setAttr ".g" yes;
createNode polyCube -n "polyCube1";
	rename -uid "04C0CA07-4866-A9EE-B725-E3B22B4E48FA";
	setAttr ".cuv" 4;
createNode file -n "file1";
	rename -uid "C572823B-45A3-4DD7-C9AC-DEAFD0C39036";
	setAttr ".ftn" -type "string" "C:/Users/Vanja/Desktop/projects/v-man/assets/project_structure/root [ project name ]//assets/textures/temp.jpg";
	setAttr ".ft" 0;
	setAttr ".cs" -type "string" "sRGB";
createNode place2dTexture -n "place2dTexture1";
	rename -uid "D63AD14F-4EF2-A0E4-3A3F-84872CBDF627";
createNode polyBevel3 -n "polyBevel1";
	rename -uid "5A16D302-4A1E-DE8E-D0D5-90AE565DD508";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 1 "e[0:11]";
	setAttr ".ix" -type "matrix" 2.0353122788621625 0 0 0 0 1.0054293983551785 0 0 0 0 1 0
		 0 0 0 1;
	setAttr ".ws" yes;
	setAttr ".oaf" yes;
	setAttr ".f" 0.018957345781768387;
	setAttr ".sg" 3;
	setAttr ".at" 180;
	setAttr ".sn" yes;
	setAttr ".mv" yes;
	setAttr ".mvt" 0.0001;
	setAttr ".sa" 30;
createNode RedshiftOptions -s -n "redshiftOptions";
	rename -uid "C950B35C-4625-D112-1E48-86819DDC2E1A";
createNode geoConnector -n "geoConnector1";
	rename -uid "B3C18E1B-4D92-E380-D0D1-7F87D429F843";
createNode expression -n "emitter1FireExpr";
	rename -uid "A326E548-4CF9-6244-7E18-4086C25A2DCD";
	setAttr -k on ".nds";
	setAttr -s 6 ".in";
	setAttr -s 6 ".in";
	setAttr -s 5 ".out";
	setAttr ".ixp" -type "string" ".O[0] = .I[0] * .I[1];\n.O[1] = .I[2];\n.O[2] = .I[3];\n.O[3] = .I[4];\n.O[4] = .I[5];";
createNode expression -n "turbulenceField1FireExpr";
	rename -uid "2D4F4E46-4EB0-468B-4742-FEBC53D6BBF8";
	setAttr -k on ".nds";
	setAttr -s 2 ".in";
	setAttr -s 2 ".in";
	setAttr -s 2 ".out";
	setAttr ".ixp" -type "string" ".O[0] = time * 3 * .I[0];\n.O[1] = .I[1] * .I[0];";
createNode expression -n "gravityField1FireExpr";
	rename -uid "8BCC8B9A-4549-01E5-ABB8-C69BB255A337";
	setAttr -k on ".nds";
	setAttr -s 5 ".in";
	setAttr -s 5 ".in";
	setAttr -s 4 ".out";
	setAttr ".ixp" -type "string" ".O[0] = .I[0] * .I[1];\n.O[1] = .I[2];\n.O[2] = .I[3];\n.O[3] = .I[4];";
createNode particleCloud -n "particleCloud2";
	rename -uid "31C16646-460C-48B6-D93A-A09C3EBC4D93";
	setAttr ".d" 3.002000093460083;
	setAttr ".nf" 0.50410002470016479;
	setAttr ".na" -0.67479997873306274;
createNode shadingEngine -n "particleCloud2SG";
	rename -uid "FEF03AF1-4869-55D9-8E41-54A8EB09AC99";
	setAttr ".ihi" 0;
	setAttr ".ro" yes;
createNode materialInfo -n "materialInfo1";
	rename -uid "324F9C83-4416-576A-ABF4-7B9B7DACD1FC";
createNode expression -n "particleCloud2FireIntensityExpr";
	rename -uid "1A22D9AA-467D-7BCC-5B5C-939B29E7AF64";
	setAttr -k on ".nds";
	setAttr ".ixp" -type "string" ".O[0] = .I[0];";
createNode ramp -n "ramp1";
	rename -uid "9981FEF3-4A50-8C3E-E6C6-948677E55EE5";
	setAttr -s 3 ".cel";
	setAttr ".cel[0].ep" 1;
	setAttr ".cel[0].ec" -type "float3" 0.574 0.27399999 0.148 ;
	setAttr ".cel[1].ep" 0.42500001192092896;
	setAttr ".cel[1].ec" -type "float3" 0.67500001 0.43900001 0.14300001 ;
	setAttr ".cel[2].ep" 0;
	setAttr ".cel[2].ec" -type "float3" 0.73900002 0.55900002 0.17200001 ;
createNode place2dTexture -n "place2dTexture2";
	rename -uid "635E0106-465D-29A7-F56A-1DB63DE76CEA";
createNode particleAgeMapper -n "particleAgeMapper1";
	rename -uid "23949F8D-43D4-5916-E9DD-6D808FD9CE74";
	setAttr ".rea" yes;
createNode ramp -n "ramp2";
	rename -uid "FA896717-493D-04C7-9429-B2A79340BEE2";
	setAttr -s 3 ".cel";
	setAttr ".cel[0].ep" 1;
	setAttr ".cel[0].ec" -type "float3" 1 1 1 ;
	setAttr ".cel[1].ep" 0.47999998927116394;
	setAttr ".cel[1].ec" -type "float3" 0.89999998 0.89999998 0.89999998 ;
	setAttr ".cel[2].ep" 0;
	setAttr ".cel[2].ec" -type "float3" 1 1 1 ;
createNode place2dTexture -n "place2dTexture3";
	rename -uid "DF9BBE41-4D43-2DA6-5B46-8790D050B122";
createNode ramp -n "ramp3";
	rename -uid "39503D1E-4D80-5DF6-9CBC-2B99B717C980";
	setAttr -s 5 ".cel";
	setAttr ".cel[0].ep" 1;
	setAttr ".cel[0].ec" -type "float3" 0 0 0 ;
	setAttr ".cel[1].ep" 0.85500001907348633;
	setAttr ".cel[1].ec" -type "float3" 0.11 0.083999999 0.011 ;
	setAttr ".cel[2].ep" 0.60000002384185791;
	setAttr ".cel[2].ec" -type "float3" 0.75599998 0.57499999 0.078000002 ;
	setAttr ".cel[3].ep" 0.4050000011920929;
	setAttr ".cel[3].ec" -type "float3" 0.71200001 0.43900001 0.184 ;
	setAttr ".cel[4].ep" 0;
	setAttr ".cel[4].ec" -type "float3" 0 0 0 ;
createNode place2dTexture -n "place2dTexture4";
	rename -uid "C54943CC-43D6-A88E-EB37-51A10F834244";
createNode crater -n "crater1";
	rename -uid "D8659C2C-4A2C-9988-28CA-A4B016F49561";
	setAttr ".sh" 14.416999816894531;
	setAttr ".c1" -type "float3" 1 0.68099999 0.329 ;
	setAttr ".c2" -type "float3" 0.25099999 0.13699999 0.086000003 ;
	setAttr ".c3" -type "float3" 0.219 0.12899999 0.043000001 ;
	setAttr ".m" 0.05000000074505806;
	setAttr ".ba" 0.569100022315979;
	setAttr ".fr" 0.73199999332427979;
createNode expression -n "place3dTexture1FireExpr";
	rename -uid "532CE197-42F6-EDCB-4324-7696357E0879";
	setAttr -k on ".nds";
	setAttr -s 5 ".in";
	setAttr -s 5 ".in";
	setAttr -s 3 ".out";
	setAttr ".ixp" -type "string" "vector $fireDirection = <<.I[0],.I[1],.I[2]>>;\n$fireDirection = unit( $fireDirection );\nfloat $timeScale = time * 0.07 * .I[3] * .I[4];\n.O[0] = $fireDirection.x * $timeScale;\n.O[1] = $fireDirection.y * $timeScale;\n.O[2] = $fireDirection.z * $timeScale;";
createNode arrayMapper -n "arrayMapper1";
	rename -uid "1308B98A-440E-E1D7-733D-14A70435D426";
createNode ramp -n "ramp4";
	rename -uid "2142FB07-40DF-FAA4-560E-C49AB4484635";
	setAttr -s 3 ".cel";
	setAttr ".cel[0].ep" 0;
	setAttr ".cel[0].ec" -type "float3" 0 0 0 ;
	setAttr ".cel[1].ep" 0.10000000149011612;
	setAttr ".cel[2].ep" 1;
	setAttr ".n" 0.024399999529123306;
	setAttr ".nf" 0.63419997692108154;
createNode expression -n "ramp4FlameRadiusExpr";
	rename -uid "83C2A6FF-489C-91ED-BE54-149D5A7DE07D";
	setAttr -k on ".nds";
	setAttr -s 3 ".in";
	setAttr -s 3 ".in";
	setAttr -s 6 ".out";
	setAttr ".ixp" -type "string" "float $startRadius = .I[0] * .I[1];\nfloat $endRadius = .I[2] * .I[1];\n.O[0] =  $startRadius;\n.O[1] =  $startRadius;\n.O[2] =  $startRadius;\n.O[3] =  $endRadius;\n.O[4] =  $endRadius;\n.O[5] =  $endRadius;";
createNode script -n "sceneConfigurationScriptNode";
	rename -uid "CFE5DE92-41DC-2CCA-B997-949967AAB472";
	setAttr ".b" -type "string" "playbackOptions -min 1 -max 120 -ast 1 -aet 200 ";
	setAttr ".st" 6;
select -ne :time1;
	setAttr ".o" 21;
	setAttr ".unw" 21;
select -ne :hardwareRenderingGlobals;
	setAttr ".otfna" -type "stringArray" 22 "NURBS Curves" "NURBS Surfaces" "Polygons" "Subdiv Surface" "Particles" "Particle Instance" "Fluids" "Strokes" "Image Planes" "UI" "Lights" "Cameras" "Locators" "Joints" "IK Handles" "Deformers" "Motion Trails" "Components" "Hair Systems" "Follicles" "Misc. UI" "Ornaments"  ;
	setAttr ".otfva" -type "Int32Array" 22 0 1 1 1 1 1
		 1 1 1 0 0 0 0 0 0 0 0 0
		 0 0 0 0 ;
	setAttr ".msaa" yes;
	setAttr ".fprt" yes;
select -ne :renderPartition;
	setAttr -s 3 ".st";
select -ne :renderGlobalsList1;
select -ne :defaultShaderList1;
	setAttr -s 5 ".s";
select -ne :postProcessList1;
	setAttr -s 2 ".p";
select -ne :defaultRenderUtilityList1;
	setAttr -s 6 ".u";
select -ne :defaultRenderingList1;
select -ne :defaultTextureList1;
	setAttr -s 7 ".tx";
select -ne :lambert1;
select -ne :initialShadingGroup;
	setAttr ".ro" yes;
select -ne :initialParticleSE;
	setAttr ".ro" yes;
select -ne :initialMaterialInfo;
select -ne :defaultRenderGlobals;
	setAttr ".ren" -type "string" "redshift";
select -ne :defaultResolution;
	setAttr ".pa" 1;
select -ne :hardwareRenderGlobals;
	setAttr ".ctrs" 256;
	setAttr ".btrs" 512;
connectAttr "polyBevel1.out" "pCubeShape1.i";
connectAttr ":time1.o" "emitter1.ct";
connectAttr "geoConnector1.ocd" "emitter1.ocd";
connectAttr "geoConnector1.ocl" "emitter1.t";
connectAttr "geoConnector1.pos" "emitter1.opd";
connectAttr "geoConnector1.vel" "emitter1.ovd";
connectAttr "geoConnector1.swg" "emitter1.swge";
connectAttr "emitter1FireExpr.out[0]" "emitter1.rat";
connectAttr "emitter1FireExpr.out[1]" "emitter1.spr";
connectAttr "emitter1FireExpr.out[2]" "emitter1.dx";
connectAttr "emitter1FireExpr.out[3]" "emitter1.dy";
connectAttr "emitter1FireExpr.out[4]" "emitter1.dz";
connectAttr "particleShape1.ifl" "emitter1.full[0]";
connectAttr "particleShape1.tss" "emitter1.dt[0]";
connectAttr "particleShape1.inh" "emitter1.inh[0]";
connectAttr "particleShape1.stt" "emitter1.stt[0]";
connectAttr "particleShape1.sd[0]" "emitter1.sd[0]";
connectAttr "geoConnector1.ocd" "turbulenceField1.ocd";
connectAttr "geoConnector1.ocl" "turbulenceField1.t";
connectAttr "geoConnector1.pos" "turbulenceField1.opd";
connectAttr "geoConnector1.vel" "turbulenceField1.ovd";
connectAttr "turbulenceField1FireExpr.out[0]" "turbulenceField1.phz";
connectAttr "turbulenceField1FireExpr.out[1]" "turbulenceField1.mag";
connectAttr "particleShape1.fd" "turbulenceField1.ind[0]";
connectAttr "particleShape1.ppfd[0]" "turbulenceField1.ppda[0]";
connectAttr ":time1.o" "particleShape1.cti";
connectAttr "particleShape1.xo[0]" "particleShape1.lifespanPP";
connectAttr ":time1.o" "particleShape1.tim";
connectAttr "particleShape1.pos" "particleShape1.xi[0]";
connectAttr "particleShape1.fireScale" "particleShape1.xi[1]";
connectAttr "particleShape1.fireLifespan" "particleShape1.xi[2]";
connectAttr "emitter1.ot[0]" "particleShape1.npt[0]";
connectAttr "turbulenceField1.of[0]" "particleShape1.ifc[0]";
connectAttr "dragField1.of[0]" "particleShape1.ifc[1]";
connectAttr "gravityField1.of[0]" "particleShape1.ifc[2]";
connectAttr "arrayMapper1.ovpp" "particleShape1.radiusPP";
connectAttr "particleShape1.fd" "dragField1.ind[0]";
connectAttr "particleShape1.ppfd[1]" "dragField1.ppda[0]";
connectAttr "gravityField1FireExpr.out[0]" "gravityField1.mag";
connectAttr "gravityField1FireExpr.out[1]" "gravityField1.dx";
connectAttr "gravityField1FireExpr.out[2]" "gravityField1.dy";
connectAttr "gravityField1FireExpr.out[3]" "gravityField1.dz";
connectAttr "particleShape1.fd" "gravityField1.ind[0]";
connectAttr "particleShape1.ppfd[2]" "gravityField1.ppda[0]";
connectAttr "place3dTexture1FireExpr.out[0]" "place3dTexture1.tx";
connectAttr "place3dTexture1FireExpr.out[1]" "place3dTexture1.ty";
connectAttr "place3dTexture1FireExpr.out[2]" "place3dTexture1.tz";
connectAttr "particleShape1_fireOrientation.r" "place3dTexture1.r";
connectAttr "particleShape1.fireDirectionX" "particleShape1_fireDirection.tx" -l
		 on;
connectAttr "particleShape1.fireDirectionY" "particleShape1_fireDirection.ty" -l
		 on;
connectAttr "particleShape1.fireDirectionZ" "particleShape1_fireDirection.tz" -l
		 on;
connectAttr "particleShape1_fireOrientation_aimConstraint1.crx" "particleShape1_fireOrientation.rx"
		;
connectAttr "particleShape1_fireOrientation_aimConstraint1.cry" "particleShape1_fireOrientation.ry"
		;
connectAttr "particleShape1_fireOrientation_aimConstraint1.crz" "particleShape1_fireOrientation.rz"
		;
connectAttr "particleShape1_fireOrientation.pim" "particleShape1_fireOrientation_aimConstraint1.cpim"
		;
connectAttr "particleShape1_fireOrientation.t" "particleShape1_fireOrientation_aimConstraint1.ct"
		;
connectAttr "particleShape1_fireOrientation.rp" "particleShape1_fireOrientation_aimConstraint1.crp"
		;
connectAttr "particleShape1_fireOrientation.rpt" "particleShape1_fireOrientation_aimConstraint1.crt"
		;
connectAttr "particleShape1_fireOrientation.ro" "particleShape1_fireOrientation_aimConstraint1.cro"
		;
connectAttr "particleShape1_fireDirection.t" "particleShape1_fireOrientation_aimConstraint1.tg[0].tt"
		;
connectAttr "particleShape1_fireDirection.rp" "particleShape1_fireOrientation_aimConstraint1.tg[0].trp"
		;
connectAttr "particleShape1_fireDirection.rpt" "particleShape1_fireOrientation_aimConstraint1.tg[0].trt"
		;
connectAttr "particleShape1_fireDirection.pm" "particleShape1_fireOrientation_aimConstraint1.tg[0].tpm"
		;
connectAttr "particleShape1_fireOrientation_aimConstraint1.w0" "particleShape1_fireOrientation_aimConstraint1.tg[0].tw"
		;
relationship "link" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" "particleCloud2SG.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" "particleCloud2SG.message" ":defaultLightSet.message";
connectAttr "layerManager.dli[0]" "defaultLayer.id";
connectAttr "renderLayerManager.rlmi[0]" "defaultRenderLayer.rlid";
connectAttr ":defaultColorMgtGlobals.cme" "file1.cme";
connectAttr ":defaultColorMgtGlobals.cfe" "file1.cmcf";
connectAttr ":defaultColorMgtGlobals.cfp" "file1.cmcp";
connectAttr ":defaultColorMgtGlobals.wsn" "file1.ws";
connectAttr "place2dTexture1.c" "file1.c";
connectAttr "place2dTexture1.tf" "file1.tf";
connectAttr "place2dTexture1.rf" "file1.rf";
connectAttr "place2dTexture1.mu" "file1.mu";
connectAttr "place2dTexture1.mv" "file1.mv";
connectAttr "place2dTexture1.s" "file1.s";
connectAttr "place2dTexture1.wu" "file1.wu";
connectAttr "place2dTexture1.wv" "file1.wv";
connectAttr "place2dTexture1.re" "file1.re";
connectAttr "place2dTexture1.of" "file1.of";
connectAttr "place2dTexture1.r" "file1.ro";
connectAttr "place2dTexture1.n" "file1.n";
connectAttr "place2dTexture1.vt1" "file1.vt1";
connectAttr "place2dTexture1.vt2" "file1.vt2";
connectAttr "place2dTexture1.vt3" "file1.vt3";
connectAttr "place2dTexture1.vc1" "file1.vc1";
connectAttr "place2dTexture1.o" "file1.uv";
connectAttr "place2dTexture1.ofs" "file1.fs";
connectAttr "polyCube1.out" "polyBevel1.ip";
connectAttr "pCubeShape1.wm" "polyBevel1.mp";
connectAttr ":time1.o" "geoConnector1.ct";
connectAttr "pCubeShape1.o" "geoConnector1.lge";
connectAttr "pCubeShape1.wm" "geoConnector1.wm";
connectAttr "pCubeShape1.msg" "geoConnector1.own";
connectAttr "particleShape1.fireDensity" "emitter1FireExpr.in[0]";
connectAttr "particleShape1.fireScale" "emitter1FireExpr.in[1]";
connectAttr "particleShape1.fireSpread" "emitter1FireExpr.in[2]";
connectAttr "particleShape1.fireDirectionX" "emitter1FireExpr.in[3]";
connectAttr "particleShape1.fireDirectionY" "emitter1FireExpr.in[4]";
connectAttr "particleShape1.fireDirectionZ" "emitter1FireExpr.in[5]";
connectAttr ":time1.o" "emitter1FireExpr.tim";
connectAttr "emitter1.msg" "emitter1FireExpr.obm";
connectAttr ":time1.o" "turbulenceField1FireExpr.tim";
connectAttr "particleShape1.fireScale" "turbulenceField1FireExpr.in[0]";
connectAttr "particleShape1.fireTurbulence" "turbulenceField1FireExpr.in[1]";
connectAttr "turbulenceField1.msg" "turbulenceField1FireExpr.obm";
connectAttr "particleShape1.fireSpeed" "gravityField1FireExpr.in[0]";
connectAttr "particleShape1.fireScale" "gravityField1FireExpr.in[1]";
connectAttr "particleShape1.fireDirectionX" "gravityField1FireExpr.in[2]";
connectAttr "particleShape1.fireDirectionY" "gravityField1FireExpr.in[3]";
connectAttr "particleShape1.fireDirectionZ" "gravityField1FireExpr.in[4]";
connectAttr ":time1.o" "gravityField1FireExpr.tim";
connectAttr "gravityField1.msg" "gravityField1FireExpr.obm";
connectAttr "particleCloud2FireIntensityExpr.out[0]" "particleCloud2.gi";
connectAttr "ramp1.oc" "particleCloud2.c";
connectAttr "ramp2.oc" "particleCloud2.t";
connectAttr "ramp3.oc" "particleCloud2.i";
connectAttr "crater1.oc" "particleCloud2.m";
connectAttr "particleCloud2.oi" "particleCloud2SG.vs";
connectAttr "particleShape1.iog" "particleCloud2SG.dsm" -na;
connectAttr "particleCloud2SG.msg" "materialInfo1.sg";
connectAttr "particleShape1.fireIntensity" "particleCloud2FireIntensityExpr.in[0]"
		;
connectAttr ":time1.o" "particleCloud2FireIntensityExpr.tim";
connectAttr "particleCloud2.msg" "particleCloud2FireIntensityExpr.obm";
connectAttr "place2dTexture2.o" "ramp1.uv";
connectAttr "place2dTexture2.ofs" "ramp1.fs";
connectAttr "particleAgeMapper1.ouv" "place2dTexture2.uv";
connectAttr "place2dTexture3.o" "ramp2.uv";
connectAttr "place2dTexture3.ofs" "ramp2.fs";
connectAttr "particleAgeMapper1.ouv" "place2dTexture3.uv";
connectAttr "place2dTexture4.o" "ramp3.uv";
connectAttr "place2dTexture4.ofs" "ramp3.fs";
connectAttr "particleAgeMapper1.ouv" "place2dTexture4.uv";
connectAttr "place3dTexture1.wim" "crater1.pm";
connectAttr "particleShape1.fireDirectionX" "place3dTexture1FireExpr.in[0]";
connectAttr "particleShape1.fireDirectionY" "place3dTexture1FireExpr.in[1]";
connectAttr "particleShape1.fireDirectionZ" "place3dTexture1FireExpr.in[2]";
connectAttr "particleShape1.fireSpeed" "place3dTexture1FireExpr.in[3]";
connectAttr "particleShape1.fireScale" "place3dTexture1FireExpr.in[4]";
connectAttr ":time1.o" "place3dTexture1FireExpr.tim";
connectAttr "place3dTexture1.msg" "place3dTexture1FireExpr.obm";
connectAttr "ramp4.msg" "arrayMapper1.cn";
connectAttr "ramp4.oc" "arrayMapper1.cnc";
connectAttr "particleShape1.ageNormalized" "arrayMapper1.vpp";
connectAttr "ramp4FlameRadiusExpr.out[0]" "ramp4.cel[1].ecr";
connectAttr "ramp4FlameRadiusExpr.out[1]" "ramp4.cel[1].ecg";
connectAttr "ramp4FlameRadiusExpr.out[2]" "ramp4.cel[1].ecb";
connectAttr "ramp4FlameRadiusExpr.out[3]" "ramp4.cel[2].ecr";
connectAttr "ramp4FlameRadiusExpr.out[4]" "ramp4.cel[2].ecg";
connectAttr "ramp4FlameRadiusExpr.out[5]" "ramp4.cel[2].ecb";
connectAttr "particleShape1.flameStartRadius" "ramp4FlameRadiusExpr.in[0]";
connectAttr "particleShape1.fireScale" "ramp4FlameRadiusExpr.in[1]";
connectAttr "particleShape1.flameEndRadius" "ramp4FlameRadiusExpr.in[2]";
connectAttr ":time1.o" "ramp4FlameRadiusExpr.tim";
connectAttr "ramp4.msg" "ramp4FlameRadiusExpr.obm";
connectAttr "particleCloud2SG.pa" ":renderPartition.st" -na;
connectAttr "particleCloud2.msg" ":defaultShaderList1.s" -na;
connectAttr "place2dTexture1.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture2.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "particleAgeMapper1.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture3.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture4.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place3dTexture1.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "defaultRenderLayer.msg" ":defaultRenderingList1.r" -na;
connectAttr "file1.msg" ":defaultTextureList1.tx" -na;
connectAttr "ramp1.msg" ":defaultTextureList1.tx" -na;
connectAttr "particleAgeMapper1.msg" ":defaultTextureList1.tx" -na;
connectAttr "ramp2.msg" ":defaultTextureList1.tx" -na;
connectAttr "ramp3.msg" ":defaultTextureList1.tx" -na;
connectAttr "crater1.msg" ":defaultTextureList1.tx" -na;
connectAttr "ramp4.msg" ":defaultTextureList1.tx" -na;
connectAttr "file1.oc" ":lambert1.c";
connectAttr "pCubeShape1.iog" ":initialShadingGroup.dsm" -na;
connectAttr "file1.msg" ":initialMaterialInfo.t" -na;
// End of sc010_sh010_work_v01_01.ma