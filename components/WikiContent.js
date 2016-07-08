var Pages = [
  {
    page: "LDAP",
    data: [
      {
        key: "0",
        title: "",
        content: `Lightweight Directory Access Protocol (LDAP) est à l'origine un protocole permettant l'interrogation et la modification des services d'annuaire. Ce protocole repose sur TCP/IP. Il a cependant évolué pour représenter une norme pour les systèmes d'annuaires, incluant un modèle de données, un modèle de nommage, un modèle fonctionnel basé sur le protocole LDAP, un modèle de sécurité et un modèle de réplication. C'est une structure arborescente dont chacun des nœuds est constitué d'attributs associés à leurs valeurs. LDAP est moins complexe que le modèle X.500 édicté par l'UIT-T.
        Le nommage des éléments constituant l'arbre (racine, branches, feuilles) reflète souvent le modèle politique, géographique ou d'organisation de la structure représentée. La tendance actuelle est d'utiliser le nommage DNS pour les éléments de base de l'annuaire (racine et premières branches, domain components ou dc=…). Les branches plus profondes de l'annuaire peuvent représenter des unités d'organisation ou des groupes (organizational units ou ou=…), des personnes (common name ou cn=… voire user identifier uid=…). L'assemblage de tous les composants (du plus précis au plus général) d'un nom forme son distinguished name`
      },
      {
        key: "1",
        title: "Origine et influences",
        content: `LDAP a été initialement conçu pour accéder de manière légère aux annuaires X.500. Ces annuaires étaient traditionnellement interrogés à travers le protocole X.500 Directory Access Protocol (DAP) qui nécessitait l'utilisation de la pile de protocoles du modèle OSI. L'utilisation d'une passerelle LDAP/DAP permettait d'accéder à un serveur DAP en étant sur un réseau TCP/IP. Ce modèle d'annuaire est dérivé de DIXIE et de Directory Assistance Service.
        L'apparition d'annuaires LDAP natifs (standalone LDAP directory) a suivi rapidement, tout comme celle de serveurs prenant en charge à la fois DAP et LDAP. Les annuaires sont devenus populaires dans les entreprises car il n'était plus nécessaire de déployer un réseau OSI. De nos jours, les protocoles d'accès aux annuaires X.500 (incluant DAP) peuvent être directement utilisés sur TCP/IP.
        Le protocole fut créé par Tim Howes de l'Université du Michigan, Steve Kille du ISODE et Wengyik Yeong de Performance Systems International en 1993. Les développements qui suivirent, furent menés par l’Internet Engineering Task Force (IETF).
        Initialement le protocole avait pour nom Lightweight Directory Browsing Protocol (LDBP), car il ne permettait que la recherche de données. Il fut renommé lors de l'ajout de nouvelles possibilités (ajout, modification).
        LDAP a influencé un certain nombre de protocoles d'Internet, incluant les dernières versions de X.500 : XML Enabled Directory (XED), Directory Services Markup Language (DSML), Service Provisioning Markup Language (SPML), et Service Location Protocol (SLP).`
      },
      {
        key: "2",
        title: "Vue d'ensemble",
        content: `Un client débute une session LDAP en se connectant sur le port TCP 389 du serveur. Le client envoie ensuite des requêtes d'opération au serveur. Le serveur envoie des réponses en retour. À part quelques exceptions, le client n'a pas besoin d'attendre de réponse du serveur pour envoyer de nouvelles requêtes, et le serveur peut envoyer ses réponses dans n'importe quel ordre.
        Une fois la connexion au serveur établie, les opérations classiques sont :
        Start TLS : utilisation de la couche Transport Layer Security (TLS) pour sécuriser la connexion ;
        Bind : indique la version du protocole utilisée, et authentifie l'utilisateur. Il est possible de faire un bind anonyme en ne fournissant ni nom d'utilisateur ni mot de passe ;
        Search : recherche dans l'annuaire et rapatriement des données ;
        Compare : test qui détermine si une entrée contient un attribut avec une valeur donnée ;
        Add : ajout d'une nouvelle entrée ;
        Delete : suppression d'une entrée ;
        Modify : modification d'une entrée ;
        Modify DN : déplacement ou renommage d'une entrée ;
        Abandon : annulation d'une requête précédente ;
        Extended Operation : opération qui permet de définir d'autres opérations ;
        Unbind : clôture la connexion.
        De plus, le serveur peut envoyer des notifications non sollicitées Unsolicited Notifications qui ne sont pas des réponses à des requêtes, par exemple avant de clôturer une connexion inactive.
        Une méthode pour sécuriser les communications LDAP est d'utiliser un tunnel TLS/SSL. Lors de l'emploi d'URL cet usage est traduit par le nom du protocole ldaps en remplacement de ldap. Le port TCP standard pour ldaps est 636.
        Le protocole LDAP employant la notation ASN.1 et les messages sont codés avec le format binaire BER. Cependant il utilise une représentation textuelle pour un certain nombre d'attributs et de types d'ASN.1`
      },
      {
        key: "3",
        title: "Structure de l'annuaire",
        content: `Les annuaires LDAP suivent le modèle X.500 et son architecture nativement multi-tenant :
        Un annuaire est un arbre d'entrées.
        Une entrée est constituée d'un ensemble d'attributs.
        Un attribut possède un nom, un type et une ou plusieurs valeurs.
        Les attributs sont définis dans des schémas.
        Le fait que les attributs puissent être multi-valués est une différence majeure entre les annuaires LDAP et les SGBDR. De plus, si un attribut n'a pas de valeur, il est purement et simplement absent de l'entrée.
        Chaque entrée a un identifiant unique, le Distinguished Name (DN). Il est constitué à partir de son Relative Distinguished Name (RDN) suivi du DN de son parent. C'est une définition récursive. On peut faire l'analogie avec une autre structure arborescente, les systèmes de fichiers ; le DN étant le chemin absolu et le RDN le chemin relatif à un répertoire. En règle générale le RDN d'une entrée représentant une personne est l'attribut uid.
        Un serveur contient un sous-arbre dont la racine est une entrée spécifique et tous ses enfants, par exemple : "dc=example,dc=org". Les serveurs peuvent également contenir des références vers d'autres serveurs, ainsi l'accès à une entrée ("ou=un service,dc=example,dc=org") peut retourner une référence (referral) à un autre serveur qui contient le sous-arbre voulu. Le client peut alors contacter (automatiquement ou pas) l'autre serveur. Certains serveurs prennent en charge le chaînage (chaining) qui permet au serveur d'interroger d'autres serveurs pour renvoyer l'information voulue au client.
        Les résultats renvoyés par le serveur ne sont pas triés, que ce soit pour les entrées, pour les attributs des entrées ou pour les valeurs des attributs.`
      },
      {
        key: "4",
        title: "Opérations",
        content: `Le client donne à chaque requête un identifiant Message ID, le serveur répond à la requête avec le même identifiant. La réponse inclut un code de résultat numérique indiquant l'état de la requête (succès, échec, …). La réponse inclut également les données éventuelles qui peuvent résulter d'une recherche. Il inclut aussi un code ID.
        Bind (authentification)[modifier | modifier le code]
        L'opération bind authentifie le client au sein du serveur. Le simple bind envoie le DN de l'utilisateur et son mot de passe en clair, c'est pourquoi la connexion doit être sécurisée par TLS. Le serveur vérifie le mot de passe en le comparant avec l'attribut userPassword (en général) de l'entrée correspondante. La valeur de l'attribut contenant le mot de passe commence avec le nom entre accolades de l'algorithme utilisé pour coder le mot de passe (par exemple : userPassword: {md5}aGZh5…).
        Le bind anonyme, c'est-à-dire sans fournir d'identifiant ni de mot de passe, met la connexion dans un état anonyme. Dès lors le client ne pourra plus effectuer certaines opérations sur tout ou une partie de l'annuaire, en fonction des ACL mises en place.
        Le SASL bind permet d'utiliser d'autres mécanismes d'authentification : Kerberos, certificat client, etc.
        L'étape de bind permet également au client et au serveur de se mettre d'accord sur la version du protocole à utiliser. En général la version 3 est utilisée. Il est même possible au serveur de refuser de communiquer avec des clients dans un protocole inférieur au sien.
        StartTLS
        L'opération StartTLS établit une connexion sécurisée entre le client et le serveur en utilisant la technique TLS, héritière de SSL. Cette sécurisation opère sur deux points : la confidentialité (un tiers ne peut pas comprendre l'échange) et l'intégrité des données (les données sont validées par une signature). Pendant la négociation TLS, le serveur envoie son certificat X.509 au client pour prouver son identité. Le client peut répondre en envoyant son certificat mais l'identification du client est facultative. Il est généralement possible de configurer clients et serveurs pour savoir si les certificats sont facultatifs ou essentiels.
        Les serveurs prennent en charge généralement le protocole non standard « LDAPS » (LDAP over SSL). Ce protocole utilise le port 636 contrairement au TLS qui utilise le port 389 (le même que le LDAP non sécurisé). Le protocole LDAPS diffère du LDAP sur deux points :
        à la connexion, le client et le serveur établissent une connexion TLS avant que n'importe quelle autre commande LDAP ne soit envoyée (sans envoyer d'opération StartTLS),
        la connexion LDAPS doit être fermée lors de la clôture de TLS (alors qu'avec StartTLS, il est possible de passer d'une connexion sécurisée à une connexion non sécurisée, et inversement).
        Search et Compare
        L'opération Search est utilisée à la fois pour faire une recherche et rapatrier des entrées. Ses paramètres sont :
        baseObject : le DN (Distinguished Name) de l'entrée à partir de laquelle effectuer la recherche ;
        scope : base pour l'entrée baseObject elle-même, one pour effectuer une recherche au niveau des entrées immédiatement rattachées au baseObject, sub pour une recherche dans le sous-arbre de l'entrée ;
        filter : les critères qui déterminent si une entrée fait partie des résultats ou non, par exemple (&(objectClass=person)(|(givenName=John)(mail=john*))) - recherche les personnes qui ont pour prénom John ou dont le courriel commence par john ;
        derefAliases : indique si la recherche doit suivre les alias dans les entrées (entrée qui font référence à d'autres entrées) ;
        attributes : liste des attributs à ramener à l'issue de la recherche ;
        sizeLimit : limitation du nombre d'entrées ramenées à l'issue de la recherche ;
        timeLimit : limitation du délai de recherche, exprimé en secondes ;
        typesOnly : ne renvoie que les types d'attribut et non les valeurs.
        Le serveur renvoie les entrées qui correspondent, suivies par le code retour de la commande (code de retour).
        L'opération Compare prend en argument un DN, un nom d'attribut et une valeur d'attribut, puis vérifie si l'entrée correspondante contient bien un attribut ayant cette valeur.
        Remarque : Il n'existe pas d'opération du type Read. C'est l'opération Search qui est utilisée pour l'accès direct à une entrée. Dans ce cas, le paramètre baseObject est le DN de l'entrée que l'on veut lire, et le paramètre scope est utilisé avec la valeur base.
        Mise à jour
        Les opérations de mise à jour Add (ajout), Delete (suppression), Modify (modification) prennent en argument le DN de l'entrée à mettre à jour.
        La modification a besoin en plus de la liste des attributs à modifier ainsi que la modification à apporter : suppression de l'attribut ou de certaines valeurs de l'attribut (les attributs peuvent être multi-valués), ajout d'une valeur, remplacement d'une valeur.
        L'ajout d'une entrée peut également contenir une liste d'attributs et de valeurs à associer avec l'entrée.
        La modification de DN (déplacement/renommage) prend en argument le RDN de l'entrée et, de façon facultative, le DN du nouveau parent, ainsi qu'un marqueur qui indique s'il faut ou non effacer l'ancien RDN. La prise en charge du renommage d'un sous-arbre en entier dépend des serveurs.
        Une opération de mise à jour est atomique, c'est-à-dire que les autres opérations verront soit la nouvelle entrée soit l'ancienne. Toutefois, le protocole LDAP ne définit pas de principe de transaction, ce qui permet à plusieurs clients de modifier une entrée en même temps. Cependant, les serveurs peuvent utiliser des extensions pour le supporter.
        Opérations étendues
        Les opérations étendues sont des opérations génériques qui permettent de définir de nouvelles opérations. Par exemple les opérations Cancel, Password Modify et StartTLS.
        Abandon
        L'opération Abandon envoie une requête au serveur pour lui dire d'abandonner une opération en lui fournissant son identifiant. Le serveur n'a pas obligation d'honorer la requête. Malheureusement, l'opération Abandon ainsi que l'abandon effectif d'une opération renvoie une réponse. C'est pourquoi l'opération étendue Cancel a été définie, pour ne pas renvoyer de réponse, mais tous les serveurs ne la prennent pas en charge.
        Unbind
        L'opération Unbind abandonne toute opération en cours et ferme la connexion. Il n'y a aucune réponse. Son nom a des raisons historiques, ce n'est pas l'opération contraire à Bind.
        Les clients peuvent terminer une session en fermant la connexion, mais il est plus propre d'utiliser Unbind. Le serveur peut ainsi différencier les erreurs réseau des clients discourtois.
        `
      },
      {
        key: "5",
        title: "URI",
        content: `Il existe un format d'URI LDAP, mais tous les clients ne le prennent pas en charge. Les serveurs l'utilisent pour indiquer aux clients les références vers d'autres serveurs. Le format est le suivant :
        ldap://hôte:port/DN?attributs?profondeur?filtre?extension
        avec :
        DN : le DN à partir duquel effectuer la recherche ;
        attributs : liste contenant les attributs à renvoyer, séparés par des virgules ;
        profondeur : base (par défaut), one ou sub pour la profondeur de la recherche ;
        filtre : le filtre de recherche ;
        extension : extensions éventuelles du format d'URL LDAP.
        Comme dans tous les URI, les caractères spéciaux doivent être échappés en suivant l'algorithme prévu par la RFC 3986.
        On peut aussi rencontrer des URI utilisant le schéma non normalisé « ldaps ».
        Par exemple :
        ldap://ldap.example.com/cn=John%20Doe,dc=example,dc=com
        retourne tous les attributs de l'entrée « John Doe »,
        ldap:///dc=example,dc=com??sub?(givenName=John)
        recherche l'entrée ayant comme prénom « John » dans l'annuaire à partir de la racine.`
      },
      {
        key: "6",
        title: "Schéma",
        content: `Le contenu des entrées d'un annuaire LDAP est régi par des schémas.
Les schémas définissent les types d'attribut que les entrées d'un annuaire peuvent contenir. La définition d'un attribut inclut une syntaxe, la plupart des attributs non binaires dans LDAPv3 utilisent la syntaxe des chaînes de caractères UTF-8. Par exemple, l'attribut mail peut contenir "utilisateur@example.org", l'attribut jpegPhoto peut contenir une photographie au format binaire JPEG, l'attribut member peut contenir le DN d'une entrée de l'annuaire.
La définition d'un attribut indique également si l'attribut est mono-valué ou multi-valué, selon quelles règles se feront les recherches/comparaisons (sensible à la casse ou pas, recherche de sous-chaîne ou pas).
Les schémas définissent des classes d'objets. Chaque entrée de l'annuaire doit avoir au moins une valeur pour l'attribut objectClass, qui soit une classe d'objets définie dans les schémas. Généralement, l'attribut objectClass est multi-valué et contient la classe top ainsi qu'un certain nombre d'autres classes.
Tout comme dans la programmation orientée objet, les classes permettent de décrire un objet en lui associant des attributs. Les classes LDAP représentent des personnes, des organisations... Le fait qu'une entrée appartienne à une classe (donc que l'attribut objectClass contienne le nom de la classe) lui permet d'utiliser les attributs de cette classe. Certains attributs sont obligatoires et d'autres facultatifs. Par exemple, si l'entrée utilise la classe person, elle doit avoir obligatoirement une valeur pour les attributs sn et cn, et peut avoir facultativement une valeur pour les attributs userPassword et telephoneNumber. Les entrées ayant généralement plusieurs classes, la différenciation entre attributs obligatoires et facultatifs peut être assez complexe.
Les éléments d'un schéma ont un nom et un identifiant unique nommé Object identifier (OID).
Beaucoup de serveurs exposent les schémas de l'annuaire comme des entrées LDAP accessibles à partir du DN cn=schema. Il est possible pour les administrateurs de définir leur propre schéma en plus des schémas standard.
`
      },
      {
        key: "7",
        title: "Variations d'un serveur à l'autre",
        content: `Certaines opérations possibles sont laissées à l'appréciation du développeur ou de l'administrateur. Par exemple, le stockage des données n'est pas spécifié par le protocole. Le serveur peut utiliser des fichiers à plat, ou un SGBDR, ou bien être simplement une passerelle vers un autre serveur. Les contrôles d'accès (ACL) ne sont pas non plus normalisés, bien qu'un usage commun émerge.
LDAP est un protocole extensible, ce qui provoque l'apparition de nouvelles opérations sur certains serveurs et pas sur d'autres. Par exemple, le tri des résultats.`
      },
      {
        key: "8",
        title: "Utilisation",
        content: `L'intérêt principal de LDAP est la normalisation de l'authentification. Il est très facile de programmer un module d'authentification utilisant LDAP à partir d'un langage possédant une API LDAP. C'est l'opération Bind qui permet d'authentifier un utilisateur. De plus en plus d'applications Web possèdent un module d'authentification prenant en charge LDAP.
Sur les systèmes GNU/Linux récents, on voit de plus en plus l'adoption d'une base de données utilisant LDAP à la place des fichiers à plat passwd et shadow. Les données peuvent être accédées par les modules PAM et NSS. `
      },
    ]
  },
  {
    page: "KDC",
    data: [
      {
        key: "0",
        title: "",
        content: `En cryptographie, un centre de distribution de clé (KDC, Key Distribution Center) est une partie d'un système de chiffrement qui permet de réduire les risques inhérents à l'échange de clés.`,
      },
      {
        key: "1",
        title: "Principe de base",
        content: `En général, le KDC authentifie le client, puis lui transmet une nouvelle clé via une cryptographie symétrique, ensuite le client utilisera la clé pour échanger des informations via une Cryptographie asymétrique.
En général (mais pas toujours), le KDC partage une clé avec chacun de ses clients.`,
      },
    ]
  },
  {
    page: "Kerberos",
    data: [
      {
        key: "0",
        title: "",
        content: `Kerberos est un protocole d'authentification réseau qui repose sur un mécanisme de clés secrètes (chiffrement symétrique) et l'utilisation de tickets, et non de mots de passe en clair, évitant ainsi le risque d'interception frauduleuse des mots de passe des utilisateurs. Créé au Massachusetts Institute of Technology, il porte le nom grec de Cerbère, gardien des Enfers (Κέρϐερος). Kerberos a d'abord été mis en œuvre sur des systèmes Unix.`,
      },
      {
        key: "1",
        title: "Fonctionnement",
        content: `Dans un réseau simple utilisant Kerberos, on distingue plusieurs entités :
le client (C), a sa propre clé secrète {\displaystyle K_{C}} K_{{C}}
le serveur (S), dispose aussi d'une clé secrète {\displaystyle K_{S}} K_{{S}}
le service d'émission de tickets (TGS pour Ticket-Granting Service), a une clé secrète {\displaystyle K_{TGS}} K_{{TGS}} et connaît la clé secrète {\displaystyle K_{S}} K_{{S}} du serveur
le centre de distribution de clés (KDC pour Key Distribution Center), connaît les clés secrètes {\displaystyle K_{C}} K_{{C}} et {\displaystyle K_{TGS}} K_{{TGS}}
Le client C veut accéder à un service proposé par le serveur S.
La première étape pour le client consiste à s'identifier auprès du centre de distribution de clés (KDC). Le client a une clé secrète {\displaystyle K_{C}} K_{{C}}, celle-ci est également connue par le serveur de distribution. Le client envoie son nom au serveur de distribution et lui indique le TGS qui l'intéresse. Après vérification sur l'identité du client (cette partie dépend des implémentations, certains serveurs utilisent des mots de passe à usage unique), le serveur de distribution lui envoie alors un ticket {\displaystyle T_{TGS}} T_{{TGS}}. Ce ticket autorise le client à faire des requêtes auprès du TGS.
Ce ticket {\displaystyle T_{TGS}} T_{{TGS}} est chiffré par le serveur de distribution avec la clé du TGS ( {\displaystyle K_{TGS}} K_{{TGS}}). Il contient notamment des informations sur le client mais également la clé utilisée pour établir la communication entre le client et le TGS. Cette clé de session, nous la noterons {\displaystyle K_{C,TGS}} K_{{C,TGS}}. Le client reçoit également cette clé de session {\displaystyle K_{C,TGS}} K_{{C,TGS}}, elle a toutefois été chiffrée avec la clé secrète {\displaystyle K_{C}} K_{{C}} du client.
À ce stade, le client possède un ticket {\displaystyle T_{TGS}} T_{{TGS}} (qu'il ne peut pas déchiffrer) et une clé {\displaystyle K_{C,TGS}} K_{{C,TGS}}.
La deuxième étape est l'envoi par le client d'une demande de ticket auprès du TGS. Cette requête contient un identifiant (des informations sur le client ainsi que la date d'émission) chiffré avec la clé de session {\displaystyle K_{C,TGS}} K_{{C,TGS}} (qui est trouvée par le client en déchiffrant les informations reçues depuis le serveur de distribution avec sa clé secrète). Le client envoie aussi le ticket qui lui avait été transmis par le serveur de distribution.
Le TGS reçoit alors son ticket et il peut le déchiffrer avec sa clé secrète {\displaystyle K_{TGS}} K_{{TGS}}. Il récupère le contenu du ticket (la clé de session) et peut ainsi déchiffrer l'identifiant que lui a envoyé le client et vérifier l'authenticité des requêtes. Le TGS peut alors émettre un ticket d'accès au serveur. Ce ticket est chiffré grâce à la clé secrète du serveur {\displaystyle K_{S}} K_{{S}}. Le TGS envoie aussi ce ticket chiffré avec la clé secrète du serveur {\displaystyle K_{S}} K_{{S}} et la clé de session {\displaystyle K_{C,S}} K_{{C,S}} chiffrée à l'aide de la clé {\displaystyle K_{C,TGS}} K_{{C,TGS}} au client pour les communications entre le serveur final et le client.
La troisième étape est le dialogue entre le client et le serveur. Le client reçoit le ticket pour accéder au serveur ainsi que l'information chiffrée contenant la clé de session entre lui et le serveur. Il déchiffre cette dernière grâce à la clé {\displaystyle K_{C,TGS}} K_{{C,TGS}}. Il génère un nouvel identifiant qu'il chiffre avec {\displaystyle K_{C,S}} K_{{C,S}} et qu'il envoie au serveur accompagné du ticket.
Le serveur vérifie que le ticket est valide (il le déchiffre avec sa clé secrète {\displaystyle K_{S}} K_{{S}}) et autorise l'accès au service si tout est correct.`,
      },
      {
        key: "2",
        title: "Sécurité",
        content: `Une fois qu'un client s'est identifié, celui-ci obtient un ticket (généralement, un fichier texte - mais son contenu peut aussi être stocké dans une zone de mémoire sécurisée). Le ticket joue le rôle d'une carte d'identité à péremption assez courte, huit heures généralement. Si nécessaire, celui-ci peut être annulé prématurément. Sous les systèmes Kerberos comme celui du MIT, ou de Heimdal, cette procédure est généralement appelée via la commande « kdestroy ».
La sécurité de Kerberos repose sur la sécurité des différentes machines qu'il utilise. Une attaque sur le serveur de clés serait dramatique car elle pourrait permettre à l'attaquant de s'emparer des clés privées des clients et donc de se faire passer pour eux. Un autre problème qui pourrait survenir sur la machine du client est le vol des tickets. Ils pourraient être utilisés par une tierce personne pour accéder aux services offerts par les serveurs (si la clé entre le client et le serveur est connue).
L'expiration du ticket permet de limiter les problèmes liés au vol des tickets. De plus, un ticket peut contenir l'adresse IP du client et le ticket n'est alors valable que s'il est employé depuis cette IP (ce champ est toutefois optionnel dans Kerberos, qui peut tout à fait être utilisé sur un réseau attribuant dynamiquement les IP au travers de DHCP). Une attaque sur les identifiants échouera car Kerberos leur ajoute un élément. Cela évite les attaques par renvoi d'identifiants qui auraient été interceptés. Les serveurs conservent l'historique des communications précédentes et peuvent facilement détecter un envoi frauduleux.
L'avantage de Kerberos est de limiter le nombre d'identifiants et de pouvoir travailler sur un réseau non-sécurisé. Les identifications sont uniquement nécessaires pour l'obtention de nouveaux tickets d'accès au TGS.
Actuellement, deux implémentations de Kerberos version 5 existent pour OpenLDAP :
MIT krb5
Heimdal`,
      },
      {
        key: "3",
        title: "Similitudes",
        content: `Le fonctionnement de Kerberos est calqué sur ce que pratiquent les ouvreuses des théâtres et des cinémas :
au moment d'accéder à la séance de cinéma, le client paye son ticket qui l'authentifie.
au point d'accès de la salle, l'ouvreuse déchire le ticket en deux, conserve une partie et laisse l'autre au client.
en cas de contrôle, on constate si les deux morceaux du ticket se recollent.
la durée de vie du ticket est limitée à une séance.
`,
      },
    ]
  },
  {
    page: "Docker",
    data: [
      {
        key: "0",
        title: "",
        content: `Docker est un logiciel libre qui automatise le déploiement d'applications dans des conteneurs logiciels. Selon la firme de recherche sur l'industrie 451 Research, « Docker est un outil qui peut empaqueter une application et ses dépendances dans un conteneur virtuel, qui pourra être exécuté sur n'importe quel serveur Linux ». Ceci permet d'étendre la flexibilité et la portabilité d’exécution d'une application, que ce soit sur la machine locale, un cloud privé ou public, une machine nue, etc.
Docker étend le format de conteneur Linux standard, LXC, avec une API de haut niveau fournissant une solution de virtualisation qui exécute les processus de façon isolée. Docker utilise LXC, cgroups, et le noyau Linux lui-même2. Contrairement aux machines virtuelles traditionnelles, un conteneur Docker n'inclut pas de système d'exploitation, s'appuyant sur les fonctionnalités du système d’exploitation fournies par l'infrastructure sous-jacente.
La technologie de conteneur de Docker peut être utilisée pour étendre des systèmes distribués de façon à ce qu'ils s'exécutent de manière autonome depuis une seule machine physique ou une seule instance par nœud. Cela permet aux nœuds d'être déployés au fur et à mesure que les ressources sont disponibles, offrant un déploiement transparent et similaire aux PaaS pour des systèmes comme Apache Cassandra, Riak ou d'autres systèmes distribués.`,
      },
      {
        key: "1",
        title: "Vue d’ensemble",
        content: `Docker permet la mise en œuvre de containers s'exécutant en isolation, via une API de haut-niveau. Construit sur des capacités du noyau Linux (surtout les cgroups et espaces de nommage), un container Docker, à l'opposé de machines virtuelles traditionnelles, ne requiert aucun système d'exploitation séparé et n'en fournit aucun. Il s'appuie plutôt sur les fonctionnalités du noyau et utilise l'isolation de ressources (CPU, mémoire, I/O, connexions réseau etc.) ainsi que des espaces de noms séparés pour isoler le système d'exploitation tel que vu par l'application. Docker accède aux capacités de virtualisation du noyau Linux, soit directement à travers la bibliothèque libcontainer (disponible depuis Docker 0.9), soit indirectement via libcrt, LXC (Linux Containers) ou systemd-nspawn.
Utiliser Docker pour créer et gérer des containers peut simplifier la mise en œuvre de systèmes distribués en permettant à de multiples applications, tâches de fond et autres processus de s'exécuter de façon autonome sur une seule machine physique ou à travers un éventail de machines virtuelles. Ceci permet de déployer des nœuds en tant que ressources sur besoin, fournissant ainsi une plateforme de déploiement de style PAAS et la scalabilité de systèmes tels Apache Cassandra, MongoDB ou Riak, ainsi que la simplification de la création et maintenance de queues de tâches ou autres systèmes distribués.`,
      },
      {
        key: "3",
        title: "Histoire",
        content: `Docker a été développé par Solomon Hykes pour un projet interne de dotCloud, une société proposant une plate-forme en tant que service, avec les contributions d'Andrea Luzzardi et Francois-Xavier Bourlet, également employés de dotCloud. Docker est une évolution basée sur les technologies propriétaires de dotCloud, elles-mêmes construites sur des projets open source.
Docker a été distribué en tant que projet open source à partir de mars 2013.
Au 18 novembre 2013, le projet a été mis en favoris plus de 7 300 fois sur GitHub (14e projet le plus populaire), avec plus de 900 forks et 200 contributeurs.
Au 9 mai 2014, le projet a été mis en favoris plus de 11 000 fois sur GitHub, avec plus de 1 900 forks et 420 contributeurs.
En octobre 2015, le projet a été mis en favoris plus de 25 000 fois sur GitHub, avec plus de 6 500 forks et 1 100 contributeurs.`,
      },
    ]
  },
  {
    page: "Munin",
    data: [
      {
        key: "0",
        title: "",
        content: `Munin est un outil de surveillance système et réseau open source sous licence publique générale GNU1. Il s'appuie sur l'outil RRDTool.
Il présente ses résultats sous forme de graphiques disponibles via une interface web. Il possède une structure de plugins particulièrement simple qui permet d'enrichir rapidement l'outil. Des plugins sont actuellement disponibles pour les systèmes d'exploitation suivants: GNU/Linux, FreeBSD, NetBSD, Solaris et AIX.
L'architecture du système Munin est constituée d'un serveur principal appelé Munin-master, récupérant les informations à intervalle régulier et de plusieurs nœuds appelés Munin-node. Le nœud doit être installé sur le(s) serveur(s) à surveiller.`,
      },
      {
        key: "1",
        title: "Fonctionnalités",
        content: `De base, Munin propose la surveillance de plusieurs composantes de la machine :
Apache : accès, volume de données ;
disque : accès, usage, latence, uptime ;
réseau : nombre d'erreurs, trafic, requêtes ;
NFS ;
serveur d'impression ;
processus : nombre, activité ;
capteurs : températures de la machine (Disque dur, processeur) ;
système : usage processeur, charge...
Munin est cependant modulable : on peut y intégrer facilement la surveillance de n'importe quelle application. Une liste de plugins est disponible sur le site officiel du logiciel. Munin est capable d'envoyer des notifications par courriel lorsque la valeur de la source d'un des plugins dépasse une limite définie par l'administrateur, le rendant très utile à n'importe quel administrateur réseau qui souhaite avoir toujours un œil sur ses machines.`,
      },
    ]
  },
  {
    page: "Puppet",
    data: [
      {
        key: "0",
        title: "",
        content: `Puppet est un logiciel libre permettant la gestion de la configuration de serveurs esclaves (GNU/Linux, Mac OS X et Windows).
Puppet est écrit à l'aide du langage de programmation Ruby et est diffusé sous licence Apache 2.0 pour les versions récentes de Puppet. Les versions plus anciennes (inférieures à la V2.7.0), sont sous licence GPL.
La version libre permet de gérer les déploiements système et applicatif, et accepte les machines virtuelles type Amazon EC2.
La version commerciale de Puppet permet en plus, de gérer les machines virtuelles VMware, d'avoir une interface graphique de gestion, d'automatiser et d'orchestrer les déploiements, d'avoir une plateforme de développement pour tous les environnements, de gérer individuellement les droits utilisateurs.
Pour utiliser plus facilement Puppet, il est conseillé d'utiliser Geppetto, qui permet d'éviter des soucis de syntaxe.`,
      },
    ]
  },
  {
    page: "kdc",
    data: [
      {
        key: "0",
        title: "",
        content: `En cryptographie, un centre de distribution de clé (KDC, Key Distribution Center) est une partie d'un système de chiffrement qui permet de réduire les risques inhérents à l'échange de clés.`,
      },
      {
        key: "1",
        title: "Principe de base",
        content: `En général, le KDC authentifie le client, puis lui transmet une nouvelle clé via une cryptographie symétrique, ensuite le client utilisera la clé pour échanger des informations via une Cryptographie asymétrique.
En général (mais pas toujours), le KDC partage une clé avec chacun de ses clients.`,
      },
    ]
  },
  {
    page: "kdc",
    data: [
      {
        key: "0",
        title: "",
        content: `En cryptographie, un centre de distribution de clé (KDC, Key Distribution Center) est une partie d'un système de chiffrement qui permet de réduire les risques inhérents à l'échange de clés.`,
      },
      {
        key: "1",
        title: "Principe de base",
        content: `En général, le KDC authentifie le client, puis lui transmet une nouvelle clé via une cryptographie symétrique, ensuite le client utilisera la clé pour échanger des informations via une Cryptographie asymétrique.
En général (mais pas toujours), le KDC partage une clé avec chacun de ses clients.`,
      },
    ]
  },
]
export default (Pages = Pages)
