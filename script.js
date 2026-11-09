"use strict";

const SERVICE_CODE = "*543#";
const SESSION_TIMEOUT_MS = 120000;

const LANGUAGES = [
  { id: "fr", name: "Français", speech: "fr-FR" },
  { id: "ln", name: "Lingala", speech: "ln-CD" },
  { id: "sw", name: "Swahili", speech: "sw-CD" },
  { id: "lu", name: "Tshiluba", speech: "lu-CD" },
  { id: "kg", name: "Kikongo", speech: "kg-CD" }
];

const TEXT = {
  fr: {
    welcome: "BIENVENUE SUR TERRA AGRI 🌱",
    slogan: "Mieux informer. Mieux décider. Mieux cultiver.",
    chooseLanguage: "Choisissez votre langue :",
    instruction: "Répondez par le numéro correspondant.",
    mainTitle: "TERRA AGRI – MENU PRINCIPAL",
    main: ["Conseils agricoles", "Météo agricole", "Maladies et ravageurs", "Calendrier agricole", "Prix du marché", "Vendre mes produits", "Assistance agricole", "Langue", "Quitter"],
    select: "Tapez le numéro de votre choix.",
    cropsTitle: "CHOISISSEZ VOTRE CULTURE",
    crops: ["Manioc", "Maïs", "Riz", "Haricot", "Tomate", "Autres cultures"],
    adviceTitle: "CONSEIL POUR",
    adviceActions: ["Autre conseil", "Écouter le conseil", "Menu principal", "Retour"],
    provinceTitle: "MÉTÉO AGRICOLE — CHOISISSEZ VOTRE PROVINCE",
    provinces: ["Kinshasa", "Kongo Central", "Kasaï Central", "Kasaï Oriental", "Kwilu", "Kwango", "Haut-Katanga"],
    weatherActions: ["Conseil d'irrigation", "Écouter", "Menu principal", "Retour"],
    diseaseTitle: "MALADIES ET RAVAGEURS",
    diseases: ["Maladies du manioc", "Maladies du maïs", "Ravageurs des cultures", "Prévention", "Menu principal"],
    calendarTitle: "CALENDRIER AGRICOLE",
    calendar: ["Période de semis", "Période de plantation", "Période de récolte", "Conseils saisonniers", "Menu principal"],
    pricesTitle: "PRIX INDICATIFS DU MARCHÉ",
    priceCrops: ["Manioc", "Maïs", "Riz", "Haricot", "Tomate", "Menu principal"],
    marketTitle: "TERRA MARCHÉ",
    market: ["Publier un produit", "Consulter les produits", "Contacter un acheteur", "Menu principal"],
    assistanceTitle: "ASSISTANCE TERRA AGRI",
    assistance: ["Poser une question agricole", "Problème d'irrigation", "Problème de culture", "Contacter un agent", "Menu principal"],
    languageTitle: "CHOISISSEZ VOTRE LANGUE",
    back: "Retour",
    exit: "Session USSD terminée.",
    invalid: "Réponse invalide. Choisissez un numéro affiché.",
    listen: "Écouter",
    stop: "Arrêter la lecture",
    speechUnavailable: "La lecture vocale n'est pas prise en charge par ce navigateur.",
    recognitionUnavailable: "La dictée vocale n'est pas prise en charge ici. Vous pouvez saisir votre réponse au clavier.",
    demoWeather: "Données simulées pour cette démonstration — ne sont pas des prévisions réelles.",
    demoPrice: "Prix simulé pour cette démonstration. Modifiable dans script.js.",
    diagnostic: "Ces informations sont pédagogiques. Un spécialiste agricole doit confirmer tout diagnostic.",
    generalCalendar: "Indications générales à adapter selon votre région, la variété cultivée et les conditions locales.",
    noListings: "Aucune annonce enregistrée dans cette démonstration.",
    noBuyer: "La mise en relation avec un acheteur n'est pas connectée dans cette simulation.",
    noPublication: "Cette simulation ne publie pas réellement l'annonce sur Internet.",
    agentDisclaimer: "Agent fictif de démonstration — aucun agent humain n'est connecté.",
    helpIntro: "Bonjour ! Comment pouvons-nous vous aider ?",
    enterAnswer: "Votre réponse",
    send: "Envoyer",
    speakAdvice: "Écouter le conseil",
    languageChanged: "Langue modifiée.",
    sayPrompt: "Votre message",
    fillField: "Veuillez saisir une réponse.",
    timeout: "Session USSD terminée après une période d'inactivité. Recomposez *543# pour recommencer.",
    reset: "Simulation réinitialisée.",
    voiceNotFound: "Aucune voix dédiée n'est disponible pour cette langue. Le navigateur essaie sa voix par défaut; la prononciation peut varier.",
    translationNotice: "Les textes de cette langue doivent encore être validés. Le navigateur lit la version de démonstration avec une voix disponible, ce qui peut modifier la prononciation.",
    speechError: "La lecture vocale a échoué. Vérifiez les voix installées dans votre navigateur."
  },
  ln: { welcome: "BIENVENUE SUR TERRA AGRI [TRADUCTION À VALIDER]", slogan: "Mieux informer. Mieux décider. Mieux cultiver. [TRADUCTION À VALIDER]", chooseLanguage: "Choisissez votre langue : [TRADUCTION À VALIDER]", instruction: "Répondez par le numéro correspondant. [TRADUCTION À VALIDER]", mainTitle: "TERRA AGRI – MENU PRINCIPAL [TRADUCTION À VALIDER]", main: ["Conseils agricoles [TRADUCTION À VALIDER]", "Météo agricole [TRADUCTION À VALIDER]", "Maladies et ravageurs [TRADUCTION À VALIDER]", "Calendrier agricole [TRADUCTION À VALIDER]", "Prix du marché [TRADUCTION À VALIDER]", "Vendre mes produits [TRADUCTION À VALIDER]", "Assistance agricole [TRADUCTION À VALIDER]", "Langue [TRADUCTION À VALIDER]", "Quitter [TRADUCTION À VALIDER]"], select: "Tapez le numéro de votre choix. [TRADUCTION À VALIDER]", cropsTitle: "CHOISISSEZ VOTRE CULTURE [TRADUCTION À VALIDER]", crops: ["Manioc [TRADUCTION À VALIDER]", "Maïs [TRADUCTION À VALIDER]", "Riz [TRADUCTION À VALIDER]", "Haricot [TRADUCTION À VALIDER]", "Tomate [TRADUCTION À VALIDER]", "Autres cultures [TRADUCTION À VALIDER]"], adviceTitle: "CONSEIL POUR [TRADUCTION À VALIDER]", adviceActions: ["Autre conseil [TRADUCTION À VALIDER]", "Écouter le conseil [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]", "Retour [TRADUCTION À VALIDER]"], provinceTitle: "MÉTÉO AGRICOLE — CHOISISSEZ VOTRE PROVINCE [TRADUCTION À VALIDER]", provinces: ["Kinshasa", "Kongo Central", "Kasaï Central", "Kasaï Oriental", "Kwilu", "Kwango", "Haut-Katanga"], weatherActions: ["Conseil d'irrigation [TRADUCTION À VALIDER]", "Écouter [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]", "Retour [TRADUCTION À VALIDER]"], diseaseTitle: "MALADIES ET RAVAGEURS [TRADUCTION À VALIDER]", diseases: ["Maladies du manioc [TRADUCTION À VALIDER]", "Maladies du maïs [TRADUCTION À VALIDER]", "Ravageurs des cultures [TRADUCTION À VALIDER]", "Prévention [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], calendarTitle: "CALENDRIER AGRICOLE [TRADUCTION À VALIDER]", calendar: ["Période de semis [TRADUCTION À VALIDER]", "Période de plantation [TRADUCTION À VALIDER]", "Période de récolte [TRADUCTION À VALIDER]", "Conseils saisonniers [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], pricesTitle: "PRIX INDICATIFS DU MARCHÉ [TRADUCTION À VALIDER]", priceCrops: ["Manioc [TRADUCTION À VALIDER]", "Maïs [TRADUCTION À VALIDER]", "Riz [TRADUCTION À VALIDER]", "Haricot [TRADUCTION À VALIDER]", "Tomate [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], marketTitle: "TERRA MARCHÉ [TRADUCTION À VALIDER]", market: ["Publier un produit [TRADUCTION À VALIDER]", "Consulter les produits [TRADUCTION À VALIDER]", "Contacter un acheteur [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], assistanceTitle: "ASSISTANCE TERRA AGRI [TRADUCTION À VALIDER]", assistance: ["Poser une question agricole [TRADUCTION À VALIDER]", "Problème d'irrigation [TRADUCTION À VALIDER]", "Problème de culture [TRADUCTION À VALIDER]", "Contacter un agent [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], languageTitle: "CHOISISSEZ VOTRE LANGUE [TRADUCTION À VALIDER]", back: "Retour [TRADUCTION À VALIDER]", exit: "Session USSD terminée. [TRADUCTION À VALIDER]", invalid: "Réponse invalide. [TRADUCTION À VALIDER]", listen: "Écouter [TRADUCTION À VALIDER]", stop: "Arrêter la lecture [TRADUCTION À VALIDER]", speechUnavailable: "Lecture vocale non prise en charge. [TRADUCTION À VALIDER]", recognitionUnavailable: "Dictée vocale non prise en charge. [TRADUCTION À VALIDER]", demoWeather: "Données simulées. [TRADUCTION À VALIDER]", demoPrice: "Prix simulé. [TRADUCTION À VALIDER]", diagnostic: "Diagnostic à confirmer par un spécialiste agricole. [TRADUCTION À VALIDER]", generalCalendar: "Indications à adapter localement. [TRADUCTION À VALIDER]", noListings: "Aucune annonce. [TRADUCTION À VALIDER]", noBuyer: "Service non connecté. [TRADUCTION À VALIDER]", noPublication: "Annonce non publiée. [TRADUCTION À VALIDER]", agentDisclaimer: "Agent fictif — traduction à valider.", helpIntro: "Bonjour ! [TRADUCTION À VALIDER]", enterAnswer: "Votre réponse [TRADUCTION À VALIDER]", send: "Envoyer [TRADUCTION À VALIDER]", speakAdvice: "Écouter le conseil [TRADUCTION À VALIDER]", languageChanged: "Langue modifiée. [TRADUCTION À VALIDER]", sayPrompt: "Votre message [TRADUCTION À VALIDER]", fillField: "Veuillez saisir une réponse. [TRADUCTION À VALIDER]", timeout: "Session expirée. [TRADUCTION À VALIDER]", reset: "Simulation réinitialisée. [TRADUCTION À VALIDER]", voiceNotFound: "Voix non disponible. [TRADUCTION À VALIDER]", speechError: "Lecture vocale impossible. [TRADUCTION À VALIDER]" },
  sw: { welcome: "BIENVENUE SUR TERRA AGRI [TRADUCTION À VALIDER]", slogan: "Mieux informer. Mieux décider. Mieux cultiver. [TRADUCTION À VALIDER]", chooseLanguage: "Choisissez votre langue : [TRADUCTION À VALIDER]", instruction: "Répondez par le numéro correspondant. [TRADUCTION À VALIDER]", mainTitle: "TERRA AGRI – MENU PRINCIPAL [TRADUCTION À VALIDER]", main: ["Conseils agricoles [TRADUCTION À VALIDER]", "Météo agricole [TRADUCTION À VALIDER]", "Maladies et ravageurs [TRADUCTION À VALIDER]", "Calendrier agricole [TRADUCTION À VALIDER]", "Prix du marché [TRADUCTION À VALIDER]", "Vendre mes produits [TRADUCTION À VALIDER]", "Assistance agricole [TRADUCTION À VALIDER]", "Langue [TRADUCTION À VALIDER]", "Quitter [TRADUCTION À VALIDER]"], select: "Tapez le numéro de votre choix. [TRADUCTION À VALIDER]", cropsTitle: "CHOISISSEZ VOTRE CULTURE [TRADUCTION À VALIDER]", crops: ["Manioc [TRADUCTION À VALIDER]", "Maïs [TRADUCTION À VALIDER]", "Riz [TRADUCTION À VALIDER]", "Haricot [TRADUCTION À VALIDER]", "Tomate [TRADUCTION À VALIDER]", "Autres cultures [TRADUCTION À VALIDER]"], adviceTitle: "CONSEIL POUR [TRADUCTION À VALIDER]", adviceActions: ["Autre conseil [TRADUCTION À VALIDER]", "Écouter le conseil [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]", "Retour [TRADUCTION À VALIDER]"], provinceTitle: "MÉTÉO AGRICOLE — CHOISISSEZ VOTRE PROVINCE [TRADUCTION À VALIDER]", provinces: ["Kinshasa", "Kongo Central", "Kasaï Central", "Kasaï Oriental", "Kwilu", "Kwango", "Haut-Katanga"], weatherActions: ["Conseil d'irrigation [TRADUCTION À VALIDER]", "Écouter [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]", "Retour [TRADUCTION À VALIDER]"], diseaseTitle: "MALADIES ET RAVAGEURS [TRADUCTION À VALIDER]", diseases: ["Maladies du manioc [TRADUCTION À VALIDER]", "Maladies du maïs [TRADUCTION À VALIDER]", "Ravageurs des cultures [TRADUCTION À VALIDER]", "Prévention [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], calendarTitle: "CALENDRIER AGRICOLE [TRADUCTION À VALIDER]", calendar: ["Période de semis [TRADUCTION À VALIDER]", "Période de plantation [TRADUCTION À VALIDER]", "Période de récolte [TRADUCTION À VALIDER]", "Conseils saisonniers [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], pricesTitle: "PRIX INDICATIFS DU MARCHÉ [TRADUCTION À VALIDER]", priceCrops: ["Manioc [TRADUCTION À VALIDER]", "Maïs [TRADUCTION À VALIDER]", "Riz [TRADUCTION À VALIDER]", "Haricot [TRADUCTION À VALIDER]", "Tomate [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], marketTitle: "TERRA MARCHÉ [TRADUCTION À VALIDER]", market: ["Publier un produit [TRADUCTION À VALIDER]", "Consulter les produits [TRADUCTION À VALIDER]", "Contacter un acheteur [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], assistanceTitle: "ASSISTANCE TERRA AGRI [TRADUCTION À VALIDER]", assistance: ["Poser une question agricole [TRADUCTION À VALIDER]", "Problème d'irrigation [TRADUCTION À VALIDER]", "Problème de culture [TRADUCTION À VALIDER]", "Contacter un agent [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], languageTitle: "CHOISISSEZ VOTRE LANGUE [TRADUCTION À VALIDER]", back: "Retour [TRADUCTION À VALIDER]", exit: "Session USSD terminée. [TRADUCTION À VALIDER]", invalid: "Réponse invalide. [TRADUCTION À VALIDER]", listen: "Écouter [TRADUCTION À VALIDER]", stop: "Arrêter la lecture [TRADUCTION À VALIDER]", speechUnavailable: "Lecture vocale non prise en charge. [TRADUCTION À VALIDER]", recognitionUnavailable: "Dictée vocale non prise en charge. [TRADUCTION À VALIDER]", demoWeather: "Données simulées. [TRADUCTION À VALIDER]", demoPrice: "Prix simulé. [TRADUCTION À VALIDER]", diagnostic: "Diagnostic à confirmer par un spécialiste agricole. [TRADUCTION À VALIDER]", generalCalendar: "Indications à adapter localement. [TRADUCTION À VALIDER]", noListings: "Aucune annonce. [TRADUCTION À VALIDER]", noBuyer: "Service non connecté. [TRADUCTION À VALIDER]", noPublication: "Annonce non publiée. [TRADUCTION À VALIDER]", agentDisclaimer: "Agent fictif — traduction à valider.", helpIntro: "Bonjour ! [TRADUCTION À VALIDER]", enterAnswer: "Votre réponse [TRADUCTION À VALIDER]", send: "Envoyer [TRADUCTION À VALIDER]", speakAdvice: "Écouter le conseil [TRADUCTION À VALIDER]", languageChanged: "Langue modifiée. [TRADUCTION À VALIDER]", sayPrompt: "Votre message [TRADUCTION À VALIDER]", fillField: "Veuillez saisir une réponse. [TRADUCTION À VALIDER]", timeout: "Session expirée. [TRADUCTION À VALIDER]", reset: "Simulation réinitialisée. [TRADUCTION À VALIDER]", voiceNotFound: "Voix non disponible. [TRADUCTION À VALIDER]", speechError: "Lecture vocale impossible. [TRADUCTION À VALIDER]" },
  lu: { welcome: "BIENVENUE SUR TERRA AGRI [TRADUCTION À VALIDER]", slogan: "Mieux informer. Mieux décider. Mieux cultiver. [TRADUCTION À VALIDER]", chooseLanguage: "Choisissez votre langue : [TRADUCTION À VALIDER]", instruction: "Répondez par le numéro correspondant. [TRADUCTION À VALIDER]", mainTitle: "TERRA AGRI – MENU PRINCIPAL [TRADUCTION À VALIDER]", main: ["Conseils agricoles [TRADUCTION À VALIDER]", "Météo agricole [TRADUCTION À VALIDER]", "Maladies et ravageurs [TRADUCTION À VALIDER]", "Calendrier agricole [TRADUCTION À VALIDER]", "Prix du marché [TRADUCTION À VALIDER]", "Vendre mes produits [TRADUCTION À VALIDER]", "Assistance agricole [TRADUCTION À VALIDER]", "Langue [TRADUCTION À VALIDER]", "Quitter [TRADUCTION À VALIDER]"], select: "Tapez le numéro de votre choix. [TRADUCTION À VALIDER]", cropsTitle: "CHOISISSEZ VOTRE CULTURE [TRADUCTION À VALIDER]", crops: ["Manioc [TRADUCTION À VALIDER]", "Maïs [TRADUCTION À VALIDER]", "Riz [TRADUCTION À VALIDER]", "Haricot [TRADUCTION À VALIDER]", "Tomate [TRADUCTION À VALIDER]", "Autres cultures [TRADUCTION À VALIDER]"], adviceTitle: "CONSEIL POUR [TRADUCTION À VALIDER]", adviceActions: ["Autre conseil [TRADUCTION À VALIDER]", "Écouter le conseil [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]", "Retour [TRADUCTION À VALIDER]"], provinceTitle: "MÉTÉO AGRICOLE — CHOISISSEZ VOTRE PROVINCE [TRADUCTION À VALIDER]", provinces: ["Kinshasa", "Kongo Central", "Kasaï Central", "Kasaï Oriental", "Kwilu", "Kwango", "Haut-Katanga"], weatherActions: ["Conseil d'irrigation [TRADUCTION À VALIDER]", "Écouter [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]", "Retour [TRADUCTION À VALIDER]"], diseaseTitle: "MALADIES ET RAVAGEURS [TRADUCTION À VALIDER]", diseases: ["Maladies du manioc [TRADUCTION À VALIDER]", "Maladies du maïs [TRADUCTION À VALIDER]", "Ravageurs des cultures [TRADUCTION À VALIDER]", "Prévention [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], calendarTitle: "CALENDRIER AGRICOLE [TRADUCTION À VALIDER]", calendar: ["Période de semis [TRADUCTION À VALIDER]", "Période de plantation [TRADUCTION À VALIDER]", "Période de récolte [TRADUCTION À VALIDER]", "Conseils saisonniers [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], pricesTitle: "PRIX INDICATIFS DU MARCHÉ [TRADUCTION À VALIDER]", priceCrops: ["Manioc [TRADUCTION À VALIDER]", "Maïs [TRADUCTION À VALIDER]", "Riz [TRADUCTION À VALIDER]", "Haricot [TRADUCTION À VALIDER]", "Tomate [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], marketTitle: "TERRA MARCHÉ [TRADUCTION À VALIDER]", market: ["Publier un produit [TRADUCTION À VALIDER]", "Consulter les produits [TRADUCTION À VALIDER]", "Contacter un acheteur [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], assistanceTitle: "ASSISTANCE TERRA AGRI [TRADUCTION À VALIDER]", assistance: ["Poser une question agricole [TRADUCTION À VALIDER]", "Problème d'irrigation [TRADUCTION À VALIDER]", "Problème de culture [TRADUCTION À VALIDER]", "Contacter un agent [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], languageTitle: "CHOISISSEZ VOTRE LANGUE [TRADUCTION À VALIDER]", back: "Retour [TRADUCTION À VALIDER]", exit: "Session USSD terminée. [TRADUCTION À VALIDER]", invalid: "Réponse invalide. [TRADUCTION À VALIDER]", listen: "Écouter [TRADUCTION À VALIDER]", stop: "Arrêter la lecture [TRADUCTION À VALIDER]", speechUnavailable: "Lecture vocale non prise en charge. [TRADUCTION À VALIDER]", recognitionUnavailable: "Dictée vocale non prise en charge. [TRADUCTION À VALIDER]", demoWeather: "Données simulées. [TRADUCTION À VALIDER]", demoPrice: "Prix simulé. [TRADUCTION À VALIDER]", diagnostic: "Diagnostic à confirmer par un spécialiste agricole. [TRADUCTION À VALIDER]", generalCalendar: "Indications à adapter localement. [TRADUCTION À VALIDER]", noListings: "Aucune annonce. [TRADUCTION À VALIDER]", noBuyer: "Service non connecté. [TRADUCTION À VALIDER]", noPublication: "Annonce non publiée. [TRADUCTION À VALIDER]", agentDisclaimer: "Agent fictif — traduction à valider.", helpIntro: "Bonjour ! [TRADUCTION À VALIDER]", enterAnswer: "Votre réponse [TRADUCTION À VALIDER]", send: "Envoyer [TRADUCTION À VALIDER]", speakAdvice: "Écouter le conseil [TRADUCTION À VALIDER]", languageChanged: "Langue modifiée. [TRADUCTION À VALIDER]", sayPrompt: "Votre message [TRADUCTION À VALIDER]", fillField: "Veuillez saisir une réponse. [TRADUCTION À VALIDER]", timeout: "Session expirée. [TRADUCTION À VALIDER]", reset: "Simulation réinitialisée. [TRADUCTION À VALIDER]", voiceNotFound: "Voix non disponible. [TRADUCTION À VALIDER]", speechError: "Lecture vocale impossible. [TRADUCTION À VALIDER]" },
  kg: { welcome: "BIENVENUE SUR TERRA AGRI [TRADUCTION À VALIDER]", slogan: "Mieux informer. Mieux décider. Mieux cultiver. [TRADUCTION À VALIDER]", chooseLanguage: "Choisissez votre langue : [TRADUCTION À VALIDER]", instruction: "Répondez par le numéro correspondant. [TRADUCTION À VALIDER]", mainTitle: "TERRA AGRI – MENU PRINCIPAL [TRADUCTION À VALIDER]", main: ["Conseils agricoles [TRADUCTION À VALIDER]", "Météo agricole [TRADUCTION À VALIDER]", "Maladies et ravageurs [TRADUCTION À VALIDER]", "Calendrier agricole [TRADUCTION À VALIDER]", "Prix du marché [TRADUCTION À VALIDER]", "Vendre mes produits [TRADUCTION À VALIDER]", "Assistance agricole [TRADUCTION À VALIDER]", "Langue [TRADUCTION À VALIDER]", "Quitter [TRADUCTION À VALIDER]"], select: "Tapez le numéro de votre choix. [TRADUCTION À VALIDER]", cropsTitle: "CHOISISSEZ VOTRE CULTURE [TRADUCTION À VALIDER]", crops: ["Manioc [TRADUCTION À VALIDER]", "Maïs [TRADUCTION À VALIDER]", "Riz [TRADUCTION À VALIDER]", "Haricot [TRADUCTION À VALIDER]", "Tomate [TRADUCTION À VALIDER]", "Autres cultures [TRADUCTION À VALIDER]"], adviceTitle: "CONSEIL POUR [TRADUCTION À VALIDER]", adviceActions: ["Autre conseil [TRADUCTION À VALIDER]", "Écouter le conseil [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]", "Retour [TRADUCTION À VALIDER]"], provinceTitle: "MÉTÉO AGRICOLE — CHOISISSEZ VOTRE PROVINCE [TRADUCTION À VALIDER]", provinces: ["Kinshasa", "Kongo Central", "Kasaï Central", "Kasaï Oriental", "Kwilu", "Kwango", "Haut-Katanga"], weatherActions: ["Conseil d'irrigation [TRADUCTION À VALIDER]", "Écouter [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]", "Retour [TRADUCTION À VALIDER]"], diseaseTitle: "MALADIES ET RAVAGEURS [TRADUCTION À VALIDER]", diseases: ["Maladies du manioc [TRADUCTION À VALIDER]", "Maladies du maïs [TRADUCTION À VALIDER]", "Ravageurs des cultures [TRADUCTION À VALIDER]", "Prévention [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], calendarTitle: "CALENDRIER AGRICOLE [TRADUCTION À VALIDER]", calendar: ["Période de semis [TRADUCTION À VALIDER]", "Période de plantation [TRADUCTION À VALIDER]", "Période de récolte [TRADUCTION À VALIDER]", "Conseils saisonniers [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], pricesTitle: "PRIX INDICATIFS DU MARCHÉ [TRADUCTION À VALIDER]", priceCrops: ["Manioc [TRADUCTION À VALIDER]", "Maïs [TRADUCTION À VALIDER]", "Riz [TRADUCTION À VALIDER]", "Haricot [TRADUCTION À VALIDER]", "Tomate [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], marketTitle: "TERRA MARCHÉ [TRADUCTION À VALIDER]", market: ["Publier un produit [TRADUCTION À VALIDER]", "Consulter les produits [TRADUCTION À VALIDER]", "Contacter un acheteur [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], assistanceTitle: "ASSISTANCE TERRA AGRI [TRADUCTION À VALIDER]", assistance: ["Poser une question agricole [TRADUCTION À VALIDER]", "Problème d'irrigation [TRADUCTION À VALIDER]", "Problème de culture [TRADUCTION À VALIDER]", "Contacter un agent [TRADUCTION À VALIDER]", "Menu principal [TRADUCTION À VALIDER]"], languageTitle: "CHOISISSEZ VOTRE LANGUE [TRADUCTION À VALIDER]", back: "Retour [TRADUCTION À VALIDER]", exit: "Session USSD terminée. [TRADUCTION À VALIDER]", invalid: "Réponse invalide. [TRADUCTION À VALIDER]", listen: "Écouter [TRADUCTION À VALIDER]", stop: "Arrêter la lecture [TRADUCTION À VALIDER]", speechUnavailable: "Lecture vocale non prise en charge. [TRADUCTION À VALIDER]", recognitionUnavailable: "Dictée vocale non prise en charge. [TRADUCTION À VALIDER]", demoWeather: "Données simulées. [TRADUCTION À VALIDER]", demoPrice: "Prix simulé. [TRADUCTION À VALIDER]", diagnostic: "Diagnostic à confirmer par un spécialiste agricole. [TRADUCTION À VALIDER]", generalCalendar: "Indications à adapter localement. [TRADUCTION À VALIDER]", noListings: "Aucune annonce. [TRADUCTION À VALIDER]", noBuyer: "Service non connecté. [TRADUCTION À VALIDER]", noPublication: "Annonce non publiée. [TRADUCTION À VALIDER]", agentDisclaimer: "Agent fictif — traduction à valider.", helpIntro: "Bonjour ! [TRADUCTION À VALIDER]", enterAnswer: "Votre réponse [TRADUCTION À VALIDER]", send: "Envoyer [TRADUCTION À VALIDER]", speakAdvice: "Écouter le conseil [TRADUCTION À VALIDER]", languageChanged: "Langue modifiée. [TRADUCTION À VALIDER]", sayPrompt: "Votre message [TRADUCTION À VALIDER]", fillField: "Veuillez saisir une réponse. [TRADUCTION À VALIDER]", timeout: "Session expirée. [TRADUCTION À VALIDER]", reset: "Simulation réinitialisée. [TRADUCTION À VALIDER]", voiceNotFound: "Voix non disponible. [TRADUCTION À VALIDER]", speechError: "Lecture vocale impossible. [TRADUCTION À VALIDER]" }
};

function menuPrincipalLabel() {
  return language === "fr" ? "Menu principal" : "Menu principal [TRADUCTION À VALIDER]";
}

const CROPS = ["Manioc", "Maïs", "Riz", "Haricot", "Tomate", "Autres cultures"];
const ADVICE = {
  "Manioc": [
    ["Privilégiez un sol bien drainé.", "Choisissez des boutures saines.", "Respectez les espacements recommandés.", "Surveillez régulièrement l'humidité du sol."],
    ["Plantez les boutures au début d'une période de pluies régulières.", "Évitez les sols gorgés d'eau.", "Désherbez tôt pour limiter la concurrence."],
    ["Choisissez des variétés adaptées à votre région.", "Inspectez les feuilles pour repérer rapidement les signes de maladie.", "Utilisez des outils propres lors de la préparation des boutures."]
  ],
  "Maïs": [
    ["Semez dans un sol ameubli et bien drainé.", "Respectez l'espacement conseillé localement.", "Désherbez tôt pour aider les jeunes plants."],
    ["Utilisez des semences de bonne qualité.", "Évitez de semer dans un sol trop sec ou détrempé.", "Surveillez les feuilles et les tiges chaque semaine."],
    ["La rotation des cultures peut contribuer à préserver le sol.", "Récoltez lorsque les épis ont atteint leur maturité.", "Stockez les grains dans un endroit sec et aéré."]
  ],
  "Riz": [
    ["Choisissez une variété adaptée à votre système de culture.", "Préparez le terrain selon les conditions locales.", "Surveillez la disponibilité en eau."],
    ["Utilisez des semences sélectionnées et saines.", "Contrôlez régulièrement les mauvaises herbes.", "Demandez conseil sur la gestion de l'eau dans votre zone."],
    ["Inspectez les plants régulièrement pour repérer des symptômes inhabituels.", "Évitez de laisser les grains récoltés dans l'humidité.", "Adaptez les pratiques aux recommandations locales."]
  ],
  "Haricot": [
    ["Choisissez une parcelle bien drainée.", "Semez des graines saines.", "Évitez l'excès d'eau autour des racines."],
    ["Respectez les espacements recommandés pour la variété.", "Désherbez avec soin au début de la croissance.", "Observez les feuilles pour détecter les dégâts précoces."],
    ["La rotation des cultures aide à diversifier la parcelle.", "Récoltez selon la maturité recherchée.", "Faites sécher les gousses avant le stockage."]
  ],
  "Tomate": [
    ["Choisissez un emplacement ensoleillé et un sol drainé.", "Arrosez au pied sans mouiller excessivement le feuillage.", "Tuteurez les plants si nécessaire."],
    ["Utilisez des plants sains.", "Évitez les arrosages excessifs.", "Retirez les parties très abîmées avec un outil propre."],
    ["Inspectez régulièrement les feuilles et les fruits.", "Respectez les espacements conseillés.", "Alternez les cultures lorsque cela est possible."]
  ],
  "Autres cultures": [
    ["Choisissez une variété adaptée au climat et au sol de votre région.", "Utilisez des semences ou plants sains.", "Demandez conseil à un technicien agricole local."],
    ["Observez régulièrement vos cultures.", "Adaptez l'arrosage à la météo et au type de sol.", "Tenez compte des recommandations agricoles locales."]
  ]
};

const WEATHER_DEMO = {
  "Kinshasa": [27, 78, 65], "Kongo Central": [26, 74, 58], "Kasaï Central": [25, 70, 42],
  "Kasaï Oriental": [26, 73, 48], "Kwilu": [27, 81, 69], "Kwango": [28, 76, 55], "Haut-Katanga": [24, 62, 30]
};
const PRICE_DEMO = {
  "Manioc": "25 000 FC / kg", "Maïs": "3 500 FC / kg", "Riz": "4 500 FC / kg",
  "Haricot": "5 000 FC / kg", "Tomate": "2 800 FC / kg"
};
const PROVINCES = ["Kinshasa", "Kongo Central", "Kasaï Central", "Kasaï Oriental", "Kwilu", "Kwango", "Haut-Katanga"];

const content = document.getElementById("ussd-content");
const submitButton = document.getElementById("submit-button");
const submitIcon = document.getElementById("submit-icon");
const backButton = document.getElementById("back-button");
const hangupButton = document.getElementById("hangup-button");
const keypad = document.getElementById("keypad");
const toast = document.getElementById("toast");
const voiceSelect = document.getElementById("voice-language");
const voiceStatus = document.getElementById("voice-status");

let language = "fr";
let sessionActive = false;
let currentScreen = null;
let history = [];
let timeoutHandle = null;
let toastHandle = null;
let recognition = null;
let lastSpeechText = "";
let speechEnabled = false;
let lastMissingVoiceNotice = "";
let sale = {};
let listings = [];
let adviceIndex = 0;

function tr(key) {
  return (TEXT[language] && TEXT[language][key]) || TEXT.fr[key] || key;
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, function (char) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastHandle);
  toastHandle = setTimeout(function () { toast.classList.remove("visible"); }, 3500);
}

function optionsFor(labels) {
  return labels.map(function (label, index) { return { value: String(index + 1), label: label }; });
}

function showScreen(screen, push) {
  if (push && currentScreen) history.push(currentScreen);
  currentScreen = screen;
  renderScreen();
}

function makeScreen(id, title, lines, options, extra) {
  return Object.assign({ id: id, title: title, lines: lines || [], options: options || [] }, extra || {});
}

function renderScreen() {
  if (!sessionActive || !currentScreen) return;
  const screen = currentScreen;
  const lines = screen.lines || [];
  const optionMarkup = (screen.options || []).map(function (option) {
    return '<button class="ussd-option" type="button" data-choice="' + esc(option.value) + '"><b>' + esc(option.value) + '.</b><span>' + esc(option.label) + '</span></button>';
  }).join("");
  const responseConfig = screen.input || { label: tr("enterAnswer"), placeholder: "1", inputmode: "numeric" };
  const textInput = screen.id === "ended"
    ? '<div class="response-form"><label for="ussd-input">Recomposez *543# pour recommencer</label><input id="ussd-input" class="ussd-input" type="text" inputmode="text" autocomplete="off" placeholder="*543#"><div class="voice-inline"><button type="button" data-action="call">Composer le code</button></div></div>'
    : '<div class="response-form"><label for="response-input">' + esc(responseConfig.label) + '</label><input id="response-input" type="text" autocomplete="off" ' + (responseConfig.inputmode ? 'inputmode="' + esc(responseConfig.inputmode) + '"' : "") + ' placeholder="' + esc(responseConfig.placeholder || "") + '"><div class="voice-inline"><button type="button" data-action="dictate">🎙 Dictée vocale</button><button type="button" data-action="send">' + esc(tr("send")) + '</button></div></div>';
  const error = screen.error ? '<p class="ussd-error">' + esc(screen.error) + '</p>' : "";
  content.innerHTML = '<div class="ussd-dialog"><h2>' + esc(screen.title) + '</h2>' +
    lines.map(function (line) {
      const lineText = typeof line === "string" ? line : line.text;
      const lineKind = typeof line === "string" ? "" : line.kind;
      return '<p class="' + (lineKind === "disclaimer" ? "disclaimer" : "") + '">' + esc(lineText) + '</p>';
    }).join("") +
    (optionMarkup ? '<div class="ussd-options">' + optionMarkup + '</div>' : "") + error + textInput + '</div>';
  submitIcon.textContent = screen.id === "ended" ? "⌕" : "➤";
  backButton.disabled = history.length === 0;
  hangupButton.disabled = screen.id === "ended";
  if (screen.id === "ended") {
    const dialInput = document.getElementById("ussd-input");
    dialInput.focus();
    dialInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") startCall();
    });
  } else {
    const responseInput = document.getElementById("response-input");
    responseInput.focus();
    responseInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") sendResponse(responseInput.value);
    });
  }
  if (screen.id === "advice") lastSpeechText = lines.map(function (line) { return typeof line === "string" ? line : line.text; }).join(" ");
  else lastSpeechText = [screen.title].concat(lines.map(function (line) { return typeof line === "string" ? line : line.text; })).concat((screen.options || []).map(function (option) { return option.value + ". " + option.label; })).join(". ");
  content.scrollTop = 0;
  if (speechEnabled && screen.speak !== false) speak(lastSpeechText);
  resetSessionTimeout();
}

function showDialer() {
  sessionActive = false;
  currentScreen = null;
  history = [];
  clearTimeout(timeoutHandle);
  content.innerHTML = '<div class="dialer-view"><p class="dialer-label">Saisissez le code du service</p><label class="sr-only" for="ussd-input">Code USSD ou réponse</label><input id="ussd-input" class="ussd-input" type="text" inputmode="text" autocomplete="off" placeholder="*543#" aria-describedby="dialer-hint"><p class="dialer-hint" id="dialer-hint">Composez <strong>*543#</strong> pour commencer</p><div class="dialer-banner"><span>🌿</span><span><b>Des services agricoles pour tous</b><small>Mieux informer. Mieux décider. Mieux cultiver.</small></span></div></div>';
  const dialInput = document.getElementById("ussd-input");
  dialInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") startCall();
  });
  submitIcon.textContent = "⌕";
  backButton.disabled = true;
  hangupButton.disabled = true;
  lastSpeechText = "Composez " + SERVICE_CODE + " pour démarrer le service Terra Agri.";
}

function resetSessionTimeout() {
  clearTimeout(timeoutHandle);
  if (!sessionActive || currentScreen.id === "ended") return;
  timeoutHandle = setTimeout(function () {
    history = [];
    currentScreen = makeScreen("ended", tr("exit"), [tr("timeout")], []);
    renderScreen();
    sessionActive = false;
    hangupButton.disabled = true;
    backButton.disabled = true;
  }, SESSION_TIMEOUT_MS);
}

function startCall() {
  const dialInput = document.getElementById("ussd-input");
  if (!dialInput || dialInput.value.trim() !== SERVICE_CODE) {
    showToast("Code incorrect. Composez " + SERVICE_CODE + ".");
    return;
  }
  sessionActive = true;
  history = [];
  clearTimeout(timeoutHandle);
  showScreen(makeScreen("connecting", "TERRA AGRI", ["Connexion au service TERRA AGRI..."], [], { speak: false }), false);
  window.setTimeout(function () {
    if (!sessionActive || !currentScreen || currentScreen.id !== "connecting") return;
    showScreen(makeScreen("language", tr("welcome"), [tr("slogan"), tr("chooseLanguage"), tr("instruction")], optionsFor(LANGUAGES.map(function (item) { return item.name; })), { autospeak: true }), false);
  }, 850);
}

function mainMenu() {
  showScreen(makeScreen("main", tr("mainTitle"), [tr("select")], optionsFor(tr("main"))));
}

function returnToMain() {
  history = [];
  mainMenu();
}

function goBack() {
  if (history.length) {
    currentScreen = history.pop();
    renderScreen();
  } else if (sessionActive) {
    endSession();
  }
}

function endSession() {
  clearTimeout(timeoutHandle);
  sessionActive = false;
  history = [];
  currentScreen = makeScreen("ended", tr("exit"), [], []);
  sessionActive = true;
  renderScreen();
  sessionActive = false;
  backButton.disabled = true;
  hangupButton.disabled = true;
}

function setError(message) {
  currentScreen.error = message;
  renderScreen();
  const responseInput = document.getElementById("response-input");
  if (responseInput) responseInput.focus();
}

function responseInputValue() {
  const field = document.getElementById("response-input");
  return field ? field.value.trim() : "";
}

function sendResponse(value) {
  if (!sessionActive || !currentScreen) return;
  const response = String(value).trim();
  if (!response) {
    setError(tr("fillField"));
    return;
  }
  clearTimeout(timeoutHandle);
  if (currentScreen.input) {
    handleTextEntry(response);
    return;
  }
  if (!/^\d+$/.test(response)) {
    setError(tr("invalid"));
    return;
  }
  const allowed = (currentScreen.options || []).some(function (option) { return option.value === response; });
  if (!allowed) {
    setError(tr("invalid"));
    return;
  }
  handleChoice(response);
}

function handleChoice(choice) {
  const screen = currentScreen;
  const number = Number(choice);
  switch (screen.id) {
    case "language":
      language = LANGUAGES[number - 1].id;
      voiceSelect.value = LANGUAGES[number - 1].speech;
      mainMenu();
      return;
    case "main":
      if (number === 1) showScreen(makeScreen("crops", tr("cropsTitle"), [], optionsFor(tr("crops"))), true);
      else if (number === 2) showScreen(makeScreen("provinces", tr("provinceTitle"), [tr("demoWeather")], optionsFor(tr("provinces"))), true);
      else if (number === 3) showScreen(makeScreen("diseases", tr("diseaseTitle"), [tr("diagnostic")], optionsFor(tr("diseases"))), true);
      else if (number === 4) showScreen(makeScreen("calendar", tr("calendarTitle"), [tr("generalCalendar")], optionsFor(tr("calendar"))), true);
      else if (number === 5) showScreen(makeScreen("prices", tr("pricesTitle"), [tr("demoPrice")], optionsFor(tr("priceCrops"))), true);
      else if (number === 6) showScreen(makeScreen("market", tr("marketTitle"), [], optionsFor(tr("market"))), true);
      else if (number === 7) showScreen(makeScreen("assistance", tr("assistanceTitle"), [tr("helpIntro")], optionsFor(tr("assistance"))), true);
      else if (number === 8) showScreen(makeScreen("languageChange", tr("languageTitle"), [], optionsFor(LANGUAGES.map(function (item) { return item.name; }))), true);
      else endSession();
      return;
    case "crops":
      showAdvice(CROPS[number - 1], 0, true);
      return;
    case "advice":
      if (number === 1) showAdvice(screen.crop, (screen.adviceIndex + 1) % ADVICE[screen.crop].length, true);
      else if (number === 2) speak(lastSpeechText);
      else if (number === 3) returnToMain();
      else goBack();
      return;
    case "provinces":
      showWeather(PROVINCES[number - 1], true);
      return;
    case "weather":
      if (number === 1) showScreen(makeScreen("irrigation", "CONSEIL D'IRRIGATION", ["Vérifiez l'humidité du sol avant d'arroser.", "Évitez l'irrigation pendant les fortes pluies.", tr("generalCalendar")], [], { autospeak: true }), true);
      else if (number === 2) speak(lastSpeechText);
      else if (number === 3) returnToMain();
      else goBack();
      return;
    case "diseases":
      handleDiseaseChoice(number);
      return;
    case "calendar":
      showCalendarInfo(number);
      return;
    case "prices":
      if (number === 6) returnToMain();
      else showPrice(CROPS[number - 1], true);
      return;
    case "market":
      if (number === 1) startSale(true);
      else if (number === 2) showListings(true);
      else if (number === 3) showScreen(makeScreen("buyer", "CONTACTER UN ACHETEUR", [tr("noBuyer")], optionsFor([tr("back"), menuPrincipalLabel()])), true);
      else returnToMain();
      return;
    case "assistance":
      handleAssistanceChoice(number);
      return;
    case "languageChange":
      language = LANGUAGES[number - 1].id;
      voiceSelect.value = LANGUAGES[number - 1].speech;
      mainMenu();
      return;
    case "diseaseInfo":
    case "calendarInfo":
    case "priceInfo":
    case "weather":
    case "irrigation":
    case "listings":
    case "buyer":
    case "faq":
    case "agentReply":
      handleGenericBack(number);
      return;
    case "saleComplete":
      if (number === 1) returnToMain();
      else goBack();
      return;
    default:
      setError(tr("invalid"));
  }
}

function handleGenericBack(number) {
  if (number === 1) goBack();
  else if (number === 2) returnToMain();
}

function showAdvice(crop, index, push) {
  adviceIndex = index;
  const advice = ADVICE[crop][index];
  showScreen(makeScreen("advice", tr("adviceTitle") + " " + crop.toUpperCase(), advice, optionsFor(tr("adviceActions")), { crop: crop, adviceIndex: index, autospeak: false }), push);
}

function showWeather(province, push) {
  const data = WEATHER_DEMO[province];
  const lines = [
    "Température : " + data[0] + " °C",
    "Humidité : " + data[1] + " %",
    "Probabilité de pluie : " + data[2] + " %",
    "Conseil : Une pluie est possible. Vérifiez les conditions locales avant de programmer l'irrigation.",
    tr("demoWeather")
  ];
  showScreen(makeScreen("weather", "MÉTÉO — " + province.toUpperCase(), lines, optionsFor(tr("weatherActions")), { autospeak: false }), push);
}

function handleDiseaseChoice(number) {
  if (number === 5) { returnToMain(); return; }
  const contentByChoice = {
    1: ["Signes possibles : feuilles déformées ou décolorées, croissance ralentie, taches ou dépérissement.", "Utilisez du matériel végétal sain et évitez de déplacer des plants suspects."],
    2: ["Signes possibles : taches sur les feuilles, jaunissement, tiges abîmées ou épis mal formés.", "Inspectez régulièrement les plants et privilégiez des semences saines."],
    3: ["Observez les feuilles, les tiges et les fruits : trous, déjections, dégâts ou flétrissement peuvent signaler un ravageur.", "Repérez les insectes et demandez conseil avant tout traitement."],
    4: ["Utilisez des semences saines, nettoyez les outils et observez les cultures régulièrement.", "Respectez les rotations adaptées et sollicitez un technicien en cas de doute."]
  };
  showScreen(makeScreen("diseaseInfo", tr("diseaseTitle"), contentByChoice[number].concat([tr("diagnostic")]), optionsFor([tr("back"), menuPrincipalLabel()]), { autospeak: false }), true);
}

function showCalendarInfo(number) {
  const calendarContent = {
    1: "Le semis dépend des pluies, de la culture, de la variété et de votre zone.",
    2: "La plantation se planifie selon la saison locale et l'humidité du sol.",
    3: "Récoltez selon la maturité de la culture et les usages locaux.",
    4: "Observez les pluies et l'état du sol. Adaptez les travaux à votre région."
  };
  if (number === 5) { returnToMain(); return; }
  showScreen(makeScreen("calendarInfo", tr("calendarTitle"), [calendarContent[number], tr("generalCalendar")], optionsFor([tr("back"), menuPrincipalLabel()])), true);
}

function showPrice(crop, push) {
  showScreen(makeScreen("priceInfo", crop.toUpperCase(), [
    "Prix indicatif : " + (PRICE_DEMO[crop] || "À compléter"),
    "Marché : Kinshasa",
    "Date : Donnée de démonstration",
    tr("demoPrice")
  ], optionsFor([tr("back"), menuPrincipalLabel()])), push);
}

function startSale(push) {
  sale = {};
  askSaleField(0, push);
}

const SALE_FIELDS = [
  { key: "product", label: "Nom du produit" },
  { key: "quantity", label: "Quantité disponible" },
  { key: "price", label: "Prix souhaité" },
  { key: "location", label: "Localisation" },
  { key: "phone", label: "Numéro de téléphone", inputmode: "tel" }
];
function askSaleField(index, push) {
  if (index >= SALE_FIELDS.length) { finishSale(true); return; }
  const field = SALE_FIELDS[index];
  showScreen(makeScreen("saleInput", "TERRA MARCHÉ — " + field.label.toUpperCase(), ["Étape " + (index + 1) + " sur " + SALE_FIELDS.length], [], {
    input: { label: field.label, placeholder: "Saisissez " + field.label.toLowerCase(), inputmode: field.inputmode || "text" },
    saleIndex: index
  }), push);
}
function handleTextEntry(value) {
  if (currentScreen.id === "saleInput") {
    const index = currentScreen.saleIndex;
    if (index === 4 && !/^[+\d][\d\s()+-]{5,}$/.test(value)) {
      setError("Saisissez un numéro de téléphone valide pour la démonstration.");
      return;
    }
    sale[SALE_FIELDS[index].key] = value;
    askSaleField(index + 1, true);
  } else if (currentScreen.id === "questionInput" || currentScreen.id === "agentInput") {
    const isAgent = currentScreen.id === "agentInput";
    const reply = isAgent
      ? "Bonjour, merci de nous avoir contactés. Veuillez demander conseil à un spécialiste agricole de votre région pour un accompagnement adapté."
      : answerQuestion(value);
    showScreen(makeScreen(isAgent ? "agentReply" : "faq", isAgent ? "AGENT TERRA AGRI" : "ASSISTANCE TERRA AGRI", [
      isAgent ? "Votre message : " + value : reply,
      isAgent ? tr("agentDisclaimer") : tr("diagnostic")
    ], optionsFor([tr("back"), menuPrincipalLabel()])), true);
  }
}
function finishSale(push) {
  listings.push(Object.assign({}, sale));
  showScreen(makeScreen("saleComplete", "RÉCAPITULATIF DE L'ANNONCE", [
    "Produit : " + sale.product, "Quantité : " + sale.quantity, "Prix souhaité : " + sale.price,
    "Localisation : " + sale.location, "Téléphone : " + sale.phone, tr("noPublication")
  ], optionsFor([menuPrincipalLabel(), tr("back")])), push);
}
function showListings(push) {
  const lines = listings.length ? listings.map(function (listing, index) {
    return (index + 1) + ". " + listing.product + " — " + listing.quantity + " — " + listing.price + " — " + listing.location;
  }) : [tr("noListings")];
  showScreen(makeScreen("listings", "PRODUITS DE DÉMONSTRATION", lines.concat([tr("noPublication")]), optionsFor([tr("back"), menuPrincipalLabel()])), push);
}
function answerQuestion(message) {
  const lower = message.toLocaleLowerCase("fr");
  if (lower.includes("eau") || lower.includes("irrig") || lower.includes("arros")) return "Arrosez selon l'humidité du sol et les besoins de votre culture. Évitez l'excès d'eau. Un technicien local peut vous guider.";
  if (lower.includes("feuille") || lower.includes("maladie") || lower.includes("tache")) return "Notez les symptômes, la culture et leur évolution. Isolez les plants très atteints si possible et demandez confirmation à un spécialiste.";
  if (lower.includes("maïs") || lower.includes("mais")) return "Choisissez des semences adaptées à votre zone, désherbez tôt et surveillez vos plants régulièrement.";
  if (lower.includes("manioc")) return "Utilisez des boutures saines, un sol bien drainé et des variétés adaptées à votre région.";
  return "Merci pour votre question. Décrivez la culture et les symptômes à un spécialiste agricole local pour recevoir une orientation adaptée.";
}
function handleAssistanceChoice(number) {
  if (number === 5) { returnToMain(); return; }
  if (number === 1) {
    showScreen(makeScreen("questionInput", "POSER UNE QUESTION", [], [], { input: { label: tr("sayPrompt"), placeholder: "Ex. : mes feuilles jaunissent" } }), true);
  } else if (number === 2) {
    showScreen(makeScreen("faq", "CONSEIL — IRRIGATION", ["Vérifiez l'humidité du sol avant d'arroser et tenez compte des pluies récentes.", "Évitez de laisser l'eau stagner autour des racines.", tr("diagnostic")], optionsFor([tr("back"), menuPrincipalLabel()])), true);
  } else if (number === 3) {
    showScreen(makeScreen("faq", "CONSEIL — PROBLÈME DE CULTURE", ["Observez et notez les symptômes, leur emplacement et leur évolution.", tr("diagnostic")], optionsFor([tr("back"), menuPrincipalLabel()])), true);
  } else {
    showScreen(makeScreen("agentInput", "CONTACTER UN AGENT", ["Agent Terra Agri : « Bonjour, merci de nous avoir contactés. Veuillez préciser votre culture et le problème rencontré afin que nous puissions vous orienter. »", tr("agentDisclaimer")], [], {
      input: { label: "Votre message", placeholder: "Décrivez votre culture et le problème" }
    }), true);
  }
}

function startDictation() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { showToast(tr("recognitionUnavailable")); return; }
  if (recognition) recognition.abort();
  recognition = new SpeechRecognition();
  recognition.lang = voiceSelect.value || LANGUAGES.find(function (item) { return item.id === language; }).speech;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = function (event) {
    const result = event.results && event.results[0] && event.results[0][0];
    if (result) {
      const field = document.getElementById("response-input");
      if (field) { field.value = result.transcript; field.focus(); }
    }
  };
  recognition.onerror = function (event) { showToast("Dictée vocale indisponible : " + event.error + ". Vous pouvez saisir votre réponse."); };
  try { recognition.start(); } catch (error) { showToast("Impossible de démarrer la dictée vocale."); }
}

function speak(text) {
  if (!("speechSynthesis" in window) || !window.SpeechSynthesisUtterance) {
    showToast(tr("speechUnavailable"));
    return;
  }
  const selectedLang = voiceSelect.value;
  const spokenText = (text || lastSpeechText || tr("welcome")).replace(/\s*\[TRADUCTION À VALIDER\]/g, "");
  const voice = findVoice(selectedLang);
  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.lang = voice ? voice.lang : selectedLang;
  if (voice) utterance.voice = voice;
  else {
    const defaultVoice = window.speechSynthesis.getVoices().find(function (item) { return item.default; });
    if (defaultVoice) {
      utterance.voice = defaultVoice;
      utterance.lang = defaultVoice.lang;
    }
  }
  updateVoiceStatus(voice || utterance.voice);
  utterance.onerror = function () { showToast(tr("speechError")); };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  if (!voice && selectedLang !== "fr-FR" && lastMissingVoiceNotice !== selectedLang) {
    lastMissingVoiceNotice = selectedLang;
    showToast(TEXT.fr.translationNotice);
  }
}

function findVoice(lang) {
  if (!("speechSynthesis" in window)) return null;
  const normalized = lang.toLowerCase();
  const baseLanguage = normalized.split("-")[0];
  const voices = window.speechSynthesis.getVoices();
  return voices.find(function (item) { return item.lang.toLowerCase() === normalized; }) ||
    voices.find(function (item) { return item.lang.toLowerCase().startsWith(baseLanguage + "-"); }) || null;
}

function updateVoiceStatus(voice) {
  voiceStatus.textContent = speechEnabled
    ? (voice ? "Lecture active · " + voice.lang : "Lecture active · voix par défaut")
    : (voice ? "Voix disponible · " + voice.name : "Voix du navigateur");
}

function toggleSpeech() {
  if (!("speechSynthesis" in window) || !window.SpeechSynthesisUtterance) {
    showToast(tr("speechUnavailable"));
    return;
  }
  speechEnabled = !speechEnabled;
  const button = document.getElementById("speak-current");
  button.setAttribute("aria-pressed", String(speechEnabled));
  button.setAttribute("aria-label", speechEnabled ? "Désactiver la lecture automatique" : "Activer la lecture automatique");
  button.title = speechEnabled ? "Lecture automatique activée — cliquer pour arrêter" : "Activer la lecture automatique des menus";
  if (speechEnabled) {
    speak(lastSpeechText);
  } else {
    window.speechSynthesis.cancel();
    updateVoiceStatus(null);
  }
}

function updateTime() {
  const now = new Date();
  document.getElementById("status-time").textContent = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

submitButton.addEventListener("click", function () {
  if (sessionActive) sendResponse(responseInputValue());
  else startCall();
});
backButton.addEventListener("click", goBack);
hangupButton.addEventListener("click", endSession);
document.getElementById("reset-button").addEventListener("click", function () {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (recognition) recognition.abort();
  showDialer();
  document.getElementById("ussd-input").value = "";
  showToast(tr("reset"));
});
document.getElementById("speak-current").addEventListener("click", toggleSpeech);
voiceSelect.addEventListener("change", function () {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  updateVoiceStatus(null);
  if (speechEnabled && currentScreen) speak(lastSpeechText);
});
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = function () {
    if (currentScreen) updateVoiceStatus(findVoice(voiceSelect.value));
  };
}
keypad.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-key]");
  if (!button) return;
  const responseField = sessionActive ? document.getElementById("response-input") : document.getElementById("ussd-input");
  if (!responseField) return;
  responseField.value += button.dataset.key;
  responseField.focus();
});
content.addEventListener("click", function (event) {
  const choice = event.target.closest("[data-choice]");
  if (choice) {
    sendResponse(choice.dataset.choice);
    return;
  }
  const action = event.target.closest("[data-action]");
  if (!action) return;
  if (action.dataset.action === "dictate") startDictation();
  if (action.dataset.action === "send") sendResponse(responseInputValue());
  if (action.dataset.action === "call") startCall();
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && sessionActive) goBack();
});

updateTime();
window.setInterval(updateTime, 30000);
showDialer();
