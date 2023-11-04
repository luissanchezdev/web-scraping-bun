import { extract } from "@extractus/article-extractor";
import axios from "axios";

const urls = [
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-rumbera-smr-2170e1d2ac9372902d12b8486202d91d6309b664",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-california-smr-e651dd58bb56d162c75962e9ad9a23a263f178f9",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-espiral-smr-63132c4ae72edac1c6fb4568f4d6799e6b65cc91",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-mono-smr-9d330fb6b3b6494a83d7e5eba2b5dba82f8eee0e",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-lisa-smr-5cb8f9a5b923ca11605b67c5d10797e81a91e320",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-buscona-smr-93158b0bfc239feeeed21998730d39ec1263eb04",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-toyota-smr-0adccdacdbd8138c661aeaf6677c4ea5c737386f",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-katrina-smr-39bb42814f0fcd8bbd1797e110de0841a9866a99",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-inquieto-smr-a162fb9790449d5c224b7023d8d802a2624d1394",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-bichota-smr-f17a2da0b3c1f7cba0b7a059f93f19942bbda4e9",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-estupendo-smr-b02fb8cdc7783064a4f582e5294512a6a0cb3d63",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-nativo-smr-889a44e3515b0580a5af81fc6fbf53f372909220",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-gatubela-smr-647f4fbaeda12cce3c986f032fc345298e327eb2",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-romano-smr-cae1fc1cb79d4d3ce21e302394be3c9a0beb4fd8",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-capellada-smr-a4f2abb45b3eba33b1cfa1a50e6a01319121404c",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-acrilico-smr-4f2be15840e39feddae51732ffd7da48b9c84fd1",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-pulsera-smr-1483a1fd381fbff49208acb02433eb6f6ea0f724",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-cristal-liana-smr-6322b51297ca2d27ad5de9517ee2f75a93084c79",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-cristal-arelys-smr-e2d05e7b2232586914196a12b16166baf1042a90",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-consentida-smr-9798a03e82f01dea1ee5bb12094f0bbdbf1505df",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-puritana-smr-7fddef2e88729e2e82c93494a06d1b023d928030",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/stilettos-sin-correa-smr-02e7e15bd702b0f4e1e3835a747e769ea82cd20f",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-inclusivo-smr-f36dff7e9de89c1ffd58317811a898ba06280377",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-capellada-smr-d6e38da668fe1332ed4b3d756d06dfc39c113b25",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-espiral-smr-b86e3d843e4214295036faebc15b36fa1bab4fbc",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-kiara-smr-3843111ddae923896f6b8b8ebd9f11c78ebdb3af",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/botin-militar-smr-12e429b41a43facbec1363539e3a60567b0292a3",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-gomela-smr-fc2963f0adfadacfa8183fd05ecb95a6c0de1924",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/botin-imitador-smr-061316f7159e31b3a472b447ce7862149202a5af",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-hilary-smr-a2c78abc027af86b2d48f45edbfd8dc4d6d0c9c8",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-bonita-smr-70f5226f86a887f3cc66c107362b496ee3c7c951",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-tania-smr-ae73824aefa4d5a76090043229051d22a2b63d6e",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-yuliet-smr-cadc74efab6dbdc4ba4deee0d0329e9c0768d6f9",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-mari-mar-smr-c78cefb2172d86ce56c03f51095e68f349471df9",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-coral-smr-c4f4b6395abc2ed3d84733765638ff5cc8b941a8",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-tesoro-smr-dfe4db668290b3b80e6d008ea25e654d23f0a071",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-margarita-smr-736d49b9507dc83d2f4773709ed97d299af8f18a",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-island-smr-600f396d3e62560aeb102f227bf322d6b6dddda9",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-mimada-smr-0258f4b24f4a6bf2a329d6c03c2516df565b7212",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-animal-print-smr-070361a93b989961542f0ead260b1cab88e48d56",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-sicodelica-smr-a363233a99ce779363ab9d57ae272efcd366d962",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-tairona-smr-253c4de508a1c62715e919216391b750fc64e315",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-exitosa-smr-484cda5e30f7c0d4020cf1bf04e6de0cb7e6257c",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-acelerada-smr-d74a79d1e0b477fd769158fb5b27f92c63b5f0b4",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-romana-smr-4e58b3505f35b87c73293b4614ff249f469447e8",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalias-espumas-smr-34a2653f17bc2ae3eae91393e1bae01dfd5c2523",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-lluvia-smr-a849b85d6d0d6612fa7052e21153a425744785de",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-devora-smr-b3133ef9260585164488fec7fc200da4a704b2f3",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-praga-smr-9ce3a56fa4f623909a3325694d332b7f308a760a",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalias-antonela-smr-742874a22504c967b45c74dc60e3c7e9375436f3",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-maleja-smr-6c3f734a3b714cb073f949a1bc299a71c299d6db",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-chiflada-smr-bab51ff21f41897e6c9605e263b3feb5d6b99162",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-latina-smr-61564af946579f678d7dab87638c75a87c564eb6",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-yailin-smr-cadc4d04bb0eba335ebee8a1a9df59d5eb9e4781",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plana-shantall-smr-d828222565fa76312cb568c92accf41924e38c99",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-vanessa-smr-07c63ce8887a0b77ac44ad1f8894af845a5d8635",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-topacio-smr-ca5c860c816f4a0b6f9236ab2721ffa84f465706",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-princesa-smr-6a598fc26fbbe3b7ed61e0033795b99d6ff14f23",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-tipo-romano-smr-d2f07db51cc25667ee64307cb11530e4f9c4060e",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-cubano-diamante-smr-0a9c29f6a18a480ceffe49288a9c6912e5a3276a",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-cubano-bendecido-smr-dfb2015b1bbcb4ca04edc628f1b21c7d48d78dd2",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-cristal-unico-smr-48693297d9a8ca644df4804167944c6ee6ba009d",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/cubano-transparente-smr-5a2272ed5758b2fe137e2907badd94098ab4362e",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/bota-penelope-smr-278ccebca31a3487a5d672d8e3db180c5c1d6d31",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/bota-berlin-smr-adb15b75220942998d2151369843be975c0d9d56",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/bota-militar-smr-4168aabacc22ae223691dd7be2803d7038a4e5a6",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/botas-en-tacon-smr-62f839885ccb98583e9769f4fb166513ba52cd54",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/botas-smr-4213e64b1fc3ed346d609c4cc0aef11ebc3480bd",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/fashionista-smr-738a20d22bc2654b5b632924d16c28346a5d2428",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/ironica-smr-14e3fd86f6512a8b7d0bdfe42e13f7fa4f5e5645",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/madonna-smr-2b7cd398970a3eac405bd61de3fad8c231d51ce7",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-fabuloso-smr-f809413da124bc99de10600adddbe9e9c4aad5db",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-trepadora-smr-1adc332dd23acb389453bb47851f9276bb0d6d41",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-melomana-smr-14f9f33f0d729f15b364e9bdc17e83b69c869e10",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-poderosa-smr-5eddf025e448b901da782c0ce97be0249f111590",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-transparente-smr-5ef241d363cdeb6e22bdb449d7aba0af944637c6",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-sensual-smr-492a3cab172412ded88f18c9ca1fa97befa17fbb",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-timida-smr-23cf0c8fe226fa1a67751c5a2f87c74936470871",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playera-perla-smr-25639e25653843a6a83bff382d2669d9905e6306",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-linda-smr-fdceeda7657d2587414967b7dbfdf15af7191def",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-matrix-smr-527554d74b62985787776f369d983def89f53239",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-licra-smr-f859403f61f6783e028d5bfa60a860b65f34f9d9",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-bondadosa-smr-12b34c5bce4447da9b2117f67e0bfbc21490be1c",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-sincera-smr-db81480120147189fb642411f207b5113eeaae27",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plana-comica-smr-253bd793e17fed99a905af6c75b852a2f538f687",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plana-traviesa-smr-c85c20fc7aa2bc32a7c8807f6412fa17b2905a34",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-espiral-smr-4c17fc73a63a6cdab7f9d409d6d93b6c29a9eece",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plana-complice-smr-dacab12ada26af025071019d5e42db4568dbeafc",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plana-celosa-smr-a491b60e153dc211e918106e62cab9ae77ecf30a",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-domino-smr-da6ae0ed62fae199760a5c5a1a06f54171fa3b3e",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-nicol-smr-1edaf02459e2f6a7beef5e68e8cf7c147b94ebb0",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-nieve-smr-59b06af35475eea0c1d2e341a3fe09d2d694fc1a",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/sandalia-rihana-smr-db01683d151ade7f172c4fc9529a8481e0e0146c",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-genuina-smr-b7917bf9f751ed63bd08e724497165a69f528c86",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-risuena-smr-ff5f3b50a33c5fcfcd5948b65cef9a66dfa64042",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-alocada-smr-3eec0dd1bd41cf2021152b93645664348786a554",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-generosa-smr-4e24cc2b127a031a5556d42e269b4e6b77b1ed0c",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-imprudencia-smr-edbf6562ae73ed50d9bfb9570f8660915932287e",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-marbel-smr-420ea4faf0e5b3643a91719e29ae9bb78a01e4ce",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-yute-smr-3242e9262160c2b8b8fa248304556d8aa27a4244",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-romana-smr-d3ed2bea98a3b02350283dffd7d30d851a8f3d38",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-desesperada-smr-6f801567a086c893c636f9b245aa6d3bb588c5c6",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-vanessa-smr-9ec03df1d927cf7470eaa3bea78e5bb161693cec",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/playa-licra-smr-7c9cff185a3b84e4b1774bc2f53ef7ca39cbde4e",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-nahomy-smr-10541caebb1b689b91f0794ba900855acb910e29",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-maravilla-smr-649f11a13b4223196733b16b71ee6e16de322ad6",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-cadenas-smr-ed481d0324ee3d65f6e51ecd3aff47c878ffa5ca",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-fascinante-smr-2960905e0fa37f440762de8d64a785f28d33b891",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/plataforma-casada-smr-6b357dc3343279e242aba50a0d439ac9c3e30e2b",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-gemelo-smr-e3e9f2a4b5f8f7d1628544a42ff939d9024402ed",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/fanatico-smr-f95b169cdabbba4cf1882052d7443aa939e7154d",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/fanatico-smr-c77f54e32d8c099acfc40cfec5a3f47fecf7265e",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-tolerante-smr-bec79726dcbe478b0c43d1b53a084057472ef0cb",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-cubano-exagerado-smr-c64d42378210d22fd164a28a00df7267da82ba9a",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-cubano-usurpador-smr-e67a687062bdf5ba3260af12fd86771c0d960faf",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-cubano-dakota-smr-f8272a3bed4b5df8557857ce320e8712d1cea751",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-esquivo-smr-1744788e14e19cd528a5008657e6401cac7a9357",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/tacon-tolerante-smr-5d7d8af218bb5b9c8e9975aeac256df2bd13e7d0",
  "https://www.sumerlabs.com/catalogo/calzadoexclusivas-deyaniraanguloalomiag/producto/cubano-perfecto-smr-692077742965cfc9befa110b3319725cfa737d73",
];

// const resultado = await extract(urls);

const productos = [];

for (let i = 0; i < urls.length; i++) {
  const product = await extract(urls[i]);
  console.log({ product });

  let textoOriginal = product.description;

  // Reemplaza "Producto al por mayor" con "Producto al por mayor " y agrega un salto de línea después
  textoOriginal = textoOriginal.replace(
    /[0-9] \/ [0-9]Producto al por mayor/g,
    ""
  );

  /* textoOriginal = textoOriginal.replace(/\"[0-9]\"/g, "[0-9]"); */

  // Reemplaza "Precio por unidad$" con "Precio por unidad $" y agrega un salto de línea después
  textoOriginal = textoOriginal.replace(
    /Precio por unidad\$/g,
    "Precio por unidad $"
  );

  // Reemplaza "Precio al por mayor$" con "Precio al por mayor $" y agrega un salto de línea después
  textoOriginal = textoOriginal.replace(/000Precio/g, "000<br>Precio");

  textoOriginal = textoOriginal.replace(
    /Precio al por mayor/g,
    "Precio al por mayor "
  );

  // Reemplaza "Mínimo" seguido de cualquier cantidad de espacios por "Mínimo " y agrega un salto de línea después
  textoOriginal = textoOriginal.replace(/000Mínimo/g, "000. Mínimo");

  // Reemplaza "Disponibilidad:" con "Disponibilidad: " (agregando un espacio después)
  textoOriginal = textoOriginal.replace(
    "unidadesDisponibilidad:",
    "unidades<br>Disponibilidad: "
  );

  // Reemplaza "Descripción" con "Descripción: " (agregando un espacio después)
  textoOriginal = textoOriginal.replace("Descripción", "Descripción: ");

  textoOriginal = textoOriginal.replace(
    "disponibleDescripción",
    "disponible<br>Descripción"
  );

  textoOriginal = textoOriginal.replace("tallas de la...", "");
  console.log(textoOriginal);

  let sku = product.title.replace(/ /g, "-");
  sku = sku.slice(0, sku.length - 1);

  const newProduct = {
    id: i + 1,
    sku: sku,
    tipo: "variable",
    nombre: product.title,
    publicado: 1,
    visibilidadCatalogo: "visible",
    descripcionCorta: textoOriginal,
    imagenes: product.image + ".jpg",
    inventario: 1,
    existencias: 1,
    cantidaBajoInventario: 1,
    permitirReservas: 1,
    precioNormal: 100000,
    categorias: "Tacones",
    nombreAtributo1: "Color",
    valorAtributo1: "Negro",
    visibilidadAtributo1: 1,
    atributoGlobal1: 1,
    nombreAtributo2: "Talla",
    valorAtributo2: "34, 35, 36, 37, 38, 39, 40",
    visibilidadAtributo2: 1,
    atributoGlobal2: 1,
  };

  let url = newProduct.imagenes;

  // Expresión regular para reemplazar la parte inicial
  let regex =
    /^https:\/\/sumerlabs\.com\/sumer-app-90b8f\.appspot\.com\/product_photos%2F2097fa90365076a0d05cb1d11e7ae136%2F/;

  // Reemplazar la parte inicial por 'https://luiss.tech/wp-content/uploads/images/'
  url = url.replace(regex, "https://luiss.tech/wp-content/uploads/images/");

  // Eliminar todo desde '?' hasta '.jpg'
  url = url.replace(/\?.*\.jpg/, "");

  newProduct.imagenes = url + ".jpg";

  console.log(url);

  productos.push(newProduct);
  axios.post("http://localhost:3000/products", newProduct);
}

console.log({ productos });
