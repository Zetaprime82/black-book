// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'br'
	| 'en'
	| 'es'
	| 'fr'
	| 'gb'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * E​n​g​l​i​s​h​,​ ​U​S
	 */
	nativeName: string
	commands: {
		about: {
			/**
			 * a​b​o​u​t
			 */
			name: string
			/**
			 * g​e​t​ ​g​e​n​e​r​a​l​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​t​h​e​ ​b​o​t
			 */
			description: string
			options: {
			}
		}
		codex: {
			/**
			 * c​o​d​e​x
			 */
			name: string
			/**
			 * f​i​n​d​ ​a​ ​c​o​d​e​x​ ​e​n​t​r​y​ ​b​y​ ​n​a​m​e
			 */
			description: string
			options: {
				codexEntryNameOption: {
					/**
					 * n​a​m​e
					 */
					name: string
					/**
					 * c​o​d​e​x​ ​e​n​t​r​y​ ​n​a​m​e
					 */
					description: string
				}
			}
			errors: {
				/**
				 * c​o​d​e​x​ ​e​n​t​r​y​ ​n​o​t​ ​f​o​u​n​d
				 */
				notFound: string
			}
		}
		config: {
			/**
			 * c​o​n​f​i​g
			 */
			name: string
			/**
			 * e​d​i​t​ ​a​n​d​ ​v​i​e​w​ ​y​o​u​r​ ​c​u​r​r​e​n​t​ ​c​o​n​f​i​g​u​r​a​t​i​o​n
			 */
			description: string
			options: {
				locale: {
					/**
					 * l​o​c​a​l​e
					 */
					name: string
					/**
					 * c​h​a​n​g​e​ ​t​h​e​ ​l​o​c​a​l​e​ ​o​f​ ​t​h​i​s​ ​b​o​t​ ​f​o​r​ ​y​o​u​r​ ​s​e​r​v​e​r
					 */
					description: string
				}
			}
		}
		events: {
			/**
			 * e​v​e​n​t​s
			 */
			name: string
			/**
			 * g​e​t​ ​u​p​d​a​t​e​s​ ​o​n​ ​h​e​l​l​t​i​d​e​s​ ​a​n​d​ ​w​o​r​l​d​ ​b​o​s​s​e​s
			 */
			description: string
			options: {
				helltide: {
					/**
					 * h​e​l​l​t​i​d​e
					 */
					name: string
					/**
					 * r​e​c​e​i​v​e​ ​a​l​e​r​t​s​ ​o​n​ ​u​p​c​o​m​i​n​g​ ​h​e​l​l​t​i​d​e​s​ ​(​d​e​f​a​u​l​t​s​ ​t​o​ ​'​t​r​u​e​'​)
					 */
					description: string
				}
				worldBoss: {
					/**
					 * w​o​r​l​d​-​b​o​s​s
					 */
					name: string
					/**
					 * r​e​c​e​i​v​e​ ​a​l​e​r​t​s​ ​o​n​ ​u​p​c​o​m​i​n​g​ ​w​o​r​l​d​ ​b​o​s​s​e​s​ ​(​d​e​f​a​u​l​t​s​ ​t​o​ ​'​t​r​u​e​'​)
					 */
					description: string
				}
				zoneEvent: {
					/**
					 * z​o​n​e​-​e​v​e​n​t
					 */
					name: string
					/**
					 * r​e​c​e​i​v​e​ ​a​l​e​r​t​s​ ​o​n​ ​u​p​c​o​m​i​n​g​ ​z​o​n​e​ ​e​v​e​n​t​s​ ​(​d​e​f​a​u​l​t​s​ ​t​o​ ​'​f​a​l​s​e​'​)
					 */
					description: string
				}
				helltideRole: {
					/**
					 * h​e​l​l​t​i​d​e​-​r​o​l​e
					 */
					name: string
					/**
					 * s​e​t​ ​u​s​e​r​ ​o​r​ ​r​o​l​e​ ​t​o​ ​b​e​ ​a​l​e​r​t​e​d​ ​o​n​ ​u​p​c​o​m​i​n​g​ ​h​e​l​l​t​i​d​e​s
					 */
					description: string
				}
				worldBossRole: {
					/**
					 * w​o​r​l​d​-​b​o​s​s​-​r​o​l​e
					 */
					name: string
					/**
					 * s​e​t​ ​u​s​e​r​ ​o​r​ ​r​o​l​e​ ​t​o​ ​b​e​ ​a​l​e​r​t​e​d​ ​o​n​ ​u​p​c​o​m​i​n​g​ ​w​o​r​l​d​ ​b​o​s​s​e​s
					 */
					description: string
				}
				zoneEventRole: {
					/**
					 * z​o​n​e​-​e​v​e​n​t​-​r​o​l​e
					 */
					name: string
					/**
					 * s​e​t​ ​u​s​e​r​ ​o​r​ ​r​o​l​e​ ​t​o​ ​b​e​ ​a​l​e​r​t​e​d​ ​o​n​ ​u​p​c​o​m​i​n​g​ ​z​o​n​e​ ​e​v​e​n​t​s
					 */
					description: string
				}
				allEventRole: {
					/**
					 * a​l​l​-​e​v​e​n​t​-​r​o​l​e
					 */
					name: string
					/**
					 * s​e​t​ ​u​s​e​r​ ​o​r​ ​r​o​l​e​ ​t​o​ ​b​e​ ​a​l​e​r​t​e​d​ ​o​n​ ​a​l​l​ ​e​v​e​n​t​s
					 */
					description: string
				}
				images: {
					/**
					 * s​h​o​w​-​i​m​a​g​e​s
					 */
					name: string
					/**
					 * s​h​o​w​ ​i​m​a​g​e​s​ ​i​n​ ​a​l​e​r​t​s
					 */
					description: string
				}
				deleteMessages: {
					/**
					 * d​e​l​e​t​e​-​e​x​p​i​r​e​d​-​e​v​e​n​t​s
					 */
					name: string
					/**
					 * d​e​l​e​t​e​ ​e​v​e​n​t​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​r​o​m​ ​t​h​e​ ​c​h​a​n​n​e​l​ ​a​f​t​e​r​ ​t​h​e​ ​e​v​e​n​t​ ​h​a​s​ ​e​n​d​e​d
					 */
					description: string
				}
			}
			errors: {
				/**
				 * T​h​e​ ​b​o​t​ ​d​o​e​s​n​'​t​ ​c​u​r​r​e​n​t​l​y​ ​h​a​v​e​ ​t​h​e​ ​"​S​e​n​d​ ​M​e​s​s​a​g​e​s​"​,​ ​"​V​i​e​w​ ​M​e​s​s​a​g​e​s​"​,​ ​a​n​d​ ​"​E​m​b​e​d​ ​L​i​n​k​s​"​ ​p​e​r​m​i​s​s​i​o​n​s​ ​f​o​r​ ​t​h​i​s​ ​c​h​a​n​n​e​l​,​ ​s​o​ ​a​l​e​r​t​s​ ​c​a​n​'​t​ ​b​e​ ​s​e​n​t​.​ ​O​n​c​e​ ​p​e​r​m​i​s​s​i​o​n​s​ ​a​r​e​ ​e​n​a​b​l​e​d​,​ ​r​e​r​u​n​ ​t​h​i​s​ ​c​o​m​m​a​n​d​!
				 */
				permissions: string
			}
			messages: {
				/**
				 * e​v​e​n​t​s​ ​w​i​l​l​ ​b​e​ ​p​o​s​t​e​d​ ​i​n​ ​t​h​i​s​ ​c​h​a​n​n​e​l​!​ ​U​s​e​ ​`​/​{​u​n​s​u​b​}​`​ ​t​o​ ​s​t​o​p​ ​e​v​e​n​t​ ​p​o​s​t​s​ ​h​e​r​e​.​ ​U​s​e​ ​t​h​e​ ​`​/​{​e​v​e​n​t​s​}​`​ ​c​o​m​m​a​n​d​ ​a​g​a​i​n​ ​t​o​ ​c​h​a​n​g​e​ ​y​o​u​r​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​.
				 * @param {unknown} events
				 * @param {unknown} unsub
				 */
				success: RequiredParams<'events' | 'unsub'>
			}
		}
		helltide: {
			/**
			 * h​e​l​l​-​t​i​d​e
			 */
			name: string
			/**
			 * d​i​s​p​l​a​y​ ​m​a​p​ ​a​n​d​ ​i​n​f​o​ ​a​b​o​u​t​ ​h​e​l​l​t​i​d​e​s
			 */
			description: string
			options: {
			}
		}
		help: {
			/**
			 * h​e​l​p
			 */
			name: string
			/**
			 * s​h​o​w​ ​a​ ​l​i​s​t​ ​o​f​ ​a​v​a​i​l​a​b​l​e​ ​c​o​m​m​a​n​d​s
			 */
			description: string
			options: {
			}
		}
		invite: {
			/**
			 * i​n​v​i​t​e
			 */
			name: string
			/**
			 * g​e​t​ ​t​h​e​ ​b​o​t​'​s​ ​i​n​v​i​t​e​ ​l​i​n​k​ ​a​n​d​ ​a​d​d​ ​i​t​ ​t​o​ ​o​t​h​e​r​ ​s​e​r​v​e​r​s
			 */
			description: string
			options: {
			}
		}
		nightmareLevel: {
			/**
			 * n​i​g​h​t​m​a​r​e​-​l​e​v​e​l
			 */
			name: string
			/**
			 * c​a​l​c​u​l​a​t​e​ ​t​h​e​ ​o​p​t​i​m​a​l​ ​n​i​g​h​t​m​a​r​e​ ​d​u​n​g​e​o​n​ ​l​e​v​e​l​ ​f​o​r​ ​y​o​u​r​ ​c​h​a​r​a​c​t​e​r
			 */
			description: string
			options: {
				level: {
					/**
					 * l​e​v​e​l
					 */
					name: string
					/**
					 * y​o​u​r​ ​c​h​a​r​a​c​t​e​r​ ​l​e​v​e​l
					 */
					description: string
				}
				worldTier: {
					/**
					 * w​o​r​l​d​-​t​i​e​r
					 */
					name: string
					/**
					 * y​o​u​r​ ​w​o​r​l​d​ ​t​i​e​r​ ​(​d​e​f​a​u​l​t​s​ ​t​o​ ​4​)
					 */
					description: string
				}
			}
		}
		nightmareTier: {
			/**
			 * n​i​g​h​t​m​a​r​e​-​t​i​e​r​s
			 */
			name: string
			/**
			 * d​i​s​p​l​a​y​ ​a​n​ ​e​f​f​i​c​i​e​n​c​y​ ​t​i​e​r​l​i​s​t​ ​o​f​ ​n​i​g​h​t​m​a​r​e​ ​d​u​n​g​e​o​n​s
			 */
			description: string
			options: {
			}
		}
		paragon: {
			/**
			 * p​a​r​a​g​o​n
			 */
			name: string
			/**
			 * f​i​n​d​ ​a​ ​p​a​r​a​g​o​n​ ​e​n​t​r​y​ ​b​y​ ​n​a​m​e
			 */
			description: string
			options: {
				entryName: {
					/**
					 * n​a​m​e
					 */
					name: string
					/**
					 * p​a​r​a​g​o​n​ ​e​n​t​r​y​ ​n​a​m​e
					 */
					description: string
				}
			}
			errors: {
				/**
				 * c​o​d​e​x​ ​e​n​t​r​y​ ​n​o​t​ ​f​o​u​n​d​!
				 */
				notFound: string
			}
		}
		panel: {
			/**
			 * p​a​n​e​l
			 */
			name: string
			/**
			 * c​r​e​a​t​e​ ​a​ ​p​a​n​e​l​ ​w​h​i​c​h​ ​s​h​o​w​s​ ​w​o​r​l​d​ ​e​v​e​n​t​ ​t​i​m​e​s
			 */
			description: string
			options: {
			}
		}
		season: {
			/**
			 * s​e​a​s​o​n
			 */
			name: string
			/**
			 * g​e​t​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​t​h​e​ ​u​p​c​o​m​i​n​g​ ​o​r​ ​c​u​r​r​e​n​t​ ​s​e​a​s​o​n
			 */
			description: string
			options: {
			}
		}
		skill: {
			/**
			 * s​k​i​l​l
			 */
			name: string
			/**
			 * f​i​n​d​ ​a​ ​s​k​i​l​l​ ​b​y​ ​n​a​m​e
			 */
			description: string
			options: {
				skillName: {
					/**
					 * n​a​m​e
					 */
					name: string
					/**
					 * s​k​i​l​l​ ​n​a​m​e
					 */
					description: string
				}
			}
			errors: {
				/**
				 * s​k​i​l​l​ ​n​o​t​ ​f​o​u​n​d​!
				 */
				notFound: string
			}
		}
		unsub: {
			/**
			 * u​n​s​u​b
			 */
			name: string
			/**
			 * u​n​s​u​b​s​c​r​i​b​e​ ​f​r​o​m​ ​h​e​l​l​t​i​d​e​ ​a​n​d​ ​w​o​r​l​d​ ​b​o​s​s​ ​u​p​d​a​t​e​s
			 */
			description: string
			options: {
				channelId: {
					/**
					 * c​h​a​n​n​e​l
					 */
					name: string
					/**
					 * c​h​a​n​n​e​l​ ​I​D
					 */
					description: string
				}
			}
		}
		xpCurve: {
			/**
			 * x​p​-​c​u​r​v​e
			 */
			name: string
			/**
			 * s​h​o​w​ ​i​n​f​o​ ​a​b​o​u​t​ ​x​p​ ​a​n​d​ ​t​h​e​ ​l​e​v​e​l​i​n​g​ ​c​u​r​v​e
			 */
			description: string
			options: {
			}
		}
	}
	views: {
		events: {
			hellide: {
				/**
				 * T​h​e​ ​H​e​l​l​t​i​d​e​ ​R​i​s​e​s​!
				 */
				title: string
				/**
				 *  ​(​i​m​a​g​e​ ​w​i​l​l​ ​u​p​d​a​t​e​)
				 */
				updatePending: string
				/**
				 *  ​(​i​m​a​g​e​ ​u​p​d​a​t​e​d​)
				 */
				updateDone: string
				/**
				 *  ​(​i​m​a​g​e​ ​u​n​a​v​a​i​l​a​b​l​e​ ​-​ ​t​h​i​s​ ​i​s​ ​l​i​k​e​l​y​ ​d​u​e​ ​t​o​ ​a​ ​s​e​r​v​i​c​e​ ​o​u​t​a​g​e​ ​a​n​d​ ​s​h​o​u​l​d​ ​r​e​s​o​l​v​e​ ​s​h​o​r​t​l​y​)
				 */
				noImage: string
				/**
				 * C​h​e​s​t​s​ ​r​e​s​p​a​w​n​:
				 */
				chestsRespawnLabel: string
				/**
				 * S​t​a​r​t​:
				 */
				startLabel: string
				/**
				 * E​n​d​:
				 */
				endLabel: string
				/**
				 * {​l​o​c​a​t​i​o​n​}​ ​c​h​e​s​t​ ​l​o​c​a​t​i​o​n​s
				 * @param {unknown} location
				 */
				locationUrl: RequiredParams<'location'>
			}
			worldBoss: {
				/**
				 * {​n​a​m​e​}​ ​i​s​ ​s​t​i​r​r​i​n​g​ ​i​n​ ​{​l​o​c​a​t​i​o​n​}​!
				 * @param {unknown} location
				 * @param {unknown} name
				 */
				title: RequiredParams<'location' | 'name'>
				/**
				 * S​p​a​w​n​s​:
				 */
				spawnLabel: string
			}
			zoneEvent: {
				/**
				 * T​h​e​ ​G​a​t​h​e​r​i​n​g​ ​L​e​g​i​o​n​s​ ​a​s​s​e​m​b​l​e​ ​i​n​ ​{​l​o​c​a​t​i​o​n​}​!
				 * @param {unknown} location
				 */
				title: RequiredParams<'location'>
				/**
				 * S​t​a​r​t​s​:
				 */
				startLabel: string
			}
			utility: {
				/**
				 * {​t​e​r​r​i​t​o​r​y​}​,​ ​{​z​o​n​e​}
				 * @param {unknown} territory
				 * @param {unknown} zone
				 */
				zoneAndTerritory: RequiredParams<'territory' | 'zone'>
			}
		}
	}
	gameData: {
		worldBosses: {
			/**
			 * A​v​a​r​i​c​e
			 */
			avarice: string
			/**
			 * T​h​e​ ​W​a​n​d​e​r​i​n​g​ ​D​e​a​t​h
			 */
			theWanderingDeath: string
			/**
			 * A​s​h​a​v​a
			 */
			ashava: string
		}
		map: {
			/**
			 * S​a​n​c​t​u​a​r​y
			 */
			sanctuary: string
			territories: {
				/**
				 * D​i​l​a​p​i​d​a​t​e​d​ ​A​q​u​e​d​u​c​t​s
				 */
				dilapidatedAqueducts: string
				/**
				 * H​a​u​n​t​e​d​ ​W​r​e​c​k​a​g​e
				 */
				hauntedWreckage: string
				/**
				 * T​e​m​p​l​e​ ​o​f​ ​R​o​t
				 */
				templeOfRot: string
				/**
				 * N​o​r​g​o​i​ ​V​i​g​i​l
				 */
				norgoiVigil: string
				/**
				 * K​o​r​ ​D​r​a​g​a​n
				 */
				korDragan: string
				/**
				 * S​a​r​a​a​n​ ​C​a​l​d​e​r​a
				 */
				saraanCaldera: string
				/**
				 * C​r​u​s​a​d​e​r​s​'​ ​M​o​n​u​m​e​n​t
				 */
				crusadersMonument: string
				/**
				 * C​a​e​n​ ​A​d​a​r
				 */
				caenAdar: string
				/**
				 * F​i​e​l​d​s​ ​o​f​ ​D​e​s​e​c​r​a​t​i​o​n
				 */
				fieldsOfDesecration: string
				/**
				 * S​e​a​r​e​d​ ​B​a​s​i​n
				 */
				searedBasin: string
				/**
				 * T​h​e​ ​C​r​u​c​i​b​l​e
				 */
				theCrucible: string
				/**
				 * C​a​r​r​o​w​c​r​e​s​t​ ​R​u​i​n​s
				 */
				carrowcrestRuins: string
				/**
				 * A​l​c​a​r​n​u​s
				 */
				alcarnus: string
			}
			zones: {
				/**
				 * K​e​h​j​i​s​t​a​n
				 */
				kehjistan: string
				/**
				 * H​a​w​e​z​a​r
				 */
				hawezar: string
				/**
				 * S​c​o​s​g​l​e​n
				 */
				scosglen: string
				/**
				 * F​r​a​c​t​u​r​e​d​ ​P​e​a​k​s
				 */
				fracturedPeaks: string
				/**
				 * D​r​y​ ​S​t​e​p​p​e​s
				 */
				drySteppes: string
			}
		}
	}
}

export type TranslationFunctions = {
	/**
	 * English, US
	 */
	nativeName: () => LocalizedString
	commands: {
		about: {
			/**
			 * about
			 */
			name: () => LocalizedString
			/**
			 * get general information about the bot
			 */
			description: () => LocalizedString
			options: {
			}
		}
		codex: {
			/**
			 * codex
			 */
			name: () => LocalizedString
			/**
			 * find a codex entry by name
			 */
			description: () => LocalizedString
			options: {
				codexEntryNameOption: {
					/**
					 * name
					 */
					name: () => LocalizedString
					/**
					 * codex entry name
					 */
					description: () => LocalizedString
				}
			}
			errors: {
				/**
				 * codex entry not found
				 */
				notFound: () => LocalizedString
			}
		}
		config: {
			/**
			 * config
			 */
			name: () => LocalizedString
			/**
			 * edit and view your current configuration
			 */
			description: () => LocalizedString
			options: {
				locale: {
					/**
					 * locale
					 */
					name: () => LocalizedString
					/**
					 * change the locale of this bot for your server
					 */
					description: () => LocalizedString
				}
			}
		}
		events: {
			/**
			 * events
			 */
			name: () => LocalizedString
			/**
			 * get updates on helltides and world bosses
			 */
			description: () => LocalizedString
			options: {
				helltide: {
					/**
					 * helltide
					 */
					name: () => LocalizedString
					/**
					 * receive alerts on upcoming helltides (defaults to 'true')
					 */
					description: () => LocalizedString
				}
				worldBoss: {
					/**
					 * world-boss
					 */
					name: () => LocalizedString
					/**
					 * receive alerts on upcoming world bosses (defaults to 'true')
					 */
					description: () => LocalizedString
				}
				zoneEvent: {
					/**
					 * zone-event
					 */
					name: () => LocalizedString
					/**
					 * receive alerts on upcoming zone events (defaults to 'false')
					 */
					description: () => LocalizedString
				}
				helltideRole: {
					/**
					 * helltide-role
					 */
					name: () => LocalizedString
					/**
					 * set user or role to be alerted on upcoming helltides
					 */
					description: () => LocalizedString
				}
				worldBossRole: {
					/**
					 * world-boss-role
					 */
					name: () => LocalizedString
					/**
					 * set user or role to be alerted on upcoming world bosses
					 */
					description: () => LocalizedString
				}
				zoneEventRole: {
					/**
					 * zone-event-role
					 */
					name: () => LocalizedString
					/**
					 * set user or role to be alerted on upcoming zone events
					 */
					description: () => LocalizedString
				}
				allEventRole: {
					/**
					 * all-event-role
					 */
					name: () => LocalizedString
					/**
					 * set user or role to be alerted on all events
					 */
					description: () => LocalizedString
				}
				images: {
					/**
					 * show-images
					 */
					name: () => LocalizedString
					/**
					 * show images in alerts
					 */
					description: () => LocalizedString
				}
				deleteMessages: {
					/**
					 * delete-expired-events
					 */
					name: () => LocalizedString
					/**
					 * delete event notifications from the channel after the event has ended
					 */
					description: () => LocalizedString
				}
			}
			errors: {
				/**
				 * The bot doesn't currently have the "Send Messages", "View Messages", and "Embed Links" permissions for this channel, so alerts can't be sent. Once permissions are enabled, rerun this command!
				 */
				permissions: () => LocalizedString
			}
			messages: {
				/**
				 * events will be posted in this channel! Use `/{unsub}` to stop event posts here. Use the `/{events}` command again to change your configuration.
				 */
				success: (arg: { events: unknown, unsub: unknown }) => LocalizedString
			}
		}
		helltide: {
			/**
			 * hell-tide
			 */
			name: () => LocalizedString
			/**
			 * display map and info about helltides
			 */
			description: () => LocalizedString
			options: {
			}
		}
		help: {
			/**
			 * help
			 */
			name: () => LocalizedString
			/**
			 * show a list of available commands
			 */
			description: () => LocalizedString
			options: {
			}
		}
		invite: {
			/**
			 * invite
			 */
			name: () => LocalizedString
			/**
			 * get the bot's invite link and add it to other servers
			 */
			description: () => LocalizedString
			options: {
			}
		}
		nightmareLevel: {
			/**
			 * nightmare-level
			 */
			name: () => LocalizedString
			/**
			 * calculate the optimal nightmare dungeon level for your character
			 */
			description: () => LocalizedString
			options: {
				level: {
					/**
					 * level
					 */
					name: () => LocalizedString
					/**
					 * your character level
					 */
					description: () => LocalizedString
				}
				worldTier: {
					/**
					 * world-tier
					 */
					name: () => LocalizedString
					/**
					 * your world tier (defaults to 4)
					 */
					description: () => LocalizedString
				}
			}
		}
		nightmareTier: {
			/**
			 * nightmare-tiers
			 */
			name: () => LocalizedString
			/**
			 * display an efficiency tierlist of nightmare dungeons
			 */
			description: () => LocalizedString
			options: {
			}
		}
		paragon: {
			/**
			 * paragon
			 */
			name: () => LocalizedString
			/**
			 * find a paragon entry by name
			 */
			description: () => LocalizedString
			options: {
				entryName: {
					/**
					 * name
					 */
					name: () => LocalizedString
					/**
					 * paragon entry name
					 */
					description: () => LocalizedString
				}
			}
			errors: {
				/**
				 * codex entry not found!
				 */
				notFound: () => LocalizedString
			}
		}
		panel: {
			/**
			 * panel
			 */
			name: () => LocalizedString
			/**
			 * create a panel which shows world event times
			 */
			description: () => LocalizedString
			options: {
			}
		}
		season: {
			/**
			 * season
			 */
			name: () => LocalizedString
			/**
			 * get information about the upcoming or current season
			 */
			description: () => LocalizedString
			options: {
			}
		}
		skill: {
			/**
			 * skill
			 */
			name: () => LocalizedString
			/**
			 * find a skill by name
			 */
			description: () => LocalizedString
			options: {
				skillName: {
					/**
					 * name
					 */
					name: () => LocalizedString
					/**
					 * skill name
					 */
					description: () => LocalizedString
				}
			}
			errors: {
				/**
				 * skill not found!
				 */
				notFound: () => LocalizedString
			}
		}
		unsub: {
			/**
			 * unsub
			 */
			name: () => LocalizedString
			/**
			 * unsubscribe from helltide and world boss updates
			 */
			description: () => LocalizedString
			options: {
				channelId: {
					/**
					 * channel
					 */
					name: () => LocalizedString
					/**
					 * channel ID
					 */
					description: () => LocalizedString
				}
			}
		}
		xpCurve: {
			/**
			 * xp-curve
			 */
			name: () => LocalizedString
			/**
			 * show info about xp and the leveling curve
			 */
			description: () => LocalizedString
			options: {
			}
		}
	}
	views: {
		events: {
			hellide: {
				/**
				 * The Helltide Rises!
				 */
				title: () => LocalizedString
				/**
				 *  (image will update)
				 */
				updatePending: () => LocalizedString
				/**
				 *  (image updated)
				 */
				updateDone: () => LocalizedString
				/**
				 *  (image unavailable - this is likely due to a service outage and should resolve shortly)
				 */
				noImage: () => LocalizedString
				/**
				 * Chests respawn:
				 */
				chestsRespawnLabel: () => LocalizedString
				/**
				 * Start:
				 */
				startLabel: () => LocalizedString
				/**
				 * End:
				 */
				endLabel: () => LocalizedString
				/**
				 * {location} chest locations
				 */
				locationUrl: (arg: { location: unknown }) => LocalizedString
			}
			worldBoss: {
				/**
				 * {name} is stirring in {location}!
				 */
				title: (arg: { location: unknown, name: unknown }) => LocalizedString
				/**
				 * Spawns:
				 */
				spawnLabel: () => LocalizedString
			}
			zoneEvent: {
				/**
				 * The Gathering Legions assemble in {location}!
				 */
				title: (arg: { location: unknown }) => LocalizedString
				/**
				 * Starts:
				 */
				startLabel: () => LocalizedString
			}
			utility: {
				/**
				 * {territory}, {zone}
				 */
				zoneAndTerritory: (arg: { territory: unknown, zone: unknown }) => LocalizedString
			}
		}
	}
	gameData: {
		worldBosses: {
			/**
			 * Avarice
			 */
			avarice: () => LocalizedString
			/**
			 * The Wandering Death
			 */
			theWanderingDeath: () => LocalizedString
			/**
			 * Ashava
			 */
			ashava: () => LocalizedString
		}
		map: {
			/**
			 * Sanctuary
			 */
			sanctuary: () => LocalizedString
			territories: {
				/**
				 * Dilapidated Aqueducts
				 */
				dilapidatedAqueducts: () => LocalizedString
				/**
				 * Haunted Wreckage
				 */
				hauntedWreckage: () => LocalizedString
				/**
				 * Temple of Rot
				 */
				templeOfRot: () => LocalizedString
				/**
				 * Norgoi Vigil
				 */
				norgoiVigil: () => LocalizedString
				/**
				 * Kor Dragan
				 */
				korDragan: () => LocalizedString
				/**
				 * Saraan Caldera
				 */
				saraanCaldera: () => LocalizedString
				/**
				 * Crusaders' Monument
				 */
				crusadersMonument: () => LocalizedString
				/**
				 * Caen Adar
				 */
				caenAdar: () => LocalizedString
				/**
				 * Fields of Desecration
				 */
				fieldsOfDesecration: () => LocalizedString
				/**
				 * Seared Basin
				 */
				searedBasin: () => LocalizedString
				/**
				 * The Crucible
				 */
				theCrucible: () => LocalizedString
				/**
				 * Carrowcrest Ruins
				 */
				carrowcrestRuins: () => LocalizedString
				/**
				 * Alcarnus
				 */
				alcarnus: () => LocalizedString
			}
			zones: {
				/**
				 * Kehjistan
				 */
				kehjistan: () => LocalizedString
				/**
				 * Hawezar
				 */
				hawezar: () => LocalizedString
				/**
				 * Scosglen
				 */
				scosglen: () => LocalizedString
				/**
				 * Fractured Peaks
				 */
				fracturedPeaks: () => LocalizedString
				/**
				 * Dry Steppes
				 */
				drySteppes: () => LocalizedString
			}
		}
	}
}

export type Formatters = {}
