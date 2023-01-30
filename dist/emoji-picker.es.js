var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { reactive, readonly, toRaw, defineComponent, inject, ref, computed, getCurrentInstance, watch, openBlock, createElementBlock, createElementVNode, normalizeClass, Fragment, renderList, withDirectives, toDisplayString, vShow, createCommentVNode, vModelText, onMounted, onBeforeUnmount, resolveComponent, createVNode, provide, createBlock } from "vue";
const EMOJI_REMOTE_SRC = "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64";
const GROUP_NAMES = {
  recent: "Recently used",
  smileys_people: "Smiles & People",
  animals_nature: "Animals & Nature",
  food_drink: "Food & Drink",
  activities: "Activities",
  travel_places: "Travel places",
  objects: "Objects",
  symbols: "Symbols",
  flags: "Flags"
};
const EMOJI_UNICODE_KEY = "u";
const EMOJI_NAME_KEY = "n";
const EMOJI_VARIATIONS_KEY = "v";
const EMOJI_RESULT_KEY = "r";
const DEFAULT_EMOJI = {
  [EMOJI_NAME_KEY]: ["grinning face", "grinning"],
  [EMOJI_UNICODE_KEY]: "1f600",
  [EMOJI_RESULT_KEY]: "1f600"
};
const SKIN_TONE_NEUTRAL = "neutral";
const SKIN_TONE_LIGHT = "1f3fb";
const SKIN_TONE_MEDIUM_LIGHT = "1f3fc";
const SKIN_TONE_MEDIUM = "1f3fd";
const SKIN_TONE_MEDIUM_DARK = "1f3fe";
const SKIN_TONE_DARK = "1f3ff";
const SKIN_TONES = [
  SKIN_TONE_NEUTRAL,
  SKIN_TONE_LIGHT,
  SKIN_TONE_MEDIUM_LIGHT,
  SKIN_TONE_MEDIUM,
  SKIN_TONE_MEDIUM_DARK,
  SKIN_TONE_DARK
];
const STATIC_TEXTS = {
  placeholder: "Search emoji",
  skinTone: "Skin tone"
};
const COLOR_THEMES = ["light", "dark", "auto"];
const smileys_people$1 = [
  {
    n: [
      "grinning face",
      "grinning",
      "smile",
      "happy"
    ],
    u: "1f600"
  },
  {
    n: [
      "grinning face with big eyes",
      "smiley",
      "happy",
      "joy",
      "haha"
    ],
    u: "1f603"
  },
  {
    n: [
      "grinning face with smiling eyes",
      "smile",
      "happy",
      "joy",
      "laugh",
      "pleased"
    ],
    u: "1f604"
  },
  {
    n: [
      "beaming face with smiling eyes",
      "grin"
    ],
    u: "1f601"
  },
  {
    n: [
      "grinning squinting face",
      "laughing",
      "satisfied",
      "happy",
      "haha"
    ],
    u: "1f606"
  },
  {
    n: [
      "grinning face with sweat",
      "sweat_smile",
      "hot"
    ],
    u: "1f605"
  },
  {
    n: [
      "rolling on the floor laughing",
      "rofl",
      "lol",
      "laughing"
    ],
    u: "1f923"
  },
  {
    n: [
      "face with tears of joy",
      "joy",
      "tears"
    ],
    u: "1f602"
  },
  {
    n: [
      "slightly smiling face",
      "slightly_smiling_face"
    ],
    u: "1f642"
  },
  {
    n: [
      "upside-down face",
      "upside_down_face"
    ],
    u: "1f643"
  },
  {
    n: [
      "melting face",
      "melting_face",
      "sarcasm",
      "dread"
    ],
    u: "1fae0"
  },
  {
    n: [
      "winking face",
      "wink",
      "flirt"
    ],
    u: "1f609"
  },
  {
    n: [
      "smiling face with smiling eyes",
      "blush",
      "proud"
    ],
    u: "1f60a"
  },
  {
    n: [
      "smiling face with halo",
      "innocent",
      "angel"
    ],
    u: "1f607"
  },
  {
    n: [
      "smiling face with hearts",
      "smiling_face_with_three_hearts",
      "love"
    ],
    u: "1f970"
  },
  {
    n: [
      "smiling face with heart-eyes",
      "heart_eyes",
      "love",
      "crush"
    ],
    u: "1f60d"
  },
  {
    n: [
      "star-struck",
      "star_struck",
      "eyes"
    ],
    u: "1f929"
  },
  {
    n: [
      "face blowing a kiss",
      "kissing_heart",
      "flirt"
    ],
    u: "1f618"
  },
  {
    n: [
      "kissing face",
      "kissing"
    ],
    u: "1f617"
  },
  {
    n: [
      "smiling face",
      "relaxed",
      "blush",
      "pleased"
    ],
    u: "263a-fe0f"
  },
  {
    n: [
      "kissing face with closed eyes",
      "kissing_closed_eyes"
    ],
    u: "1f61a"
  },
  {
    n: [
      "kissing face with smiling eyes",
      "kissing_smiling_eyes"
    ],
    u: "1f619"
  },
  {
    n: [
      "smiling face with tear",
      "smiling_face_with_tear"
    ],
    u: "1f972"
  },
  {
    n: [
      "face savoring food",
      "yum",
      "tongue",
      "lick"
    ],
    u: "1f60b"
  },
  {
    n: [
      "face with tongue",
      "stuck_out_tongue"
    ],
    u: "1f61b"
  },
  {
    n: [
      "winking face with tongue",
      "stuck_out_tongue_winking_eye",
      "prank",
      "silly"
    ],
    u: "1f61c"
  },
  {
    n: [
      "zany face",
      "zany_face",
      "goofy",
      "wacky"
    ],
    u: "1f92a"
  },
  {
    n: [
      "squinting face with tongue",
      "stuck_out_tongue_closed_eyes",
      "prank"
    ],
    u: "1f61d"
  },
  {
    n: [
      "money-mouth face",
      "money_mouth_face",
      "rich"
    ],
    u: "1f911"
  },
  {
    n: [
      "smiling face with open hands",
      "hugs"
    ],
    u: "1f917"
  },
  {
    n: [
      "face with hand over mouth",
      "hand_over_mouth",
      "quiet",
      "whoops"
    ],
    u: "1f92d"
  },
  {
    n: [
      "face with open eyes and hand over mouth",
      "face_with_open_eyes_and_hand_over_mouth",
      "gasp",
      "shock"
    ],
    u: "1fae2"
  },
  {
    n: [
      "face with peeking eye",
      "face_with_peeking_eye"
    ],
    u: "1fae3"
  },
  {
    n: [
      "shushing face",
      "shushing_face",
      "silence",
      "quiet"
    ],
    u: "1f92b"
  },
  {
    n: [
      "thinking face",
      "thinking"
    ],
    u: "1f914"
  },
  {
    n: [
      "saluting face",
      "saluting_face",
      "respect"
    ],
    u: "1fae1"
  },
  {
    n: [
      "zipper-mouth face",
      "zipper_mouth_face",
      "silence",
      "hush"
    ],
    u: "1f910"
  },
  {
    n: [
      "face with raised eyebrow",
      "raised_eyebrow",
      "suspicious"
    ],
    u: "1f928"
  },
  {
    n: [
      "neutral face",
      "neutral_face",
      "meh"
    ],
    u: "1f610"
  },
  {
    n: [
      "expressionless face",
      "expressionless"
    ],
    u: "1f611"
  },
  {
    n: [
      "face without mouth",
      "no_mouth",
      "mute",
      "silence"
    ],
    u: "1f636"
  },
  {
    n: [
      "dotted line face",
      "dotted_line_face",
      "invisible"
    ],
    u: "1fae5"
  },
  {
    n: [
      "face in clouds",
      "face_in_clouds"
    ],
    u: "1f636-200d-1f32b-fe0f"
  },
  {
    n: [
      "smirking face",
      "smirk",
      "smug"
    ],
    u: "1f60f"
  },
  {
    n: [
      "unamused face",
      "unamused",
      "meh"
    ],
    u: "1f612"
  },
  {
    n: [
      "face with rolling eyes",
      "roll_eyes"
    ],
    u: "1f644"
  },
  {
    n: [
      "grimacing face",
      "grimacing"
    ],
    u: "1f62c"
  },
  {
    n: [
      "face exhaling",
      "face_exhaling"
    ],
    u: "1f62e-200d-1f4a8"
  },
  {
    n: [
      "lying face",
      "lying_face",
      "liar"
    ],
    u: "1f925"
  },
  {
    n: [
      "relieved face",
      "relieved",
      "whew"
    ],
    u: "1f60c"
  },
  {
    n: [
      "pensive face",
      "pensive"
    ],
    u: "1f614"
  },
  {
    n: [
      "sleepy face",
      "sleepy",
      "tired"
    ],
    u: "1f62a"
  },
  {
    n: [
      "drooling face",
      "drooling_face"
    ],
    u: "1f924"
  },
  {
    n: [
      "sleeping face",
      "sleeping",
      "zzz"
    ],
    u: "1f634"
  },
  {
    n: [
      "face with medical mask",
      "mask",
      "sick",
      "ill"
    ],
    u: "1f637"
  },
  {
    n: [
      "face with thermometer",
      "face_with_thermometer",
      "sick"
    ],
    u: "1f912"
  },
  {
    n: [
      "face with head-bandage",
      "face_with_head_bandage",
      "hurt"
    ],
    u: "1f915"
  },
  {
    n: [
      "nauseated face",
      "nauseated_face",
      "sick",
      "barf",
      "disgusted"
    ],
    u: "1f922"
  },
  {
    n: [
      "face vomiting",
      "vomiting_face",
      "barf",
      "sick"
    ],
    u: "1f92e"
  },
  {
    n: [
      "sneezing face",
      "sneezing_face",
      "achoo",
      "sick"
    ],
    u: "1f927"
  },
  {
    n: [
      "hot face",
      "hot_face",
      "heat",
      "sweating"
    ],
    u: "1f975"
  },
  {
    n: [
      "cold face",
      "cold_face",
      "freezing",
      "ice"
    ],
    u: "1f976"
  },
  {
    n: [
      "woozy face",
      "woozy_face",
      "groggy"
    ],
    u: "1f974"
  },
  {
    n: [
      "face with crossed-out eyes",
      "dizzy_face"
    ],
    u: "1f635"
  },
  {
    n: [
      "face with spiral eyes",
      "face_with_spiral_eyes"
    ],
    u: "1f635-200d-1f4ab"
  },
  {
    n: [
      "exploding head",
      "exploding_head",
      "mind",
      "blown"
    ],
    u: "1f92f"
  },
  {
    n: [
      "cowboy hat face",
      "cowboy_hat_face"
    ],
    u: "1f920"
  },
  {
    n: [
      "partying face",
      "partying_face",
      "celebration",
      "birthday"
    ],
    u: "1f973"
  },
  {
    n: [
      "disguised face",
      "disguised_face"
    ],
    u: "1f978"
  },
  {
    n: [
      "smiling face with sunglasses",
      "sunglasses",
      "cool"
    ],
    u: "1f60e"
  },
  {
    n: [
      "nerd face",
      "nerd_face",
      "geek",
      "glasses"
    ],
    u: "1f913"
  },
  {
    n: [
      "face with monocle",
      "monocle_face"
    ],
    u: "1f9d0"
  },
  {
    n: [
      "confused face",
      "confused"
    ],
    u: "1f615"
  },
  {
    n: [
      "face with diagonal mouth",
      "face_with_diagonal_mouth",
      "confused"
    ],
    u: "1fae4"
  },
  {
    n: [
      "worried face",
      "worried",
      "nervous"
    ],
    u: "1f61f"
  },
  {
    n: [
      "slightly frowning face",
      "slightly_frowning_face"
    ],
    u: "1f641"
  },
  {
    n: [
      "frowning face",
      "frowning_face"
    ],
    u: "2639-fe0f"
  },
  {
    n: [
      "face with open mouth",
      "open_mouth",
      "surprise",
      "impressed",
      "wow"
    ],
    u: "1f62e"
  },
  {
    n: [
      "hushed face",
      "hushed",
      "silence",
      "speechless"
    ],
    u: "1f62f"
  },
  {
    n: [
      "astonished face",
      "astonished",
      "amazed",
      "gasp"
    ],
    u: "1f632"
  },
  {
    n: [
      "flushed face",
      "flushed"
    ],
    u: "1f633"
  },
  {
    n: [
      "pleading face",
      "pleading_face",
      "puppy",
      "eyes"
    ],
    u: "1f97a"
  },
  {
    n: [
      "face holding back tears",
      "face_holding_back_tears",
      "tears",
      "gratitude"
    ],
    u: "1f979"
  },
  {
    n: [
      "frowning face with open mouth",
      "frowning"
    ],
    u: "1f626"
  },
  {
    n: [
      "anguished face",
      "anguished",
      "stunned"
    ],
    u: "1f627"
  },
  {
    n: [
      "fearful face",
      "fearful",
      "scared",
      "shocked",
      "oops"
    ],
    u: "1f628"
  },
  {
    n: [
      "anxious face with sweat",
      "cold_sweat",
      "nervous"
    ],
    u: "1f630"
  },
  {
    n: [
      "sad but relieved face",
      "disappointed_relieved",
      "phew",
      "sweat",
      "nervous"
    ],
    u: "1f625"
  },
  {
    n: [
      "crying face",
      "cry",
      "sad",
      "tear"
    ],
    u: "1f622"
  },
  {
    n: [
      "loudly crying face",
      "sob",
      "sad",
      "cry",
      "bawling"
    ],
    u: "1f62d"
  },
  {
    n: [
      "face screaming in fear",
      "scream",
      "horror",
      "shocked"
    ],
    u: "1f631"
  },
  {
    n: [
      "confounded face",
      "confounded"
    ],
    u: "1f616"
  },
  {
    n: [
      "persevering face",
      "persevere",
      "struggling"
    ],
    u: "1f623"
  },
  {
    n: [
      "disappointed face",
      "disappointed",
      "sad"
    ],
    u: "1f61e"
  },
  {
    n: [
      "downcast face with sweat",
      "sweat"
    ],
    u: "1f613"
  },
  {
    n: [
      "weary face",
      "weary",
      "tired"
    ],
    u: "1f629"
  },
  {
    n: [
      "tired face",
      "tired_face",
      "upset",
      "whine"
    ],
    u: "1f62b"
  },
  {
    n: [
      "yawning face",
      "yawning_face"
    ],
    u: "1f971"
  },
  {
    n: [
      "face with steam from nose",
      "triumph",
      "smug"
    ],
    u: "1f624"
  },
  {
    n: [
      "pouting face",
      "rage",
      "pout",
      "angry"
    ],
    u: "1f621"
  },
  {
    n: [
      "angry face",
      "angry",
      "mad",
      "annoyed"
    ],
    u: "1f620"
  },
  {
    n: [
      "face with symbols on mouth",
      "cursing_face",
      "foul"
    ],
    u: "1f92c"
  },
  {
    n: [
      "smiling face with horns",
      "smiling_imp",
      "devil",
      "evil",
      "horns"
    ],
    u: "1f608"
  },
  {
    n: [
      "angry face with horns",
      "imp",
      "angry",
      "devil",
      "evil",
      "horns"
    ],
    u: "1f47f"
  },
  {
    n: [
      "skull",
      "skull",
      "dead",
      "danger",
      "poison"
    ],
    u: "1f480"
  },
  {
    n: [
      "skull and crossbones",
      "skull_and_crossbones",
      "danger",
      "pirate"
    ],
    u: "2620-fe0f"
  },
  {
    n: [
      "pile of poo",
      "hankey",
      "poop",
      "shit",
      "crap"
    ],
    u: "1f4a9"
  },
  {
    n: [
      "clown face",
      "clown_face"
    ],
    u: "1f921"
  },
  {
    n: [
      "ogre",
      "japanese_ogre",
      "monster"
    ],
    u: "1f479"
  },
  {
    n: [
      "goblin",
      "japanese_goblin"
    ],
    u: "1f47a"
  },
  {
    n: [
      "ghost",
      "ghost",
      "halloween"
    ],
    u: "1f47b"
  },
  {
    n: [
      "alien",
      "alien",
      "ufo"
    ],
    u: "1f47d"
  },
  {
    n: [
      "alien monster",
      "space_invader",
      "game",
      "retro"
    ],
    u: "1f47e"
  },
  {
    n: [
      "robot",
      "robot"
    ],
    u: "1f916"
  },
  {
    n: [
      "grinning cat",
      "smiley_cat"
    ],
    u: "1f63a"
  },
  {
    n: [
      "grinning cat with smiling eyes",
      "smile_cat"
    ],
    u: "1f638"
  },
  {
    n: [
      "cat with tears of joy",
      "joy_cat"
    ],
    u: "1f639"
  },
  {
    n: [
      "smiling cat with heart-eyes",
      "heart_eyes_cat"
    ],
    u: "1f63b"
  },
  {
    n: [
      "cat with wry smile",
      "smirk_cat"
    ],
    u: "1f63c"
  },
  {
    n: [
      "kissing cat",
      "kissing_cat"
    ],
    u: "1f63d"
  },
  {
    n: [
      "weary cat",
      "scream_cat",
      "horror"
    ],
    u: "1f640"
  },
  {
    n: [
      "crying cat",
      "crying_cat_face",
      "sad",
      "tear"
    ],
    u: "1f63f"
  },
  {
    n: [
      "pouting cat",
      "pouting_cat"
    ],
    u: "1f63e"
  },
  {
    n: [
      "see-no-evil monkey",
      "see_no_evil",
      "monkey",
      "blind",
      "ignore"
    ],
    u: "1f648"
  },
  {
    n: [
      "hear-no-evil monkey",
      "hear_no_evil",
      "monkey",
      "deaf"
    ],
    u: "1f649"
  },
  {
    n: [
      "speak-no-evil monkey",
      "speak_no_evil",
      "monkey",
      "mute",
      "hush"
    ],
    u: "1f64a"
  },
  {
    n: [
      "kiss mark",
      "kiss",
      "lipstick"
    ],
    u: "1f48b"
  },
  {
    n: [
      "love letter",
      "love_letter",
      "email",
      "envelope"
    ],
    u: "1f48c"
  },
  {
    n: [
      "heart with arrow",
      "cupid",
      "love",
      "heart"
    ],
    u: "1f498"
  },
  {
    n: [
      "heart with ribbon",
      "gift_heart",
      "chocolates"
    ],
    u: "1f49d"
  },
  {
    n: [
      "sparkling heart",
      "sparkling_heart"
    ],
    u: "1f496"
  },
  {
    n: [
      "growing heart",
      "heartpulse"
    ],
    u: "1f497"
  },
  {
    n: [
      "beating heart",
      "heartbeat"
    ],
    u: "1f493"
  },
  {
    n: [
      "revolving hearts",
      "revolving_hearts"
    ],
    u: "1f49e"
  },
  {
    n: [
      "two hearts",
      "two_hearts"
    ],
    u: "1f495"
  },
  {
    n: [
      "heart decoration",
      "heart_decoration"
    ],
    u: "1f49f"
  },
  {
    n: [
      "heart exclamation",
      "heavy_heart_exclamation"
    ],
    u: "2763-fe0f"
  },
  {
    n: [
      "broken heart",
      "broken_heart"
    ],
    u: "1f494"
  },
  {
    n: [
      "heart on fire",
      "heart_on_fire"
    ],
    u: "2764-fe0f-200d-1f525"
  },
  {
    n: [
      "mending heart",
      "mending_heart"
    ],
    u: "2764-fe0f-200d-1fa79"
  },
  {
    n: [
      "red heart",
      "heart",
      "love"
    ],
    u: "2764-fe0f"
  },
  {
    n: [
      "orange heart",
      "orange_heart"
    ],
    u: "1f9e1"
  },
  {
    n: [
      "yellow heart",
      "yellow_heart"
    ],
    u: "1f49b"
  },
  {
    n: [
      "green heart",
      "green_heart"
    ],
    u: "1f49a"
  },
  {
    n: [
      "blue heart",
      "blue_heart"
    ],
    u: "1f499"
  },
  {
    n: [
      "purple heart",
      "purple_heart"
    ],
    u: "1f49c"
  },
  {
    n: [
      "brown heart",
      "brown_heart"
    ],
    u: "1f90e"
  },
  {
    n: [
      "black heart",
      "black_heart"
    ],
    u: "1f5a4"
  },
  {
    n: [
      "white heart",
      "white_heart"
    ],
    u: "1f90d"
  },
  {
    n: [
      "hundred points",
      "100",
      "score",
      "perfect"
    ],
    u: "1f4af"
  },
  {
    n: [
      "anger symbol",
      "anger",
      "angry"
    ],
    u: "1f4a2"
  },
  {
    n: [
      "collision",
      "boom",
      "collision",
      "explode"
    ],
    u: "1f4a5"
  },
  {
    n: [
      "dizzy",
      "dizzy",
      "star"
    ],
    u: "1f4ab"
  },
  {
    n: [
      "sweat droplets",
      "sweat_drops",
      "water",
      "workout"
    ],
    u: "1f4a6"
  },
  {
    n: [
      "dashing away",
      "dash",
      "wind",
      "blow",
      "fast"
    ],
    u: "1f4a8"
  },
  {
    n: [
      "hole",
      "hole"
    ],
    u: "1f573-fe0f"
  },
  {
    n: [
      "bomb",
      "bomb",
      "boom"
    ],
    u: "1f4a3"
  },
  {
    n: [
      "speech balloon",
      "speech_balloon",
      "comment"
    ],
    u: "1f4ac"
  },
  {
    n: [
      "eye in speech bubble",
      "eye_speech_bubble"
    ],
    u: "1f441-fe0f-200d-1f5e8-fe0f"
  },
  {
    n: [
      "left speech bubble",
      "left_speech_bubble"
    ],
    u: "1f5e8-fe0f"
  },
  {
    n: [
      "right anger bubble",
      "right_anger_bubble"
    ],
    u: "1f5ef-fe0f"
  },
  {
    n: [
      "thought balloon",
      "thought_balloon",
      "thinking"
    ],
    u: "1f4ad"
  },
  {
    n: [
      "zzz",
      "zzz",
      "sleeping"
    ],
    u: "1f4a4"
  },
  {
    n: [
      "waving hand",
      "wave",
      "goodbye"
    ],
    u: "1f44b",
    v: [
      "1f44b-1f3fb",
      "1f44b-1f3fc",
      "1f44b-1f3fd",
      "1f44b-1f3fe",
      "1f44b-1f3ff"
    ]
  },
  {
    n: [
      "raised back of hand",
      "raised_back_of_hand"
    ],
    u: "1f91a",
    v: [
      "1f91a-1f3fb",
      "1f91a-1f3fc",
      "1f91a-1f3fd",
      "1f91a-1f3fe",
      "1f91a-1f3ff"
    ]
  },
  {
    n: [
      "hand with fingers splayed",
      "raised_hand_with_fingers_splayed"
    ],
    u: "1f590-fe0f",
    v: [
      "1f590-fe0f-1f3fb",
      "1f590-fe0f-1f3fc",
      "1f590-fe0f-1f3fd",
      "1f590-fe0f-1f3fe",
      "1f590-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "raised hand",
      "hand",
      "raised_hand",
      "highfive",
      "stop"
    ],
    u: "270b",
    v: [
      "270b-1f3fb",
      "270b-1f3fc",
      "270b-1f3fd",
      "270b-1f3fe",
      "270b-1f3ff"
    ]
  },
  {
    n: [
      "vulcan salute",
      "vulcan_salute",
      "prosper",
      "spock"
    ],
    u: "1f596",
    v: [
      "1f596-1f3fb",
      "1f596-1f3fc",
      "1f596-1f3fd",
      "1f596-1f3fe",
      "1f596-1f3ff"
    ]
  },
  {
    n: [
      "rightwards hand",
      "rightwards_hand"
    ],
    u: "1faf1",
    v: [
      "1faf1-1f3fb",
      "1faf1-1f3fc",
      "1faf1-1f3fd",
      "1faf1-1f3fe",
      "1faf1-1f3ff"
    ]
  },
  {
    n: [
      "leftwards hand",
      "leftwards_hand"
    ],
    u: "1faf2",
    v: [
      "1faf2-1f3fb",
      "1faf2-1f3fc",
      "1faf2-1f3fd",
      "1faf2-1f3fe",
      "1faf2-1f3ff"
    ]
  },
  {
    n: [
      "palm down hand",
      "palm_down_hand"
    ],
    u: "1faf3",
    v: [
      "1faf3-1f3fb",
      "1faf3-1f3fc",
      "1faf3-1f3fd",
      "1faf3-1f3fe",
      "1faf3-1f3ff"
    ]
  },
  {
    n: [
      "palm up hand",
      "palm_up_hand"
    ],
    u: "1faf4",
    v: [
      "1faf4-1f3fb",
      "1faf4-1f3fc",
      "1faf4-1f3fd",
      "1faf4-1f3fe",
      "1faf4-1f3ff"
    ]
  },
  {
    n: [
      "OK hand",
      "ok_hand"
    ],
    u: "1f44c",
    v: [
      "1f44c-1f3fb",
      "1f44c-1f3fc",
      "1f44c-1f3fd",
      "1f44c-1f3fe",
      "1f44c-1f3ff"
    ]
  },
  {
    n: [
      "pinched fingers",
      "pinched_fingers"
    ],
    u: "1f90c",
    v: [
      "1f90c-1f3fb",
      "1f90c-1f3fc",
      "1f90c-1f3fd",
      "1f90c-1f3fe",
      "1f90c-1f3ff"
    ]
  },
  {
    n: [
      "pinching hand",
      "pinching_hand"
    ],
    u: "1f90f",
    v: [
      "1f90f-1f3fb",
      "1f90f-1f3fc",
      "1f90f-1f3fd",
      "1f90f-1f3fe",
      "1f90f-1f3ff"
    ]
  },
  {
    n: [
      "victory hand",
      "v",
      "victory",
      "peace"
    ],
    u: "270c-fe0f",
    v: [
      "270c-fe0f-1f3fb",
      "270c-fe0f-1f3fc",
      "270c-fe0f-1f3fd",
      "270c-fe0f-1f3fe",
      "270c-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "crossed fingers",
      "crossed_fingers",
      "luck",
      "hopeful"
    ],
    u: "1f91e",
    v: [
      "1f91e-1f3fb",
      "1f91e-1f3fc",
      "1f91e-1f3fd",
      "1f91e-1f3fe",
      "1f91e-1f3ff"
    ]
  },
  {
    n: [
      "hand with index finger and thumb crossed",
      "hand_with_index_finger_and_thumb_crossed"
    ],
    u: "1faf0",
    v: [
      "1faf0-1f3fb",
      "1faf0-1f3fc",
      "1faf0-1f3fd",
      "1faf0-1f3fe",
      "1faf0-1f3ff"
    ]
  },
  {
    n: [
      "love-you gesture",
      "love_you_gesture"
    ],
    u: "1f91f",
    v: [
      "1f91f-1f3fb",
      "1f91f-1f3fc",
      "1f91f-1f3fd",
      "1f91f-1f3fe",
      "1f91f-1f3ff"
    ]
  },
  {
    n: [
      "sign of the horns",
      "metal"
    ],
    u: "1f918",
    v: [
      "1f918-1f3fb",
      "1f918-1f3fc",
      "1f918-1f3fd",
      "1f918-1f3fe",
      "1f918-1f3ff"
    ]
  },
  {
    n: [
      "call me hand",
      "call_me_hand"
    ],
    u: "1f919",
    v: [
      "1f919-1f3fb",
      "1f919-1f3fc",
      "1f919-1f3fd",
      "1f919-1f3fe",
      "1f919-1f3ff"
    ]
  },
  {
    n: [
      "backhand index pointing left",
      "point_left"
    ],
    u: "1f448",
    v: [
      "1f448-1f3fb",
      "1f448-1f3fc",
      "1f448-1f3fd",
      "1f448-1f3fe",
      "1f448-1f3ff"
    ]
  },
  {
    n: [
      "backhand index pointing right",
      "point_right"
    ],
    u: "1f449",
    v: [
      "1f449-1f3fb",
      "1f449-1f3fc",
      "1f449-1f3fd",
      "1f449-1f3fe",
      "1f449-1f3ff"
    ]
  },
  {
    n: [
      "backhand index pointing up",
      "point_up_2"
    ],
    u: "1f446",
    v: [
      "1f446-1f3fb",
      "1f446-1f3fc",
      "1f446-1f3fd",
      "1f446-1f3fe",
      "1f446-1f3ff"
    ]
  },
  {
    n: [
      "middle finger",
      "middle_finger",
      "fu"
    ],
    u: "1f595",
    v: [
      "1f595-1f3fb",
      "1f595-1f3fc",
      "1f595-1f3fd",
      "1f595-1f3fe",
      "1f595-1f3ff"
    ]
  },
  {
    n: [
      "backhand index pointing down",
      "point_down"
    ],
    u: "1f447",
    v: [
      "1f447-1f3fb",
      "1f447-1f3fc",
      "1f447-1f3fd",
      "1f447-1f3fe",
      "1f447-1f3ff"
    ]
  },
  {
    n: [
      "index pointing up",
      "point_up"
    ],
    u: "261d-fe0f",
    v: [
      "261d-fe0f-1f3fb",
      "261d-fe0f-1f3fc",
      "261d-fe0f-1f3fd",
      "261d-fe0f-1f3fe",
      "261d-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "index pointing at the viewer",
      "index_pointing_at_the_viewer"
    ],
    u: "1faf5",
    v: [
      "1faf5-1f3fb",
      "1faf5-1f3fc",
      "1faf5-1f3fd",
      "1faf5-1f3fe",
      "1faf5-1f3ff"
    ]
  },
  {
    n: [
      "thumbs up",
      "+1",
      "thumbsup",
      "approve",
      "ok"
    ],
    u: "1f44d",
    v: [
      "1f44d-1f3fb",
      "1f44d-1f3fc",
      "1f44d-1f3fd",
      "1f44d-1f3fe",
      "1f44d-1f3ff"
    ]
  },
  {
    n: [
      "thumbs down",
      "-1",
      "thumbsdown",
      "disapprove",
      "bury"
    ],
    u: "1f44e",
    v: [
      "1f44e-1f3fb",
      "1f44e-1f3fc",
      "1f44e-1f3fd",
      "1f44e-1f3fe",
      "1f44e-1f3ff"
    ]
  },
  {
    n: [
      "raised fist",
      "fist_raised",
      "fist",
      "power"
    ],
    u: "270a",
    v: [
      "270a-1f3fb",
      "270a-1f3fc",
      "270a-1f3fd",
      "270a-1f3fe",
      "270a-1f3ff"
    ]
  },
  {
    n: [
      "oncoming fist",
      "fist_oncoming",
      "facepunch",
      "punch",
      "attack"
    ],
    u: "1f44a",
    v: [
      "1f44a-1f3fb",
      "1f44a-1f3fc",
      "1f44a-1f3fd",
      "1f44a-1f3fe",
      "1f44a-1f3ff"
    ]
  },
  {
    n: [
      "left-facing fist",
      "fist_left"
    ],
    u: "1f91b",
    v: [
      "1f91b-1f3fb",
      "1f91b-1f3fc",
      "1f91b-1f3fd",
      "1f91b-1f3fe",
      "1f91b-1f3ff"
    ]
  },
  {
    n: [
      "right-facing fist",
      "fist_right"
    ],
    u: "1f91c",
    v: [
      "1f91c-1f3fb",
      "1f91c-1f3fc",
      "1f91c-1f3fd",
      "1f91c-1f3fe",
      "1f91c-1f3ff"
    ]
  },
  {
    n: [
      "clapping hands",
      "clap",
      "praise",
      "applause"
    ],
    u: "1f44f",
    v: [
      "1f44f-1f3fb",
      "1f44f-1f3fc",
      "1f44f-1f3fd",
      "1f44f-1f3fe",
      "1f44f-1f3ff"
    ]
  },
  {
    n: [
      "raising hands",
      "raised_hands",
      "hooray"
    ],
    u: "1f64c",
    v: [
      "1f64c-1f3fb",
      "1f64c-1f3fc",
      "1f64c-1f3fd",
      "1f64c-1f3fe",
      "1f64c-1f3ff"
    ]
  },
  {
    n: [
      "heart hands",
      "heart_hands",
      "love"
    ],
    u: "1faf6",
    v: [
      "1faf6-1f3fb",
      "1faf6-1f3fc",
      "1faf6-1f3fd",
      "1faf6-1f3fe",
      "1faf6-1f3ff"
    ]
  },
  {
    n: [
      "open hands",
      "open_hands"
    ],
    u: "1f450",
    v: [
      "1f450-1f3fb",
      "1f450-1f3fc",
      "1f450-1f3fd",
      "1f450-1f3fe",
      "1f450-1f3ff"
    ]
  },
  {
    n: [
      "palms up together",
      "palms_up_together"
    ],
    u: "1f932",
    v: [
      "1f932-1f3fb",
      "1f932-1f3fc",
      "1f932-1f3fd",
      "1f932-1f3fe",
      "1f932-1f3ff"
    ]
  },
  {
    n: [
      "handshake",
      "handshake",
      "deal"
    ],
    u: "1f91d",
    v: [
      "1f91d-1f3fb",
      "1f91d-1f3fc",
      "1f91d-1f3fd",
      "1f91d-1f3fe",
      "1f91d-1f3ff"
    ]
  },
  {
    n: [
      "folded hands",
      "pray",
      "please",
      "hope",
      "wish"
    ],
    u: "1f64f",
    v: [
      "1f64f-1f3fb",
      "1f64f-1f3fc",
      "1f64f-1f3fd",
      "1f64f-1f3fe",
      "1f64f-1f3ff"
    ]
  },
  {
    n: [
      "writing hand",
      "writing_hand"
    ],
    u: "270d-fe0f",
    v: [
      "270d-fe0f-1f3fb",
      "270d-fe0f-1f3fc",
      "270d-fe0f-1f3fd",
      "270d-fe0f-1f3fe",
      "270d-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "nail polish",
      "nail_care",
      "beauty",
      "manicure"
    ],
    u: "1f485",
    v: [
      "1f485-1f3fb",
      "1f485-1f3fc",
      "1f485-1f3fd",
      "1f485-1f3fe",
      "1f485-1f3ff"
    ]
  },
  {
    n: [
      "selfie",
      "selfie"
    ],
    u: "1f933",
    v: [
      "1f933-1f3fb",
      "1f933-1f3fc",
      "1f933-1f3fd",
      "1f933-1f3fe",
      "1f933-1f3ff"
    ]
  },
  {
    n: [
      "flexed biceps",
      "muscle",
      "flex",
      "bicep",
      "strong",
      "workout"
    ],
    u: "1f4aa",
    v: [
      "1f4aa-1f3fb",
      "1f4aa-1f3fc",
      "1f4aa-1f3fd",
      "1f4aa-1f3fe",
      "1f4aa-1f3ff"
    ]
  },
  {
    n: [
      "mechanical arm",
      "mechanical_arm"
    ],
    u: "1f9be"
  },
  {
    n: [
      "mechanical leg",
      "mechanical_leg"
    ],
    u: "1f9bf"
  },
  {
    n: [
      "leg",
      "leg"
    ],
    u: "1f9b5",
    v: [
      "1f9b5-1f3fb",
      "1f9b5-1f3fc",
      "1f9b5-1f3fd",
      "1f9b5-1f3fe",
      "1f9b5-1f3ff"
    ]
  },
  {
    n: [
      "foot",
      "foot"
    ],
    u: "1f9b6",
    v: [
      "1f9b6-1f3fb",
      "1f9b6-1f3fc",
      "1f9b6-1f3fd",
      "1f9b6-1f3fe",
      "1f9b6-1f3ff"
    ]
  },
  {
    n: [
      "ear",
      "ear",
      "hear",
      "sound",
      "listen"
    ],
    u: "1f442",
    v: [
      "1f442-1f3fb",
      "1f442-1f3fc",
      "1f442-1f3fd",
      "1f442-1f3fe",
      "1f442-1f3ff"
    ]
  },
  {
    n: [
      "ear with hearing aid",
      "ear_with_hearing_aid"
    ],
    u: "1f9bb",
    v: [
      "1f9bb-1f3fb",
      "1f9bb-1f3fc",
      "1f9bb-1f3fd",
      "1f9bb-1f3fe",
      "1f9bb-1f3ff"
    ]
  },
  {
    n: [
      "nose",
      "nose",
      "smell"
    ],
    u: "1f443",
    v: [
      "1f443-1f3fb",
      "1f443-1f3fc",
      "1f443-1f3fd",
      "1f443-1f3fe",
      "1f443-1f3ff"
    ]
  },
  {
    n: [
      "brain",
      "brain"
    ],
    u: "1f9e0"
  },
  {
    n: [
      "anatomical heart",
      "anatomical_heart"
    ],
    u: "1fac0"
  },
  {
    n: [
      "lungs",
      "lungs"
    ],
    u: "1fac1"
  },
  {
    n: [
      "tooth",
      "tooth"
    ],
    u: "1f9b7"
  },
  {
    n: [
      "bone",
      "bone"
    ],
    u: "1f9b4"
  },
  {
    n: [
      "eyes",
      "eyes",
      "look",
      "see",
      "watch"
    ],
    u: "1f440"
  },
  {
    n: [
      "eye",
      "eye"
    ],
    u: "1f441-fe0f"
  },
  {
    n: [
      "tongue",
      "tongue",
      "taste"
    ],
    u: "1f445"
  },
  {
    n: [
      "mouth",
      "lips",
      "kiss"
    ],
    u: "1f444"
  },
  {
    n: [
      "biting lip",
      "biting_lip"
    ],
    u: "1fae6"
  },
  {
    n: [
      "baby",
      "baby",
      "child",
      "newborn"
    ],
    u: "1f476",
    v: [
      "1f476-1f3fb",
      "1f476-1f3fc",
      "1f476-1f3fd",
      "1f476-1f3fe",
      "1f476-1f3ff"
    ]
  },
  {
    n: [
      "child",
      "child"
    ],
    u: "1f9d2",
    v: [
      "1f9d2-1f3fb",
      "1f9d2-1f3fc",
      "1f9d2-1f3fd",
      "1f9d2-1f3fe",
      "1f9d2-1f3ff"
    ]
  },
  {
    n: [
      "boy",
      "boy",
      "child"
    ],
    u: "1f466",
    v: [
      "1f466-1f3fb",
      "1f466-1f3fc",
      "1f466-1f3fd",
      "1f466-1f3fe",
      "1f466-1f3ff"
    ]
  },
  {
    n: [
      "girl",
      "girl",
      "child"
    ],
    u: "1f467",
    v: [
      "1f467-1f3fb",
      "1f467-1f3fc",
      "1f467-1f3fd",
      "1f467-1f3fe",
      "1f467-1f3ff"
    ]
  },
  {
    n: [
      "person",
      "adult"
    ],
    u: "1f9d1",
    v: [
      "1f9d1-1f3fb",
      "1f9d1-1f3fc",
      "1f9d1-1f3fd",
      "1f9d1-1f3fe",
      "1f9d1-1f3ff"
    ]
  },
  {
    n: [
      "person: blond hair",
      "blond_haired_person"
    ],
    u: "1f471",
    v: [
      "1f471-1f3fb",
      "1f471-1f3fc",
      "1f471-1f3fd",
      "1f471-1f3fe",
      "1f471-1f3ff"
    ]
  },
  {
    n: [
      "man",
      "man",
      "mustache",
      "father",
      "dad"
    ],
    u: "1f468",
    v: [
      "1f468-1f3fb",
      "1f468-1f3fc",
      "1f468-1f3fd",
      "1f468-1f3fe",
      "1f468-1f3ff"
    ]
  },
  {
    n: [
      "person: beard",
      "bearded_person"
    ],
    u: "1f9d4",
    v: [
      "1f9d4-1f3fb",
      "1f9d4-1f3fc",
      "1f9d4-1f3fd",
      "1f9d4-1f3fe",
      "1f9d4-1f3ff"
    ]
  },
  {
    n: [
      "man: beard",
      "man_beard"
    ],
    u: "1f9d4-200d-2642-fe0f",
    v: [
      "1f9d4-200d-2642-fe0f-1f3fb",
      "1f9d4-200d-2642-fe0f-1f3fc",
      "1f9d4-200d-2642-fe0f-1f3fd",
      "1f9d4-200d-2642-fe0f-1f3fe",
      "1f9d4-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman: beard",
      "woman_beard"
    ],
    u: "1f9d4-200d-2640-fe0f",
    v: [
      "1f9d4-200d-2640-fe0f-1f3fb",
      "1f9d4-200d-2640-fe0f-1f3fc",
      "1f9d4-200d-2640-fe0f-1f3fd",
      "1f9d4-200d-2640-fe0f-1f3fe",
      "1f9d4-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man: red hair",
      "red_haired_man"
    ],
    u: "1f468-200d-1f9b0",
    v: [
      "1f468-200d-1f9b0-1f3fb",
      "1f468-200d-1f9b0-1f3fc",
      "1f468-200d-1f9b0-1f3fd",
      "1f468-200d-1f9b0-1f3fe",
      "1f468-200d-1f9b0-1f3ff"
    ]
  },
  {
    n: [
      "man: curly hair",
      "curly_haired_man"
    ],
    u: "1f468-200d-1f9b1",
    v: [
      "1f468-200d-1f9b1-1f3fb",
      "1f468-200d-1f9b1-1f3fc",
      "1f468-200d-1f9b1-1f3fd",
      "1f468-200d-1f9b1-1f3fe",
      "1f468-200d-1f9b1-1f3ff"
    ]
  },
  {
    n: [
      "man: white hair",
      "white_haired_man"
    ],
    u: "1f468-200d-1f9b3",
    v: [
      "1f468-200d-1f9b3-1f3fb",
      "1f468-200d-1f9b3-1f3fc",
      "1f468-200d-1f9b3-1f3fd",
      "1f468-200d-1f9b3-1f3fe",
      "1f468-200d-1f9b3-1f3ff"
    ]
  },
  {
    n: [
      "man: bald",
      "bald_man"
    ],
    u: "1f468-200d-1f9b2",
    v: [
      "1f468-200d-1f9b2-1f3fb",
      "1f468-200d-1f9b2-1f3fc",
      "1f468-200d-1f9b2-1f3fd",
      "1f468-200d-1f9b2-1f3fe",
      "1f468-200d-1f9b2-1f3ff"
    ]
  },
  {
    n: [
      "woman",
      "woman",
      "girls"
    ],
    u: "1f469",
    v: [
      "1f469-1f3fb",
      "1f469-1f3fc",
      "1f469-1f3fd",
      "1f469-1f3fe",
      "1f469-1f3ff"
    ]
  },
  {
    n: [
      "woman: red hair",
      "red_haired_woman"
    ],
    u: "1f469-200d-1f9b0",
    v: [
      "1f469-200d-1f9b0-1f3fb",
      "1f469-200d-1f9b0-1f3fc",
      "1f469-200d-1f9b0-1f3fd",
      "1f469-200d-1f9b0-1f3fe",
      "1f469-200d-1f9b0-1f3ff"
    ]
  },
  {
    n: [
      "person: red hair",
      "person_red_hair"
    ],
    u: "1f9d1-200d-1f9b0",
    v: [
      "1f9d1-200d-1f9b0-1f3fb",
      "1f9d1-200d-1f9b0-1f3fc",
      "1f9d1-200d-1f9b0-1f3fd",
      "1f9d1-200d-1f9b0-1f3fe",
      "1f9d1-200d-1f9b0-1f3ff"
    ]
  },
  {
    n: [
      "woman: curly hair",
      "curly_haired_woman"
    ],
    u: "1f469-200d-1f9b1",
    v: [
      "1f469-200d-1f9b1-1f3fb",
      "1f469-200d-1f9b1-1f3fc",
      "1f469-200d-1f9b1-1f3fd",
      "1f469-200d-1f9b1-1f3fe",
      "1f469-200d-1f9b1-1f3ff"
    ]
  },
  {
    n: [
      "person: curly hair",
      "person_curly_hair"
    ],
    u: "1f9d1-200d-1f9b1",
    v: [
      "1f9d1-200d-1f9b1-1f3fb",
      "1f9d1-200d-1f9b1-1f3fc",
      "1f9d1-200d-1f9b1-1f3fd",
      "1f9d1-200d-1f9b1-1f3fe",
      "1f9d1-200d-1f9b1-1f3ff"
    ]
  },
  {
    n: [
      "woman: white hair",
      "white_haired_woman"
    ],
    u: "1f469-200d-1f9b3",
    v: [
      "1f469-200d-1f9b3-1f3fb",
      "1f469-200d-1f9b3-1f3fc",
      "1f469-200d-1f9b3-1f3fd",
      "1f469-200d-1f9b3-1f3fe",
      "1f469-200d-1f9b3-1f3ff"
    ]
  },
  {
    n: [
      "person: white hair",
      "person_white_hair"
    ],
    u: "1f9d1-200d-1f9b3",
    v: [
      "1f9d1-200d-1f9b3-1f3fb",
      "1f9d1-200d-1f9b3-1f3fc",
      "1f9d1-200d-1f9b3-1f3fd",
      "1f9d1-200d-1f9b3-1f3fe",
      "1f9d1-200d-1f9b3-1f3ff"
    ]
  },
  {
    n: [
      "woman: bald",
      "bald_woman"
    ],
    u: "1f469-200d-1f9b2",
    v: [
      "1f469-200d-1f9b2-1f3fb",
      "1f469-200d-1f9b2-1f3fc",
      "1f469-200d-1f9b2-1f3fd",
      "1f469-200d-1f9b2-1f3fe",
      "1f469-200d-1f9b2-1f3ff"
    ]
  },
  {
    n: [
      "person: bald",
      "person_bald"
    ],
    u: "1f9d1-200d-1f9b2",
    v: [
      "1f9d1-200d-1f9b2-1f3fb",
      "1f9d1-200d-1f9b2-1f3fc",
      "1f9d1-200d-1f9b2-1f3fd",
      "1f9d1-200d-1f9b2-1f3fe",
      "1f9d1-200d-1f9b2-1f3ff"
    ]
  },
  {
    n: [
      "woman: blond hair",
      "blond_haired_woman",
      "blonde_woman"
    ],
    u: "1f471-200d-2640-fe0f",
    v: [
      "1f471-200d-2640-fe0f-1f3fb",
      "1f471-200d-2640-fe0f-1f3fc",
      "1f471-200d-2640-fe0f-1f3fd",
      "1f471-200d-2640-fe0f-1f3fe",
      "1f471-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man: blond hair",
      "blond_haired_man"
    ],
    u: "1f471-200d-2642-fe0f",
    v: [
      "1f471-200d-2642-fe0f-1f3fb",
      "1f471-200d-2642-fe0f-1f3fc",
      "1f471-200d-2642-fe0f-1f3fd",
      "1f471-200d-2642-fe0f-1f3fe",
      "1f471-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "older person",
      "older_adult"
    ],
    u: "1f9d3",
    v: [
      "1f9d3-1f3fb",
      "1f9d3-1f3fc",
      "1f9d3-1f3fd",
      "1f9d3-1f3fe",
      "1f9d3-1f3ff"
    ]
  },
  {
    n: [
      "old man",
      "older_man"
    ],
    u: "1f474",
    v: [
      "1f474-1f3fb",
      "1f474-1f3fc",
      "1f474-1f3fd",
      "1f474-1f3fe",
      "1f474-1f3ff"
    ]
  },
  {
    n: [
      "old woman",
      "older_woman"
    ],
    u: "1f475",
    v: [
      "1f475-1f3fb",
      "1f475-1f3fc",
      "1f475-1f3fd",
      "1f475-1f3fe",
      "1f475-1f3ff"
    ]
  },
  {
    n: [
      "person frowning",
      "frowning_person"
    ],
    u: "1f64d",
    v: [
      "1f64d-1f3fb",
      "1f64d-1f3fc",
      "1f64d-1f3fd",
      "1f64d-1f3fe",
      "1f64d-1f3ff"
    ]
  },
  {
    n: [
      "man frowning",
      "frowning_man"
    ],
    u: "1f64d-200d-2642-fe0f",
    v: [
      "1f64d-200d-2642-fe0f-1f3fb",
      "1f64d-200d-2642-fe0f-1f3fc",
      "1f64d-200d-2642-fe0f-1f3fd",
      "1f64d-200d-2642-fe0f-1f3fe",
      "1f64d-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman frowning",
      "frowning_woman"
    ],
    u: "1f64d-200d-2640-fe0f",
    v: [
      "1f64d-200d-2640-fe0f-1f3fb",
      "1f64d-200d-2640-fe0f-1f3fc",
      "1f64d-200d-2640-fe0f-1f3fd",
      "1f64d-200d-2640-fe0f-1f3fe",
      "1f64d-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person pouting",
      "pouting_face"
    ],
    u: "1f64e",
    v: [
      "1f64e-1f3fb",
      "1f64e-1f3fc",
      "1f64e-1f3fd",
      "1f64e-1f3fe",
      "1f64e-1f3ff"
    ]
  },
  {
    n: [
      "man pouting",
      "pouting_man"
    ],
    u: "1f64e-200d-2642-fe0f",
    v: [
      "1f64e-200d-2642-fe0f-1f3fb",
      "1f64e-200d-2642-fe0f-1f3fc",
      "1f64e-200d-2642-fe0f-1f3fd",
      "1f64e-200d-2642-fe0f-1f3fe",
      "1f64e-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman pouting",
      "pouting_woman"
    ],
    u: "1f64e-200d-2640-fe0f",
    v: [
      "1f64e-200d-2640-fe0f-1f3fb",
      "1f64e-200d-2640-fe0f-1f3fc",
      "1f64e-200d-2640-fe0f-1f3fd",
      "1f64e-200d-2640-fe0f-1f3fe",
      "1f64e-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person gesturing NO",
      "no_good",
      "stop",
      "halt",
      "denied"
    ],
    u: "1f645",
    v: [
      "1f645-1f3fb",
      "1f645-1f3fc",
      "1f645-1f3fd",
      "1f645-1f3fe",
      "1f645-1f3ff"
    ]
  },
  {
    n: [
      "man gesturing NO",
      "no_good_man",
      "ng_man",
      "stop",
      "halt",
      "denied"
    ],
    u: "1f645-200d-2642-fe0f",
    v: [
      "1f645-200d-2642-fe0f-1f3fb",
      "1f645-200d-2642-fe0f-1f3fc",
      "1f645-200d-2642-fe0f-1f3fd",
      "1f645-200d-2642-fe0f-1f3fe",
      "1f645-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman gesturing NO",
      "no_good_woman",
      "ng_woman",
      "stop",
      "halt",
      "denied"
    ],
    u: "1f645-200d-2640-fe0f",
    v: [
      "1f645-200d-2640-fe0f-1f3fb",
      "1f645-200d-2640-fe0f-1f3fc",
      "1f645-200d-2640-fe0f-1f3fd",
      "1f645-200d-2640-fe0f-1f3fe",
      "1f645-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person gesturing OK",
      "ok_person"
    ],
    u: "1f646",
    v: [
      "1f646-1f3fb",
      "1f646-1f3fc",
      "1f646-1f3fd",
      "1f646-1f3fe",
      "1f646-1f3ff"
    ]
  },
  {
    n: [
      "man gesturing OK",
      "ok_man"
    ],
    u: "1f646-200d-2642-fe0f",
    v: [
      "1f646-200d-2642-fe0f-1f3fb",
      "1f646-200d-2642-fe0f-1f3fc",
      "1f646-200d-2642-fe0f-1f3fd",
      "1f646-200d-2642-fe0f-1f3fe",
      "1f646-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman gesturing OK",
      "ok_woman"
    ],
    u: "1f646-200d-2640-fe0f",
    v: [
      "1f646-200d-2640-fe0f-1f3fb",
      "1f646-200d-2640-fe0f-1f3fc",
      "1f646-200d-2640-fe0f-1f3fd",
      "1f646-200d-2640-fe0f-1f3fe",
      "1f646-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person tipping hand",
      "tipping_hand_person",
      "information_desk_person"
    ],
    u: "1f481",
    v: [
      "1f481-1f3fb",
      "1f481-1f3fc",
      "1f481-1f3fd",
      "1f481-1f3fe",
      "1f481-1f3ff"
    ]
  },
  {
    n: [
      "man tipping hand",
      "tipping_hand_man",
      "sassy_man",
      "information"
    ],
    u: "1f481-200d-2642-fe0f",
    v: [
      "1f481-200d-2642-fe0f-1f3fb",
      "1f481-200d-2642-fe0f-1f3fc",
      "1f481-200d-2642-fe0f-1f3fd",
      "1f481-200d-2642-fe0f-1f3fe",
      "1f481-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman tipping hand",
      "tipping_hand_woman",
      "sassy_woman",
      "information"
    ],
    u: "1f481-200d-2640-fe0f",
    v: [
      "1f481-200d-2640-fe0f-1f3fb",
      "1f481-200d-2640-fe0f-1f3fc",
      "1f481-200d-2640-fe0f-1f3fd",
      "1f481-200d-2640-fe0f-1f3fe",
      "1f481-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person raising hand",
      "raising_hand"
    ],
    u: "1f64b",
    v: [
      "1f64b-1f3fb",
      "1f64b-1f3fc",
      "1f64b-1f3fd",
      "1f64b-1f3fe",
      "1f64b-1f3ff"
    ]
  },
  {
    n: [
      "man raising hand",
      "raising_hand_man"
    ],
    u: "1f64b-200d-2642-fe0f",
    v: [
      "1f64b-200d-2642-fe0f-1f3fb",
      "1f64b-200d-2642-fe0f-1f3fc",
      "1f64b-200d-2642-fe0f-1f3fd",
      "1f64b-200d-2642-fe0f-1f3fe",
      "1f64b-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman raising hand",
      "raising_hand_woman"
    ],
    u: "1f64b-200d-2640-fe0f",
    v: [
      "1f64b-200d-2640-fe0f-1f3fb",
      "1f64b-200d-2640-fe0f-1f3fc",
      "1f64b-200d-2640-fe0f-1f3fd",
      "1f64b-200d-2640-fe0f-1f3fe",
      "1f64b-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "deaf person",
      "deaf_person"
    ],
    u: "1f9cf",
    v: [
      "1f9cf-1f3fb",
      "1f9cf-1f3fc",
      "1f9cf-1f3fd",
      "1f9cf-1f3fe",
      "1f9cf-1f3ff"
    ]
  },
  {
    n: [
      "deaf man",
      "deaf_man"
    ],
    u: "1f9cf-200d-2642-fe0f",
    v: [
      "1f9cf-200d-2642-fe0f-1f3fb",
      "1f9cf-200d-2642-fe0f-1f3fc",
      "1f9cf-200d-2642-fe0f-1f3fd",
      "1f9cf-200d-2642-fe0f-1f3fe",
      "1f9cf-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "deaf woman",
      "deaf_woman"
    ],
    u: "1f9cf-200d-2640-fe0f",
    v: [
      "1f9cf-200d-2640-fe0f-1f3fb",
      "1f9cf-200d-2640-fe0f-1f3fc",
      "1f9cf-200d-2640-fe0f-1f3fd",
      "1f9cf-200d-2640-fe0f-1f3fe",
      "1f9cf-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person bowing",
      "bow",
      "respect",
      "thanks"
    ],
    u: "1f647",
    v: [
      "1f647-1f3fb",
      "1f647-1f3fc",
      "1f647-1f3fd",
      "1f647-1f3fe",
      "1f647-1f3ff"
    ]
  },
  {
    n: [
      "man bowing",
      "bowing_man",
      "respect",
      "thanks"
    ],
    u: "1f647-200d-2642-fe0f",
    v: [
      "1f647-200d-2642-fe0f-1f3fb",
      "1f647-200d-2642-fe0f-1f3fc",
      "1f647-200d-2642-fe0f-1f3fd",
      "1f647-200d-2642-fe0f-1f3fe",
      "1f647-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman bowing",
      "bowing_woman",
      "respect",
      "thanks"
    ],
    u: "1f647-200d-2640-fe0f",
    v: [
      "1f647-200d-2640-fe0f-1f3fb",
      "1f647-200d-2640-fe0f-1f3fc",
      "1f647-200d-2640-fe0f-1f3fd",
      "1f647-200d-2640-fe0f-1f3fe",
      "1f647-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person facepalming",
      "facepalm"
    ],
    u: "1f926",
    v: [
      "1f926-1f3fb",
      "1f926-1f3fc",
      "1f926-1f3fd",
      "1f926-1f3fe",
      "1f926-1f3ff"
    ]
  },
  {
    n: [
      "man facepalming",
      "man_facepalming"
    ],
    u: "1f926-200d-2642-fe0f",
    v: [
      "1f926-200d-2642-fe0f-1f3fb",
      "1f926-200d-2642-fe0f-1f3fc",
      "1f926-200d-2642-fe0f-1f3fd",
      "1f926-200d-2642-fe0f-1f3fe",
      "1f926-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman facepalming",
      "woman_facepalming"
    ],
    u: "1f926-200d-2640-fe0f",
    v: [
      "1f926-200d-2640-fe0f-1f3fb",
      "1f926-200d-2640-fe0f-1f3fc",
      "1f926-200d-2640-fe0f-1f3fd",
      "1f926-200d-2640-fe0f-1f3fe",
      "1f926-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person shrugging",
      "shrug"
    ],
    u: "1f937",
    v: [
      "1f937-1f3fb",
      "1f937-1f3fc",
      "1f937-1f3fd",
      "1f937-1f3fe",
      "1f937-1f3ff"
    ]
  },
  {
    n: [
      "man shrugging",
      "man_shrugging"
    ],
    u: "1f937-200d-2642-fe0f",
    v: [
      "1f937-200d-2642-fe0f-1f3fb",
      "1f937-200d-2642-fe0f-1f3fc",
      "1f937-200d-2642-fe0f-1f3fd",
      "1f937-200d-2642-fe0f-1f3fe",
      "1f937-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman shrugging",
      "woman_shrugging"
    ],
    u: "1f937-200d-2640-fe0f",
    v: [
      "1f937-200d-2640-fe0f-1f3fb",
      "1f937-200d-2640-fe0f-1f3fc",
      "1f937-200d-2640-fe0f-1f3fd",
      "1f937-200d-2640-fe0f-1f3fe",
      "1f937-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "health worker",
      "health_worker"
    ],
    u: "1f9d1-200d-2695-fe0f",
    v: [
      "1f9d1-200d-2695-fe0f-1f3fb",
      "1f9d1-200d-2695-fe0f-1f3fc",
      "1f9d1-200d-2695-fe0f-1f3fd",
      "1f9d1-200d-2695-fe0f-1f3fe",
      "1f9d1-200d-2695-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man health worker",
      "man_health_worker",
      "doctor",
      "nurse"
    ],
    u: "1f468-200d-2695-fe0f",
    v: [
      "1f468-200d-2695-fe0f-1f3fb",
      "1f468-200d-2695-fe0f-1f3fc",
      "1f468-200d-2695-fe0f-1f3fd",
      "1f468-200d-2695-fe0f-1f3fe",
      "1f468-200d-2695-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman health worker",
      "woman_health_worker",
      "doctor",
      "nurse"
    ],
    u: "1f469-200d-2695-fe0f",
    v: [
      "1f469-200d-2695-fe0f-1f3fb",
      "1f469-200d-2695-fe0f-1f3fc",
      "1f469-200d-2695-fe0f-1f3fd",
      "1f469-200d-2695-fe0f-1f3fe",
      "1f469-200d-2695-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "student",
      "student"
    ],
    u: "1f9d1-200d-1f393",
    v: [
      "1f9d1-200d-1f393-1f3fb",
      "1f9d1-200d-1f393-1f3fc",
      "1f9d1-200d-1f393-1f3fd",
      "1f9d1-200d-1f393-1f3fe",
      "1f9d1-200d-1f393-1f3ff"
    ]
  },
  {
    n: [
      "man student",
      "man_student",
      "graduation"
    ],
    u: "1f468-200d-1f393",
    v: [
      "1f468-200d-1f393-1f3fb",
      "1f468-200d-1f393-1f3fc",
      "1f468-200d-1f393-1f3fd",
      "1f468-200d-1f393-1f3fe",
      "1f468-200d-1f393-1f3ff"
    ]
  },
  {
    n: [
      "woman student",
      "woman_student",
      "graduation"
    ],
    u: "1f469-200d-1f393",
    v: [
      "1f469-200d-1f393-1f3fb",
      "1f469-200d-1f393-1f3fc",
      "1f469-200d-1f393-1f3fd",
      "1f469-200d-1f393-1f3fe",
      "1f469-200d-1f393-1f3ff"
    ]
  },
  {
    n: [
      "teacher",
      "teacher"
    ],
    u: "1f9d1-200d-1f3eb",
    v: [
      "1f9d1-200d-1f3eb-1f3fb",
      "1f9d1-200d-1f3eb-1f3fc",
      "1f9d1-200d-1f3eb-1f3fd",
      "1f9d1-200d-1f3eb-1f3fe",
      "1f9d1-200d-1f3eb-1f3ff"
    ]
  },
  {
    n: [
      "man teacher",
      "man_teacher",
      "school",
      "professor"
    ],
    u: "1f468-200d-1f3eb",
    v: [
      "1f468-200d-1f3eb-1f3fb",
      "1f468-200d-1f3eb-1f3fc",
      "1f468-200d-1f3eb-1f3fd",
      "1f468-200d-1f3eb-1f3fe",
      "1f468-200d-1f3eb-1f3ff"
    ]
  },
  {
    n: [
      "woman teacher",
      "woman_teacher",
      "school",
      "professor"
    ],
    u: "1f469-200d-1f3eb",
    v: [
      "1f469-200d-1f3eb-1f3fb",
      "1f469-200d-1f3eb-1f3fc",
      "1f469-200d-1f3eb-1f3fd",
      "1f469-200d-1f3eb-1f3fe",
      "1f469-200d-1f3eb-1f3ff"
    ]
  },
  {
    n: [
      "judge",
      "judge"
    ],
    u: "1f9d1-200d-2696-fe0f",
    v: [
      "1f9d1-200d-2696-fe0f-1f3fb",
      "1f9d1-200d-2696-fe0f-1f3fc",
      "1f9d1-200d-2696-fe0f-1f3fd",
      "1f9d1-200d-2696-fe0f-1f3fe",
      "1f9d1-200d-2696-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man judge",
      "man_judge",
      "justice"
    ],
    u: "1f468-200d-2696-fe0f",
    v: [
      "1f468-200d-2696-fe0f-1f3fb",
      "1f468-200d-2696-fe0f-1f3fc",
      "1f468-200d-2696-fe0f-1f3fd",
      "1f468-200d-2696-fe0f-1f3fe",
      "1f468-200d-2696-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman judge",
      "woman_judge",
      "justice"
    ],
    u: "1f469-200d-2696-fe0f",
    v: [
      "1f469-200d-2696-fe0f-1f3fb",
      "1f469-200d-2696-fe0f-1f3fc",
      "1f469-200d-2696-fe0f-1f3fd",
      "1f469-200d-2696-fe0f-1f3fe",
      "1f469-200d-2696-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "farmer",
      "farmer"
    ],
    u: "1f9d1-200d-1f33e",
    v: [
      "1f9d1-200d-1f33e-1f3fb",
      "1f9d1-200d-1f33e-1f3fc",
      "1f9d1-200d-1f33e-1f3fd",
      "1f9d1-200d-1f33e-1f3fe",
      "1f9d1-200d-1f33e-1f3ff"
    ]
  },
  {
    n: [
      "man farmer",
      "man_farmer"
    ],
    u: "1f468-200d-1f33e",
    v: [
      "1f468-200d-1f33e-1f3fb",
      "1f468-200d-1f33e-1f3fc",
      "1f468-200d-1f33e-1f3fd",
      "1f468-200d-1f33e-1f3fe",
      "1f468-200d-1f33e-1f3ff"
    ]
  },
  {
    n: [
      "woman farmer",
      "woman_farmer"
    ],
    u: "1f469-200d-1f33e",
    v: [
      "1f469-200d-1f33e-1f3fb",
      "1f469-200d-1f33e-1f3fc",
      "1f469-200d-1f33e-1f3fd",
      "1f469-200d-1f33e-1f3fe",
      "1f469-200d-1f33e-1f3ff"
    ]
  },
  {
    n: [
      "cook",
      "cook"
    ],
    u: "1f9d1-200d-1f373",
    v: [
      "1f9d1-200d-1f373-1f3fb",
      "1f9d1-200d-1f373-1f3fc",
      "1f9d1-200d-1f373-1f3fd",
      "1f9d1-200d-1f373-1f3fe",
      "1f9d1-200d-1f373-1f3ff"
    ]
  },
  {
    n: [
      "man cook",
      "man_cook",
      "chef"
    ],
    u: "1f468-200d-1f373",
    v: [
      "1f468-200d-1f373-1f3fb",
      "1f468-200d-1f373-1f3fc",
      "1f468-200d-1f373-1f3fd",
      "1f468-200d-1f373-1f3fe",
      "1f468-200d-1f373-1f3ff"
    ]
  },
  {
    n: [
      "woman cook",
      "woman_cook",
      "chef"
    ],
    u: "1f469-200d-1f373",
    v: [
      "1f469-200d-1f373-1f3fb",
      "1f469-200d-1f373-1f3fc",
      "1f469-200d-1f373-1f3fd",
      "1f469-200d-1f373-1f3fe",
      "1f469-200d-1f373-1f3ff"
    ]
  },
  {
    n: [
      "mechanic",
      "mechanic"
    ],
    u: "1f9d1-200d-1f527",
    v: [
      "1f9d1-200d-1f527-1f3fb",
      "1f9d1-200d-1f527-1f3fc",
      "1f9d1-200d-1f527-1f3fd",
      "1f9d1-200d-1f527-1f3fe",
      "1f9d1-200d-1f527-1f3ff"
    ]
  },
  {
    n: [
      "man mechanic",
      "man_mechanic"
    ],
    u: "1f468-200d-1f527",
    v: [
      "1f468-200d-1f527-1f3fb",
      "1f468-200d-1f527-1f3fc",
      "1f468-200d-1f527-1f3fd",
      "1f468-200d-1f527-1f3fe",
      "1f468-200d-1f527-1f3ff"
    ]
  },
  {
    n: [
      "woman mechanic",
      "woman_mechanic"
    ],
    u: "1f469-200d-1f527",
    v: [
      "1f469-200d-1f527-1f3fb",
      "1f469-200d-1f527-1f3fc",
      "1f469-200d-1f527-1f3fd",
      "1f469-200d-1f527-1f3fe",
      "1f469-200d-1f527-1f3ff"
    ]
  },
  {
    n: [
      "factory worker",
      "factory_worker"
    ],
    u: "1f9d1-200d-1f3ed",
    v: [
      "1f9d1-200d-1f3ed-1f3fb",
      "1f9d1-200d-1f3ed-1f3fc",
      "1f9d1-200d-1f3ed-1f3fd",
      "1f9d1-200d-1f3ed-1f3fe",
      "1f9d1-200d-1f3ed-1f3ff"
    ]
  },
  {
    n: [
      "man factory worker",
      "man_factory_worker"
    ],
    u: "1f468-200d-1f3ed",
    v: [
      "1f468-200d-1f3ed-1f3fb",
      "1f468-200d-1f3ed-1f3fc",
      "1f468-200d-1f3ed-1f3fd",
      "1f468-200d-1f3ed-1f3fe",
      "1f468-200d-1f3ed-1f3ff"
    ]
  },
  {
    n: [
      "woman factory worker",
      "woman_factory_worker"
    ],
    u: "1f469-200d-1f3ed",
    v: [
      "1f469-200d-1f3ed-1f3fb",
      "1f469-200d-1f3ed-1f3fc",
      "1f469-200d-1f3ed-1f3fd",
      "1f469-200d-1f3ed-1f3fe",
      "1f469-200d-1f3ed-1f3ff"
    ]
  },
  {
    n: [
      "office worker",
      "office_worker"
    ],
    u: "1f9d1-200d-1f4bc",
    v: [
      "1f9d1-200d-1f4bc-1f3fb",
      "1f9d1-200d-1f4bc-1f3fc",
      "1f9d1-200d-1f4bc-1f3fd",
      "1f9d1-200d-1f4bc-1f3fe",
      "1f9d1-200d-1f4bc-1f3ff"
    ]
  },
  {
    n: [
      "man office worker",
      "man_office_worker",
      "business"
    ],
    u: "1f468-200d-1f4bc",
    v: [
      "1f468-200d-1f4bc-1f3fb",
      "1f468-200d-1f4bc-1f3fc",
      "1f468-200d-1f4bc-1f3fd",
      "1f468-200d-1f4bc-1f3fe",
      "1f468-200d-1f4bc-1f3ff"
    ]
  },
  {
    n: [
      "woman office worker",
      "woman_office_worker",
      "business"
    ],
    u: "1f469-200d-1f4bc",
    v: [
      "1f469-200d-1f4bc-1f3fb",
      "1f469-200d-1f4bc-1f3fc",
      "1f469-200d-1f4bc-1f3fd",
      "1f469-200d-1f4bc-1f3fe",
      "1f469-200d-1f4bc-1f3ff"
    ]
  },
  {
    n: [
      "scientist",
      "scientist"
    ],
    u: "1f9d1-200d-1f52c",
    v: [
      "1f9d1-200d-1f52c-1f3fb",
      "1f9d1-200d-1f52c-1f3fc",
      "1f9d1-200d-1f52c-1f3fd",
      "1f9d1-200d-1f52c-1f3fe",
      "1f9d1-200d-1f52c-1f3ff"
    ]
  },
  {
    n: [
      "man scientist",
      "man_scientist",
      "research"
    ],
    u: "1f468-200d-1f52c",
    v: [
      "1f468-200d-1f52c-1f3fb",
      "1f468-200d-1f52c-1f3fc",
      "1f468-200d-1f52c-1f3fd",
      "1f468-200d-1f52c-1f3fe",
      "1f468-200d-1f52c-1f3ff"
    ]
  },
  {
    n: [
      "woman scientist",
      "woman_scientist",
      "research"
    ],
    u: "1f469-200d-1f52c",
    v: [
      "1f469-200d-1f52c-1f3fb",
      "1f469-200d-1f52c-1f3fc",
      "1f469-200d-1f52c-1f3fd",
      "1f469-200d-1f52c-1f3fe",
      "1f469-200d-1f52c-1f3ff"
    ]
  },
  {
    n: [
      "technologist",
      "technologist"
    ],
    u: "1f9d1-200d-1f4bb",
    v: [
      "1f9d1-200d-1f4bb-1f3fb",
      "1f9d1-200d-1f4bb-1f3fc",
      "1f9d1-200d-1f4bb-1f3fd",
      "1f9d1-200d-1f4bb-1f3fe",
      "1f9d1-200d-1f4bb-1f3ff"
    ]
  },
  {
    n: [
      "man technologist",
      "man_technologist",
      "coder"
    ],
    u: "1f468-200d-1f4bb",
    v: [
      "1f468-200d-1f4bb-1f3fb",
      "1f468-200d-1f4bb-1f3fc",
      "1f468-200d-1f4bb-1f3fd",
      "1f468-200d-1f4bb-1f3fe",
      "1f468-200d-1f4bb-1f3ff"
    ]
  },
  {
    n: [
      "woman technologist",
      "woman_technologist",
      "coder"
    ],
    u: "1f469-200d-1f4bb",
    v: [
      "1f469-200d-1f4bb-1f3fb",
      "1f469-200d-1f4bb-1f3fc",
      "1f469-200d-1f4bb-1f3fd",
      "1f469-200d-1f4bb-1f3fe",
      "1f469-200d-1f4bb-1f3ff"
    ]
  },
  {
    n: [
      "singer",
      "singer"
    ],
    u: "1f9d1-200d-1f3a4",
    v: [
      "1f9d1-200d-1f3a4-1f3fb",
      "1f9d1-200d-1f3a4-1f3fc",
      "1f9d1-200d-1f3a4-1f3fd",
      "1f9d1-200d-1f3a4-1f3fe",
      "1f9d1-200d-1f3a4-1f3ff"
    ]
  },
  {
    n: [
      "man singer",
      "man_singer",
      "rockstar"
    ],
    u: "1f468-200d-1f3a4",
    v: [
      "1f468-200d-1f3a4-1f3fb",
      "1f468-200d-1f3a4-1f3fc",
      "1f468-200d-1f3a4-1f3fd",
      "1f468-200d-1f3a4-1f3fe",
      "1f468-200d-1f3a4-1f3ff"
    ]
  },
  {
    n: [
      "woman singer",
      "woman_singer",
      "rockstar"
    ],
    u: "1f469-200d-1f3a4",
    v: [
      "1f469-200d-1f3a4-1f3fb",
      "1f469-200d-1f3a4-1f3fc",
      "1f469-200d-1f3a4-1f3fd",
      "1f469-200d-1f3a4-1f3fe",
      "1f469-200d-1f3a4-1f3ff"
    ]
  },
  {
    n: [
      "artist",
      "artist"
    ],
    u: "1f9d1-200d-1f3a8",
    v: [
      "1f9d1-200d-1f3a8-1f3fb",
      "1f9d1-200d-1f3a8-1f3fc",
      "1f9d1-200d-1f3a8-1f3fd",
      "1f9d1-200d-1f3a8-1f3fe",
      "1f9d1-200d-1f3a8-1f3ff"
    ]
  },
  {
    n: [
      "man artist",
      "man_artist",
      "painter"
    ],
    u: "1f468-200d-1f3a8",
    v: [
      "1f468-200d-1f3a8-1f3fb",
      "1f468-200d-1f3a8-1f3fc",
      "1f468-200d-1f3a8-1f3fd",
      "1f468-200d-1f3a8-1f3fe",
      "1f468-200d-1f3a8-1f3ff"
    ]
  },
  {
    n: [
      "woman artist",
      "woman_artist",
      "painter"
    ],
    u: "1f469-200d-1f3a8",
    v: [
      "1f469-200d-1f3a8-1f3fb",
      "1f469-200d-1f3a8-1f3fc",
      "1f469-200d-1f3a8-1f3fd",
      "1f469-200d-1f3a8-1f3fe",
      "1f469-200d-1f3a8-1f3ff"
    ]
  },
  {
    n: [
      "pilot",
      "pilot"
    ],
    u: "1f9d1-200d-2708-fe0f",
    v: [
      "1f9d1-200d-2708-fe0f-1f3fb",
      "1f9d1-200d-2708-fe0f-1f3fc",
      "1f9d1-200d-2708-fe0f-1f3fd",
      "1f9d1-200d-2708-fe0f-1f3fe",
      "1f9d1-200d-2708-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man pilot",
      "man_pilot"
    ],
    u: "1f468-200d-2708-fe0f",
    v: [
      "1f468-200d-2708-fe0f-1f3fb",
      "1f468-200d-2708-fe0f-1f3fc",
      "1f468-200d-2708-fe0f-1f3fd",
      "1f468-200d-2708-fe0f-1f3fe",
      "1f468-200d-2708-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman pilot",
      "woman_pilot"
    ],
    u: "1f469-200d-2708-fe0f",
    v: [
      "1f469-200d-2708-fe0f-1f3fb",
      "1f469-200d-2708-fe0f-1f3fc",
      "1f469-200d-2708-fe0f-1f3fd",
      "1f469-200d-2708-fe0f-1f3fe",
      "1f469-200d-2708-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "astronaut",
      "astronaut"
    ],
    u: "1f9d1-200d-1f680",
    v: [
      "1f9d1-200d-1f680-1f3fb",
      "1f9d1-200d-1f680-1f3fc",
      "1f9d1-200d-1f680-1f3fd",
      "1f9d1-200d-1f680-1f3fe",
      "1f9d1-200d-1f680-1f3ff"
    ]
  },
  {
    n: [
      "man astronaut",
      "man_astronaut",
      "space"
    ],
    u: "1f468-200d-1f680",
    v: [
      "1f468-200d-1f680-1f3fb",
      "1f468-200d-1f680-1f3fc",
      "1f468-200d-1f680-1f3fd",
      "1f468-200d-1f680-1f3fe",
      "1f468-200d-1f680-1f3ff"
    ]
  },
  {
    n: [
      "woman astronaut",
      "woman_astronaut",
      "space"
    ],
    u: "1f469-200d-1f680",
    v: [
      "1f469-200d-1f680-1f3fb",
      "1f469-200d-1f680-1f3fc",
      "1f469-200d-1f680-1f3fd",
      "1f469-200d-1f680-1f3fe",
      "1f469-200d-1f680-1f3ff"
    ]
  },
  {
    n: [
      "firefighter",
      "firefighter"
    ],
    u: "1f9d1-200d-1f692",
    v: [
      "1f9d1-200d-1f692-1f3fb",
      "1f9d1-200d-1f692-1f3fc",
      "1f9d1-200d-1f692-1f3fd",
      "1f9d1-200d-1f692-1f3fe",
      "1f9d1-200d-1f692-1f3ff"
    ]
  },
  {
    n: [
      "man firefighter",
      "man_firefighter"
    ],
    u: "1f468-200d-1f692",
    v: [
      "1f468-200d-1f692-1f3fb",
      "1f468-200d-1f692-1f3fc",
      "1f468-200d-1f692-1f3fd",
      "1f468-200d-1f692-1f3fe",
      "1f468-200d-1f692-1f3ff"
    ]
  },
  {
    n: [
      "woman firefighter",
      "woman_firefighter"
    ],
    u: "1f469-200d-1f692",
    v: [
      "1f469-200d-1f692-1f3fb",
      "1f469-200d-1f692-1f3fc",
      "1f469-200d-1f692-1f3fd",
      "1f469-200d-1f692-1f3fe",
      "1f469-200d-1f692-1f3ff"
    ]
  },
  {
    n: [
      "police officer",
      "police_officer",
      "cop",
      "law"
    ],
    u: "1f46e",
    v: [
      "1f46e-1f3fb",
      "1f46e-1f3fc",
      "1f46e-1f3fd",
      "1f46e-1f3fe",
      "1f46e-1f3ff"
    ]
  },
  {
    n: [
      "man police officer",
      "policeman",
      "law",
      "cop"
    ],
    u: "1f46e-200d-2642-fe0f",
    v: [
      "1f46e-200d-2642-fe0f-1f3fb",
      "1f46e-200d-2642-fe0f-1f3fc",
      "1f46e-200d-2642-fe0f-1f3fd",
      "1f46e-200d-2642-fe0f-1f3fe",
      "1f46e-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman police officer",
      "policewoman",
      "law",
      "cop"
    ],
    u: "1f46e-200d-2640-fe0f",
    v: [
      "1f46e-200d-2640-fe0f-1f3fb",
      "1f46e-200d-2640-fe0f-1f3fc",
      "1f46e-200d-2640-fe0f-1f3fd",
      "1f46e-200d-2640-fe0f-1f3fe",
      "1f46e-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "detective",
      "detective",
      "sleuth"
    ],
    u: "1f575-fe0f",
    v: [
      "1f575-fe0f-1f3fb",
      "1f575-fe0f-1f3fc",
      "1f575-fe0f-1f3fd",
      "1f575-fe0f-1f3fe",
      "1f575-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man detective",
      "male_detective",
      "sleuth"
    ],
    u: "1f575-fe0f-200d-2642-fe0f",
    v: [
      "1f575-fe0f-200d-2642-fe0f-1f3fb",
      "1f575-fe0f-200d-2642-fe0f-1f3fc",
      "1f575-fe0f-200d-2642-fe0f-1f3fd",
      "1f575-fe0f-200d-2642-fe0f-1f3fe",
      "1f575-fe0f-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman detective",
      "female_detective",
      "sleuth"
    ],
    u: "1f575-fe0f-200d-2640-fe0f",
    v: [
      "1f575-fe0f-200d-2640-fe0f-1f3fb",
      "1f575-fe0f-200d-2640-fe0f-1f3fc",
      "1f575-fe0f-200d-2640-fe0f-1f3fd",
      "1f575-fe0f-200d-2640-fe0f-1f3fe",
      "1f575-fe0f-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "guard",
      "guard"
    ],
    u: "1f482",
    v: [
      "1f482-1f3fb",
      "1f482-1f3fc",
      "1f482-1f3fd",
      "1f482-1f3fe",
      "1f482-1f3ff"
    ]
  },
  {
    n: [
      "man guard",
      "guardsman"
    ],
    u: "1f482-200d-2642-fe0f",
    v: [
      "1f482-200d-2642-fe0f-1f3fb",
      "1f482-200d-2642-fe0f-1f3fc",
      "1f482-200d-2642-fe0f-1f3fd",
      "1f482-200d-2642-fe0f-1f3fe",
      "1f482-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman guard",
      "guardswoman"
    ],
    u: "1f482-200d-2640-fe0f",
    v: [
      "1f482-200d-2640-fe0f-1f3fb",
      "1f482-200d-2640-fe0f-1f3fc",
      "1f482-200d-2640-fe0f-1f3fd",
      "1f482-200d-2640-fe0f-1f3fe",
      "1f482-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "ninja",
      "ninja"
    ],
    u: "1f977",
    v: [
      "1f977-1f3fb",
      "1f977-1f3fc",
      "1f977-1f3fd",
      "1f977-1f3fe",
      "1f977-1f3ff"
    ]
  },
  {
    n: [
      "construction worker",
      "construction_worker",
      "helmet"
    ],
    u: "1f477",
    v: [
      "1f477-1f3fb",
      "1f477-1f3fc",
      "1f477-1f3fd",
      "1f477-1f3fe",
      "1f477-1f3ff"
    ]
  },
  {
    n: [
      "man construction worker",
      "construction_worker_man",
      "helmet"
    ],
    u: "1f477-200d-2642-fe0f",
    v: [
      "1f477-200d-2642-fe0f-1f3fb",
      "1f477-200d-2642-fe0f-1f3fc",
      "1f477-200d-2642-fe0f-1f3fd",
      "1f477-200d-2642-fe0f-1f3fe",
      "1f477-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman construction worker",
      "construction_worker_woman",
      "helmet"
    ],
    u: "1f477-200d-2640-fe0f",
    v: [
      "1f477-200d-2640-fe0f-1f3fb",
      "1f477-200d-2640-fe0f-1f3fc",
      "1f477-200d-2640-fe0f-1f3fd",
      "1f477-200d-2640-fe0f-1f3fe",
      "1f477-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person with crown",
      "person_with_crown"
    ],
    u: "1fac5",
    v: [
      "1fac5-1f3fb",
      "1fac5-1f3fc",
      "1fac5-1f3fd",
      "1fac5-1f3fe",
      "1fac5-1f3ff"
    ]
  },
  {
    n: [
      "prince",
      "prince",
      "crown",
      "royal"
    ],
    u: "1f934",
    v: [
      "1f934-1f3fb",
      "1f934-1f3fc",
      "1f934-1f3fd",
      "1f934-1f3fe",
      "1f934-1f3ff"
    ]
  },
  {
    n: [
      "princess",
      "princess",
      "crown",
      "royal"
    ],
    u: "1f478",
    v: [
      "1f478-1f3fb",
      "1f478-1f3fc",
      "1f478-1f3fd",
      "1f478-1f3fe",
      "1f478-1f3ff"
    ]
  },
  {
    n: [
      "person wearing turban",
      "person_with_turban"
    ],
    u: "1f473",
    v: [
      "1f473-1f3fb",
      "1f473-1f3fc",
      "1f473-1f3fd",
      "1f473-1f3fe",
      "1f473-1f3ff"
    ]
  },
  {
    n: [
      "man wearing turban",
      "man_with_turban"
    ],
    u: "1f473-200d-2642-fe0f",
    v: [
      "1f473-200d-2642-fe0f-1f3fb",
      "1f473-200d-2642-fe0f-1f3fc",
      "1f473-200d-2642-fe0f-1f3fd",
      "1f473-200d-2642-fe0f-1f3fe",
      "1f473-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman wearing turban",
      "woman_with_turban"
    ],
    u: "1f473-200d-2640-fe0f",
    v: [
      "1f473-200d-2640-fe0f-1f3fb",
      "1f473-200d-2640-fe0f-1f3fc",
      "1f473-200d-2640-fe0f-1f3fd",
      "1f473-200d-2640-fe0f-1f3fe",
      "1f473-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person with skullcap",
      "man_with_gua_pi_mao"
    ],
    u: "1f472",
    v: [
      "1f472-1f3fb",
      "1f472-1f3fc",
      "1f472-1f3fd",
      "1f472-1f3fe",
      "1f472-1f3ff"
    ]
  },
  {
    n: [
      "woman with headscarf",
      "woman_with_headscarf",
      "hijab"
    ],
    u: "1f9d5",
    v: [
      "1f9d5-1f3fb",
      "1f9d5-1f3fc",
      "1f9d5-1f3fd",
      "1f9d5-1f3fe",
      "1f9d5-1f3ff"
    ]
  },
  {
    n: [
      "person in tuxedo",
      "person_in_tuxedo",
      "groom",
      "marriage",
      "wedding"
    ],
    u: "1f935",
    v: [
      "1f935-1f3fb",
      "1f935-1f3fc",
      "1f935-1f3fd",
      "1f935-1f3fe",
      "1f935-1f3ff"
    ]
  },
  {
    n: [
      "man in tuxedo",
      "man_in_tuxedo"
    ],
    u: "1f935-200d-2642-fe0f",
    v: [
      "1f935-200d-2642-fe0f-1f3fb",
      "1f935-200d-2642-fe0f-1f3fc",
      "1f935-200d-2642-fe0f-1f3fd",
      "1f935-200d-2642-fe0f-1f3fe",
      "1f935-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman in tuxedo",
      "woman_in_tuxedo"
    ],
    u: "1f935-200d-2640-fe0f",
    v: [
      "1f935-200d-2640-fe0f-1f3fb",
      "1f935-200d-2640-fe0f-1f3fc",
      "1f935-200d-2640-fe0f-1f3fd",
      "1f935-200d-2640-fe0f-1f3fe",
      "1f935-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person with veil",
      "person_with_veil",
      "marriage",
      "wedding"
    ],
    u: "1f470",
    v: [
      "1f470-1f3fb",
      "1f470-1f3fc",
      "1f470-1f3fd",
      "1f470-1f3fe",
      "1f470-1f3ff"
    ]
  },
  {
    n: [
      "man with veil",
      "man_with_veil"
    ],
    u: "1f470-200d-2642-fe0f",
    v: [
      "1f470-200d-2642-fe0f-1f3fb",
      "1f470-200d-2642-fe0f-1f3fc",
      "1f470-200d-2642-fe0f-1f3fd",
      "1f470-200d-2642-fe0f-1f3fe",
      "1f470-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman with veil",
      "woman_with_veil",
      "bride_with_veil"
    ],
    u: "1f470-200d-2640-fe0f",
    v: [
      "1f470-200d-2640-fe0f-1f3fb",
      "1f470-200d-2640-fe0f-1f3fc",
      "1f470-200d-2640-fe0f-1f3fd",
      "1f470-200d-2640-fe0f-1f3fe",
      "1f470-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "pregnant woman",
      "pregnant_woman"
    ],
    u: "1f930",
    v: [
      "1f930-1f3fb",
      "1f930-1f3fc",
      "1f930-1f3fd",
      "1f930-1f3fe",
      "1f930-1f3ff"
    ]
  },
  {
    n: [
      "pregnant man",
      "pregnant_man"
    ],
    u: "1fac3",
    v: [
      "1fac3-1f3fb",
      "1fac3-1f3fc",
      "1fac3-1f3fd",
      "1fac3-1f3fe",
      "1fac3-1f3ff"
    ]
  },
  {
    n: [
      "pregnant person",
      "pregnant_person"
    ],
    u: "1fac4",
    v: [
      "1fac4-1f3fb",
      "1fac4-1f3fc",
      "1fac4-1f3fd",
      "1fac4-1f3fe",
      "1fac4-1f3ff"
    ]
  },
  {
    n: [
      "breast-feeding",
      "breast_feeding",
      "nursing"
    ],
    u: "1f931",
    v: [
      "1f931-1f3fb",
      "1f931-1f3fc",
      "1f931-1f3fd",
      "1f931-1f3fe",
      "1f931-1f3ff"
    ]
  },
  {
    n: [
      "woman feeding baby",
      "woman_feeding_baby"
    ],
    u: "1f469-200d-1f37c",
    v: [
      "1f469-200d-1f37c-1f3fb",
      "1f469-200d-1f37c-1f3fc",
      "1f469-200d-1f37c-1f3fd",
      "1f469-200d-1f37c-1f3fe",
      "1f469-200d-1f37c-1f3ff"
    ]
  },
  {
    n: [
      "man feeding baby",
      "man_feeding_baby"
    ],
    u: "1f468-200d-1f37c",
    v: [
      "1f468-200d-1f37c-1f3fb",
      "1f468-200d-1f37c-1f3fc",
      "1f468-200d-1f37c-1f3fd",
      "1f468-200d-1f37c-1f3fe",
      "1f468-200d-1f37c-1f3ff"
    ]
  },
  {
    n: [
      "person feeding baby",
      "person_feeding_baby"
    ],
    u: "1f9d1-200d-1f37c",
    v: [
      "1f9d1-200d-1f37c-1f3fb",
      "1f9d1-200d-1f37c-1f3fc",
      "1f9d1-200d-1f37c-1f3fd",
      "1f9d1-200d-1f37c-1f3fe",
      "1f9d1-200d-1f37c-1f3ff"
    ]
  },
  {
    n: [
      "baby angel",
      "angel"
    ],
    u: "1f47c",
    v: [
      "1f47c-1f3fb",
      "1f47c-1f3fc",
      "1f47c-1f3fd",
      "1f47c-1f3fe",
      "1f47c-1f3ff"
    ]
  },
  {
    n: [
      "Santa Claus",
      "santa",
      "christmas"
    ],
    u: "1f385",
    v: [
      "1f385-1f3fb",
      "1f385-1f3fc",
      "1f385-1f3fd",
      "1f385-1f3fe",
      "1f385-1f3ff"
    ]
  },
  {
    n: [
      "Mrs. Claus",
      "mrs_claus",
      "santa"
    ],
    u: "1f936",
    v: [
      "1f936-1f3fb",
      "1f936-1f3fc",
      "1f936-1f3fd",
      "1f936-1f3fe",
      "1f936-1f3ff"
    ]
  },
  {
    n: [
      "mx claus",
      "mx_claus"
    ],
    u: "1f9d1-200d-1f384",
    v: [
      "1f9d1-200d-1f384-1f3fb",
      "1f9d1-200d-1f384-1f3fc",
      "1f9d1-200d-1f384-1f3fd",
      "1f9d1-200d-1f384-1f3fe",
      "1f9d1-200d-1f384-1f3ff"
    ]
  },
  {
    n: [
      "superhero",
      "superhero"
    ],
    u: "1f9b8",
    v: [
      "1f9b8-1f3fb",
      "1f9b8-1f3fc",
      "1f9b8-1f3fd",
      "1f9b8-1f3fe",
      "1f9b8-1f3ff"
    ]
  },
  {
    n: [
      "man superhero",
      "superhero_man"
    ],
    u: "1f9b8-200d-2642-fe0f",
    v: [
      "1f9b8-200d-2642-fe0f-1f3fb",
      "1f9b8-200d-2642-fe0f-1f3fc",
      "1f9b8-200d-2642-fe0f-1f3fd",
      "1f9b8-200d-2642-fe0f-1f3fe",
      "1f9b8-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman superhero",
      "superhero_woman"
    ],
    u: "1f9b8-200d-2640-fe0f",
    v: [
      "1f9b8-200d-2640-fe0f-1f3fb",
      "1f9b8-200d-2640-fe0f-1f3fc",
      "1f9b8-200d-2640-fe0f-1f3fd",
      "1f9b8-200d-2640-fe0f-1f3fe",
      "1f9b8-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "supervillain",
      "supervillain"
    ],
    u: "1f9b9",
    v: [
      "1f9b9-1f3fb",
      "1f9b9-1f3fc",
      "1f9b9-1f3fd",
      "1f9b9-1f3fe",
      "1f9b9-1f3ff"
    ]
  },
  {
    n: [
      "man supervillain",
      "supervillain_man"
    ],
    u: "1f9b9-200d-2642-fe0f",
    v: [
      "1f9b9-200d-2642-fe0f-1f3fb",
      "1f9b9-200d-2642-fe0f-1f3fc",
      "1f9b9-200d-2642-fe0f-1f3fd",
      "1f9b9-200d-2642-fe0f-1f3fe",
      "1f9b9-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman supervillain",
      "supervillain_woman"
    ],
    u: "1f9b9-200d-2640-fe0f",
    v: [
      "1f9b9-200d-2640-fe0f-1f3fb",
      "1f9b9-200d-2640-fe0f-1f3fc",
      "1f9b9-200d-2640-fe0f-1f3fd",
      "1f9b9-200d-2640-fe0f-1f3fe",
      "1f9b9-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "mage",
      "mage",
      "wizard"
    ],
    u: "1f9d9",
    v: [
      "1f9d9-1f3fb",
      "1f9d9-1f3fc",
      "1f9d9-1f3fd",
      "1f9d9-1f3fe",
      "1f9d9-1f3ff"
    ]
  },
  {
    n: [
      "man mage",
      "mage_man",
      "wizard"
    ],
    u: "1f9d9-200d-2642-fe0f",
    v: [
      "1f9d9-200d-2642-fe0f-1f3fb",
      "1f9d9-200d-2642-fe0f-1f3fc",
      "1f9d9-200d-2642-fe0f-1f3fd",
      "1f9d9-200d-2642-fe0f-1f3fe",
      "1f9d9-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman mage",
      "mage_woman",
      "wizard"
    ],
    u: "1f9d9-200d-2640-fe0f",
    v: [
      "1f9d9-200d-2640-fe0f-1f3fb",
      "1f9d9-200d-2640-fe0f-1f3fc",
      "1f9d9-200d-2640-fe0f-1f3fd",
      "1f9d9-200d-2640-fe0f-1f3fe",
      "1f9d9-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "fairy",
      "fairy"
    ],
    u: "1f9da",
    v: [
      "1f9da-1f3fb",
      "1f9da-1f3fc",
      "1f9da-1f3fd",
      "1f9da-1f3fe",
      "1f9da-1f3ff"
    ]
  },
  {
    n: [
      "man fairy",
      "fairy_man"
    ],
    u: "1f9da-200d-2642-fe0f",
    v: [
      "1f9da-200d-2642-fe0f-1f3fb",
      "1f9da-200d-2642-fe0f-1f3fc",
      "1f9da-200d-2642-fe0f-1f3fd",
      "1f9da-200d-2642-fe0f-1f3fe",
      "1f9da-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman fairy",
      "fairy_woman"
    ],
    u: "1f9da-200d-2640-fe0f",
    v: [
      "1f9da-200d-2640-fe0f-1f3fb",
      "1f9da-200d-2640-fe0f-1f3fc",
      "1f9da-200d-2640-fe0f-1f3fd",
      "1f9da-200d-2640-fe0f-1f3fe",
      "1f9da-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "vampire",
      "vampire"
    ],
    u: "1f9db",
    v: [
      "1f9db-1f3fb",
      "1f9db-1f3fc",
      "1f9db-1f3fd",
      "1f9db-1f3fe",
      "1f9db-1f3ff"
    ]
  },
  {
    n: [
      "man vampire",
      "vampire_man"
    ],
    u: "1f9db-200d-2642-fe0f",
    v: [
      "1f9db-200d-2642-fe0f-1f3fb",
      "1f9db-200d-2642-fe0f-1f3fc",
      "1f9db-200d-2642-fe0f-1f3fd",
      "1f9db-200d-2642-fe0f-1f3fe",
      "1f9db-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman vampire",
      "vampire_woman"
    ],
    u: "1f9db-200d-2640-fe0f",
    v: [
      "1f9db-200d-2640-fe0f-1f3fb",
      "1f9db-200d-2640-fe0f-1f3fc",
      "1f9db-200d-2640-fe0f-1f3fd",
      "1f9db-200d-2640-fe0f-1f3fe",
      "1f9db-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "merperson",
      "merperson"
    ],
    u: "1f9dc",
    v: [
      "1f9dc-1f3fb",
      "1f9dc-1f3fc",
      "1f9dc-1f3fd",
      "1f9dc-1f3fe",
      "1f9dc-1f3ff"
    ]
  },
  {
    n: [
      "merman",
      "merman"
    ],
    u: "1f9dc-200d-2642-fe0f",
    v: [
      "1f9dc-200d-2642-fe0f-1f3fb",
      "1f9dc-200d-2642-fe0f-1f3fc",
      "1f9dc-200d-2642-fe0f-1f3fd",
      "1f9dc-200d-2642-fe0f-1f3fe",
      "1f9dc-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "mermaid",
      "mermaid"
    ],
    u: "1f9dc-200d-2640-fe0f",
    v: [
      "1f9dc-200d-2640-fe0f-1f3fb",
      "1f9dc-200d-2640-fe0f-1f3fc",
      "1f9dc-200d-2640-fe0f-1f3fd",
      "1f9dc-200d-2640-fe0f-1f3fe",
      "1f9dc-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "elf",
      "elf"
    ],
    u: "1f9dd",
    v: [
      "1f9dd-1f3fb",
      "1f9dd-1f3fc",
      "1f9dd-1f3fd",
      "1f9dd-1f3fe",
      "1f9dd-1f3ff"
    ]
  },
  {
    n: [
      "man elf",
      "elf_man"
    ],
    u: "1f9dd-200d-2642-fe0f",
    v: [
      "1f9dd-200d-2642-fe0f-1f3fb",
      "1f9dd-200d-2642-fe0f-1f3fc",
      "1f9dd-200d-2642-fe0f-1f3fd",
      "1f9dd-200d-2642-fe0f-1f3fe",
      "1f9dd-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman elf",
      "elf_woman"
    ],
    u: "1f9dd-200d-2640-fe0f",
    v: [
      "1f9dd-200d-2640-fe0f-1f3fb",
      "1f9dd-200d-2640-fe0f-1f3fc",
      "1f9dd-200d-2640-fe0f-1f3fd",
      "1f9dd-200d-2640-fe0f-1f3fe",
      "1f9dd-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "genie",
      "genie"
    ],
    u: "1f9de"
  },
  {
    n: [
      "man genie",
      "genie_man"
    ],
    u: "1f9de-200d-2642-fe0f"
  },
  {
    n: [
      "woman genie",
      "genie_woman"
    ],
    u: "1f9de-200d-2640-fe0f"
  },
  {
    n: [
      "zombie",
      "zombie"
    ],
    u: "1f9df"
  },
  {
    n: [
      "man zombie",
      "zombie_man"
    ],
    u: "1f9df-200d-2642-fe0f"
  },
  {
    n: [
      "woman zombie",
      "zombie_woman"
    ],
    u: "1f9df-200d-2640-fe0f"
  },
  {
    n: [
      "troll",
      "troll"
    ],
    u: "1f9cc"
  },
  {
    n: [
      "person getting massage",
      "massage",
      "spa"
    ],
    u: "1f486",
    v: [
      "1f486-1f3fb",
      "1f486-1f3fc",
      "1f486-1f3fd",
      "1f486-1f3fe",
      "1f486-1f3ff"
    ]
  },
  {
    n: [
      "man getting massage",
      "massage_man",
      "spa"
    ],
    u: "1f486-200d-2642-fe0f",
    v: [
      "1f486-200d-2642-fe0f-1f3fb",
      "1f486-200d-2642-fe0f-1f3fc",
      "1f486-200d-2642-fe0f-1f3fd",
      "1f486-200d-2642-fe0f-1f3fe",
      "1f486-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman getting massage",
      "massage_woman",
      "spa"
    ],
    u: "1f486-200d-2640-fe0f",
    v: [
      "1f486-200d-2640-fe0f-1f3fb",
      "1f486-200d-2640-fe0f-1f3fc",
      "1f486-200d-2640-fe0f-1f3fd",
      "1f486-200d-2640-fe0f-1f3fe",
      "1f486-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person getting haircut",
      "haircut",
      "beauty"
    ],
    u: "1f487",
    v: [
      "1f487-1f3fb",
      "1f487-1f3fc",
      "1f487-1f3fd",
      "1f487-1f3fe",
      "1f487-1f3ff"
    ]
  },
  {
    n: [
      "man getting haircut",
      "haircut_man"
    ],
    u: "1f487-200d-2642-fe0f",
    v: [
      "1f487-200d-2642-fe0f-1f3fb",
      "1f487-200d-2642-fe0f-1f3fc",
      "1f487-200d-2642-fe0f-1f3fd",
      "1f487-200d-2642-fe0f-1f3fe",
      "1f487-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman getting haircut",
      "haircut_woman"
    ],
    u: "1f487-200d-2640-fe0f",
    v: [
      "1f487-200d-2640-fe0f-1f3fb",
      "1f487-200d-2640-fe0f-1f3fc",
      "1f487-200d-2640-fe0f-1f3fd",
      "1f487-200d-2640-fe0f-1f3fe",
      "1f487-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person walking",
      "walking"
    ],
    u: "1f6b6",
    v: [
      "1f6b6-1f3fb",
      "1f6b6-1f3fc",
      "1f6b6-1f3fd",
      "1f6b6-1f3fe",
      "1f6b6-1f3ff"
    ]
  },
  {
    n: [
      "man walking",
      "walking_man"
    ],
    u: "1f6b6-200d-2642-fe0f",
    v: [
      "1f6b6-200d-2642-fe0f-1f3fb",
      "1f6b6-200d-2642-fe0f-1f3fc",
      "1f6b6-200d-2642-fe0f-1f3fd",
      "1f6b6-200d-2642-fe0f-1f3fe",
      "1f6b6-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman walking",
      "walking_woman"
    ],
    u: "1f6b6-200d-2640-fe0f",
    v: [
      "1f6b6-200d-2640-fe0f-1f3fb",
      "1f6b6-200d-2640-fe0f-1f3fc",
      "1f6b6-200d-2640-fe0f-1f3fd",
      "1f6b6-200d-2640-fe0f-1f3fe",
      "1f6b6-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person standing",
      "standing_person"
    ],
    u: "1f9cd",
    v: [
      "1f9cd-1f3fb",
      "1f9cd-1f3fc",
      "1f9cd-1f3fd",
      "1f9cd-1f3fe",
      "1f9cd-1f3ff"
    ]
  },
  {
    n: [
      "man standing",
      "standing_man"
    ],
    u: "1f9cd-200d-2642-fe0f",
    v: [
      "1f9cd-200d-2642-fe0f-1f3fb",
      "1f9cd-200d-2642-fe0f-1f3fc",
      "1f9cd-200d-2642-fe0f-1f3fd",
      "1f9cd-200d-2642-fe0f-1f3fe",
      "1f9cd-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman standing",
      "standing_woman"
    ],
    u: "1f9cd-200d-2640-fe0f",
    v: [
      "1f9cd-200d-2640-fe0f-1f3fb",
      "1f9cd-200d-2640-fe0f-1f3fc",
      "1f9cd-200d-2640-fe0f-1f3fd",
      "1f9cd-200d-2640-fe0f-1f3fe",
      "1f9cd-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person kneeling",
      "kneeling_person"
    ],
    u: "1f9ce",
    v: [
      "1f9ce-1f3fb",
      "1f9ce-1f3fc",
      "1f9ce-1f3fd",
      "1f9ce-1f3fe",
      "1f9ce-1f3ff"
    ]
  },
  {
    n: [
      "man kneeling",
      "kneeling_man"
    ],
    u: "1f9ce-200d-2642-fe0f",
    v: [
      "1f9ce-200d-2642-fe0f-1f3fb",
      "1f9ce-200d-2642-fe0f-1f3fc",
      "1f9ce-200d-2642-fe0f-1f3fd",
      "1f9ce-200d-2642-fe0f-1f3fe",
      "1f9ce-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman kneeling",
      "kneeling_woman"
    ],
    u: "1f9ce-200d-2640-fe0f",
    v: [
      "1f9ce-200d-2640-fe0f-1f3fb",
      "1f9ce-200d-2640-fe0f-1f3fc",
      "1f9ce-200d-2640-fe0f-1f3fd",
      "1f9ce-200d-2640-fe0f-1f3fe",
      "1f9ce-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person with white cane",
      "person_with_probing_cane"
    ],
    u: "1f9d1-200d-1f9af",
    v: [
      "1f9d1-200d-1f9af-1f3fb",
      "1f9d1-200d-1f9af-1f3fc",
      "1f9d1-200d-1f9af-1f3fd",
      "1f9d1-200d-1f9af-1f3fe",
      "1f9d1-200d-1f9af-1f3ff"
    ]
  },
  {
    n: [
      "man with white cane",
      "man_with_probing_cane"
    ],
    u: "1f468-200d-1f9af",
    v: [
      "1f468-200d-1f9af-1f3fb",
      "1f468-200d-1f9af-1f3fc",
      "1f468-200d-1f9af-1f3fd",
      "1f468-200d-1f9af-1f3fe",
      "1f468-200d-1f9af-1f3ff"
    ]
  },
  {
    n: [
      "woman with white cane",
      "woman_with_probing_cane"
    ],
    u: "1f469-200d-1f9af",
    v: [
      "1f469-200d-1f9af-1f3fb",
      "1f469-200d-1f9af-1f3fc",
      "1f469-200d-1f9af-1f3fd",
      "1f469-200d-1f9af-1f3fe",
      "1f469-200d-1f9af-1f3ff"
    ]
  },
  {
    n: [
      "person in motorized wheelchair",
      "person_in_motorized_wheelchair"
    ],
    u: "1f9d1-200d-1f9bc",
    v: [
      "1f9d1-200d-1f9bc-1f3fb",
      "1f9d1-200d-1f9bc-1f3fc",
      "1f9d1-200d-1f9bc-1f3fd",
      "1f9d1-200d-1f9bc-1f3fe",
      "1f9d1-200d-1f9bc-1f3ff"
    ]
  },
  {
    n: [
      "man in motorized wheelchair",
      "man_in_motorized_wheelchair"
    ],
    u: "1f468-200d-1f9bc",
    v: [
      "1f468-200d-1f9bc-1f3fb",
      "1f468-200d-1f9bc-1f3fc",
      "1f468-200d-1f9bc-1f3fd",
      "1f468-200d-1f9bc-1f3fe",
      "1f468-200d-1f9bc-1f3ff"
    ]
  },
  {
    n: [
      "woman in motorized wheelchair",
      "woman_in_motorized_wheelchair"
    ],
    u: "1f469-200d-1f9bc",
    v: [
      "1f469-200d-1f9bc-1f3fb",
      "1f469-200d-1f9bc-1f3fc",
      "1f469-200d-1f9bc-1f3fd",
      "1f469-200d-1f9bc-1f3fe",
      "1f469-200d-1f9bc-1f3ff"
    ]
  },
  {
    n: [
      "person in manual wheelchair",
      "person_in_manual_wheelchair"
    ],
    u: "1f9d1-200d-1f9bd",
    v: [
      "1f9d1-200d-1f9bd-1f3fb",
      "1f9d1-200d-1f9bd-1f3fc",
      "1f9d1-200d-1f9bd-1f3fd",
      "1f9d1-200d-1f9bd-1f3fe",
      "1f9d1-200d-1f9bd-1f3ff"
    ]
  },
  {
    n: [
      "man in manual wheelchair",
      "man_in_manual_wheelchair"
    ],
    u: "1f468-200d-1f9bd",
    v: [
      "1f468-200d-1f9bd-1f3fb",
      "1f468-200d-1f9bd-1f3fc",
      "1f468-200d-1f9bd-1f3fd",
      "1f468-200d-1f9bd-1f3fe",
      "1f468-200d-1f9bd-1f3ff"
    ]
  },
  {
    n: [
      "woman in manual wheelchair",
      "woman_in_manual_wheelchair"
    ],
    u: "1f469-200d-1f9bd",
    v: [
      "1f469-200d-1f9bd-1f3fb",
      "1f469-200d-1f9bd-1f3fc",
      "1f469-200d-1f9bd-1f3fd",
      "1f469-200d-1f9bd-1f3fe",
      "1f469-200d-1f9bd-1f3ff"
    ]
  },
  {
    n: [
      "person running",
      "runner",
      "running",
      "exercise",
      "workout",
      "marathon"
    ],
    u: "1f3c3",
    v: [
      "1f3c3-1f3fb",
      "1f3c3-1f3fc",
      "1f3c3-1f3fd",
      "1f3c3-1f3fe",
      "1f3c3-1f3ff"
    ]
  },
  {
    n: [
      "man running",
      "running_man",
      "exercise",
      "workout",
      "marathon"
    ],
    u: "1f3c3-200d-2642-fe0f",
    v: [
      "1f3c3-200d-2642-fe0f-1f3fb",
      "1f3c3-200d-2642-fe0f-1f3fc",
      "1f3c3-200d-2642-fe0f-1f3fd",
      "1f3c3-200d-2642-fe0f-1f3fe",
      "1f3c3-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman running",
      "running_woman",
      "exercise",
      "workout",
      "marathon"
    ],
    u: "1f3c3-200d-2640-fe0f",
    v: [
      "1f3c3-200d-2640-fe0f-1f3fb",
      "1f3c3-200d-2640-fe0f-1f3fc",
      "1f3c3-200d-2640-fe0f-1f3fd",
      "1f3c3-200d-2640-fe0f-1f3fe",
      "1f3c3-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman dancing",
      "woman_dancing",
      "dancer",
      "dress"
    ],
    u: "1f483",
    v: [
      "1f483-1f3fb",
      "1f483-1f3fc",
      "1f483-1f3fd",
      "1f483-1f3fe",
      "1f483-1f3ff"
    ]
  },
  {
    n: [
      "man dancing",
      "man_dancing",
      "dancer"
    ],
    u: "1f57a",
    v: [
      "1f57a-1f3fb",
      "1f57a-1f3fc",
      "1f57a-1f3fd",
      "1f57a-1f3fe",
      "1f57a-1f3ff"
    ]
  },
  {
    n: [
      "person in suit levitating",
      "business_suit_levitating"
    ],
    u: "1f574-fe0f",
    v: [
      "1f574-fe0f-1f3fb",
      "1f574-fe0f-1f3fc",
      "1f574-fe0f-1f3fd",
      "1f574-fe0f-1f3fe",
      "1f574-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "people with bunny ears",
      "dancers",
      "bunny"
    ],
    u: "1f46f"
  },
  {
    n: [
      "men with bunny ears",
      "dancing_men",
      "bunny"
    ],
    u: "1f46f-200d-2642-fe0f"
  },
  {
    n: [
      "women with bunny ears",
      "dancing_women",
      "bunny"
    ],
    u: "1f46f-200d-2640-fe0f"
  },
  {
    n: [
      "person in steamy room",
      "sauna_person",
      "steamy"
    ],
    u: "1f9d6",
    v: [
      "1f9d6-1f3fb",
      "1f9d6-1f3fc",
      "1f9d6-1f3fd",
      "1f9d6-1f3fe",
      "1f9d6-1f3ff"
    ]
  },
  {
    n: [
      "man in steamy room",
      "sauna_man",
      "steamy"
    ],
    u: "1f9d6-200d-2642-fe0f",
    v: [
      "1f9d6-200d-2642-fe0f-1f3fb",
      "1f9d6-200d-2642-fe0f-1f3fc",
      "1f9d6-200d-2642-fe0f-1f3fd",
      "1f9d6-200d-2642-fe0f-1f3fe",
      "1f9d6-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman in steamy room",
      "sauna_woman",
      "steamy"
    ],
    u: "1f9d6-200d-2640-fe0f",
    v: [
      "1f9d6-200d-2640-fe0f-1f3fb",
      "1f9d6-200d-2640-fe0f-1f3fc",
      "1f9d6-200d-2640-fe0f-1f3fd",
      "1f9d6-200d-2640-fe0f-1f3fe",
      "1f9d6-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person climbing",
      "climbing",
      "bouldering"
    ],
    u: "1f9d7",
    v: [
      "1f9d7-1f3fb",
      "1f9d7-1f3fc",
      "1f9d7-1f3fd",
      "1f9d7-1f3fe",
      "1f9d7-1f3ff"
    ]
  },
  {
    n: [
      "man climbing",
      "climbing_man",
      "bouldering"
    ],
    u: "1f9d7-200d-2642-fe0f",
    v: [
      "1f9d7-200d-2642-fe0f-1f3fb",
      "1f9d7-200d-2642-fe0f-1f3fc",
      "1f9d7-200d-2642-fe0f-1f3fd",
      "1f9d7-200d-2642-fe0f-1f3fe",
      "1f9d7-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman climbing",
      "climbing_woman",
      "bouldering"
    ],
    u: "1f9d7-200d-2640-fe0f",
    v: [
      "1f9d7-200d-2640-fe0f-1f3fb",
      "1f9d7-200d-2640-fe0f-1f3fc",
      "1f9d7-200d-2640-fe0f-1f3fd",
      "1f9d7-200d-2640-fe0f-1f3fe",
      "1f9d7-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person fencing",
      "person_fencing"
    ],
    u: "1f93a"
  },
  {
    n: [
      "horse racing",
      "horse_racing"
    ],
    u: "1f3c7",
    v: [
      "1f3c7-1f3fb",
      "1f3c7-1f3fc",
      "1f3c7-1f3fd",
      "1f3c7-1f3fe",
      "1f3c7-1f3ff"
    ]
  },
  {
    n: [
      "skier",
      "skier"
    ],
    u: "26f7-fe0f"
  },
  {
    n: [
      "snowboarder",
      "snowboarder"
    ],
    u: "1f3c2",
    v: [
      "1f3c2-1f3fb",
      "1f3c2-1f3fc",
      "1f3c2-1f3fd",
      "1f3c2-1f3fe",
      "1f3c2-1f3ff"
    ]
  },
  {
    n: [
      "person golfing",
      "golfing"
    ],
    u: "1f3cc-fe0f",
    v: [
      "1f3cc-fe0f-1f3fb",
      "1f3cc-fe0f-1f3fc",
      "1f3cc-fe0f-1f3fd",
      "1f3cc-fe0f-1f3fe",
      "1f3cc-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man golfing",
      "golfing_man"
    ],
    u: "1f3cc-fe0f-200d-2642-fe0f",
    v: [
      "1f3cc-fe0f-200d-2642-fe0f-1f3fb",
      "1f3cc-fe0f-200d-2642-fe0f-1f3fc",
      "1f3cc-fe0f-200d-2642-fe0f-1f3fd",
      "1f3cc-fe0f-200d-2642-fe0f-1f3fe",
      "1f3cc-fe0f-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman golfing",
      "golfing_woman"
    ],
    u: "1f3cc-fe0f-200d-2640-fe0f",
    v: [
      "1f3cc-fe0f-200d-2640-fe0f-1f3fb",
      "1f3cc-fe0f-200d-2640-fe0f-1f3fc",
      "1f3cc-fe0f-200d-2640-fe0f-1f3fd",
      "1f3cc-fe0f-200d-2640-fe0f-1f3fe",
      "1f3cc-fe0f-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person surfing",
      "surfer"
    ],
    u: "1f3c4",
    v: [
      "1f3c4-1f3fb",
      "1f3c4-1f3fc",
      "1f3c4-1f3fd",
      "1f3c4-1f3fe",
      "1f3c4-1f3ff"
    ]
  },
  {
    n: [
      "man surfing",
      "surfing_man"
    ],
    u: "1f3c4-200d-2642-fe0f",
    v: [
      "1f3c4-200d-2642-fe0f-1f3fb",
      "1f3c4-200d-2642-fe0f-1f3fc",
      "1f3c4-200d-2642-fe0f-1f3fd",
      "1f3c4-200d-2642-fe0f-1f3fe",
      "1f3c4-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman surfing",
      "surfing_woman"
    ],
    u: "1f3c4-200d-2640-fe0f",
    v: [
      "1f3c4-200d-2640-fe0f-1f3fb",
      "1f3c4-200d-2640-fe0f-1f3fc",
      "1f3c4-200d-2640-fe0f-1f3fd",
      "1f3c4-200d-2640-fe0f-1f3fe",
      "1f3c4-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person rowing boat",
      "rowboat"
    ],
    u: "1f6a3",
    v: [
      "1f6a3-1f3fb",
      "1f6a3-1f3fc",
      "1f6a3-1f3fd",
      "1f6a3-1f3fe",
      "1f6a3-1f3ff"
    ]
  },
  {
    n: [
      "man rowing boat",
      "rowing_man"
    ],
    u: "1f6a3-200d-2642-fe0f",
    v: [
      "1f6a3-200d-2642-fe0f-1f3fb",
      "1f6a3-200d-2642-fe0f-1f3fc",
      "1f6a3-200d-2642-fe0f-1f3fd",
      "1f6a3-200d-2642-fe0f-1f3fe",
      "1f6a3-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman rowing boat",
      "rowing_woman"
    ],
    u: "1f6a3-200d-2640-fe0f",
    v: [
      "1f6a3-200d-2640-fe0f-1f3fb",
      "1f6a3-200d-2640-fe0f-1f3fc",
      "1f6a3-200d-2640-fe0f-1f3fd",
      "1f6a3-200d-2640-fe0f-1f3fe",
      "1f6a3-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person swimming",
      "swimmer"
    ],
    u: "1f3ca",
    v: [
      "1f3ca-1f3fb",
      "1f3ca-1f3fc",
      "1f3ca-1f3fd",
      "1f3ca-1f3fe",
      "1f3ca-1f3ff"
    ]
  },
  {
    n: [
      "man swimming",
      "swimming_man"
    ],
    u: "1f3ca-200d-2642-fe0f",
    v: [
      "1f3ca-200d-2642-fe0f-1f3fb",
      "1f3ca-200d-2642-fe0f-1f3fc",
      "1f3ca-200d-2642-fe0f-1f3fd",
      "1f3ca-200d-2642-fe0f-1f3fe",
      "1f3ca-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman swimming",
      "swimming_woman"
    ],
    u: "1f3ca-200d-2640-fe0f",
    v: [
      "1f3ca-200d-2640-fe0f-1f3fb",
      "1f3ca-200d-2640-fe0f-1f3fc",
      "1f3ca-200d-2640-fe0f-1f3fd",
      "1f3ca-200d-2640-fe0f-1f3fe",
      "1f3ca-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person bouncing ball",
      "bouncing_ball_person",
      "basketball"
    ],
    u: "26f9-fe0f",
    v: [
      "26f9-fe0f-1f3fb",
      "26f9-fe0f-1f3fc",
      "26f9-fe0f-1f3fd",
      "26f9-fe0f-1f3fe",
      "26f9-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man bouncing ball",
      "bouncing_ball_man",
      "basketball_man"
    ],
    u: "26f9-fe0f-200d-2642-fe0f",
    v: [
      "26f9-fe0f-200d-2642-fe0f-1f3fb",
      "26f9-fe0f-200d-2642-fe0f-1f3fc",
      "26f9-fe0f-200d-2642-fe0f-1f3fd",
      "26f9-fe0f-200d-2642-fe0f-1f3fe",
      "26f9-fe0f-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman bouncing ball",
      "bouncing_ball_woman",
      "basketball_woman"
    ],
    u: "26f9-fe0f-200d-2640-fe0f",
    v: [
      "26f9-fe0f-200d-2640-fe0f-1f3fb",
      "26f9-fe0f-200d-2640-fe0f-1f3fc",
      "26f9-fe0f-200d-2640-fe0f-1f3fd",
      "26f9-fe0f-200d-2640-fe0f-1f3fe",
      "26f9-fe0f-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person lifting weights",
      "weight_lifting",
      "gym",
      "workout"
    ],
    u: "1f3cb-fe0f",
    v: [
      "1f3cb-fe0f-1f3fb",
      "1f3cb-fe0f-1f3fc",
      "1f3cb-fe0f-1f3fd",
      "1f3cb-fe0f-1f3fe",
      "1f3cb-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "man lifting weights",
      "weight_lifting_man",
      "gym",
      "workout"
    ],
    u: "1f3cb-fe0f-200d-2642-fe0f",
    v: [
      "1f3cb-fe0f-200d-2642-fe0f-1f3fb",
      "1f3cb-fe0f-200d-2642-fe0f-1f3fc",
      "1f3cb-fe0f-200d-2642-fe0f-1f3fd",
      "1f3cb-fe0f-200d-2642-fe0f-1f3fe",
      "1f3cb-fe0f-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman lifting weights",
      "weight_lifting_woman",
      "gym",
      "workout"
    ],
    u: "1f3cb-fe0f-200d-2640-fe0f",
    v: [
      "1f3cb-fe0f-200d-2640-fe0f-1f3fb",
      "1f3cb-fe0f-200d-2640-fe0f-1f3fc",
      "1f3cb-fe0f-200d-2640-fe0f-1f3fd",
      "1f3cb-fe0f-200d-2640-fe0f-1f3fe",
      "1f3cb-fe0f-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person biking",
      "bicyclist"
    ],
    u: "1f6b4",
    v: [
      "1f6b4-1f3fb",
      "1f6b4-1f3fc",
      "1f6b4-1f3fd",
      "1f6b4-1f3fe",
      "1f6b4-1f3ff"
    ]
  },
  {
    n: [
      "man biking",
      "biking_man"
    ],
    u: "1f6b4-200d-2642-fe0f",
    v: [
      "1f6b4-200d-2642-fe0f-1f3fb",
      "1f6b4-200d-2642-fe0f-1f3fc",
      "1f6b4-200d-2642-fe0f-1f3fd",
      "1f6b4-200d-2642-fe0f-1f3fe",
      "1f6b4-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman biking",
      "biking_woman"
    ],
    u: "1f6b4-200d-2640-fe0f",
    v: [
      "1f6b4-200d-2640-fe0f-1f3fb",
      "1f6b4-200d-2640-fe0f-1f3fc",
      "1f6b4-200d-2640-fe0f-1f3fd",
      "1f6b4-200d-2640-fe0f-1f3fe",
      "1f6b4-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person mountain biking",
      "mountain_bicyclist"
    ],
    u: "1f6b5",
    v: [
      "1f6b5-1f3fb",
      "1f6b5-1f3fc",
      "1f6b5-1f3fd",
      "1f6b5-1f3fe",
      "1f6b5-1f3ff"
    ]
  },
  {
    n: [
      "man mountain biking",
      "mountain_biking_man"
    ],
    u: "1f6b5-200d-2642-fe0f",
    v: [
      "1f6b5-200d-2642-fe0f-1f3fb",
      "1f6b5-200d-2642-fe0f-1f3fc",
      "1f6b5-200d-2642-fe0f-1f3fd",
      "1f6b5-200d-2642-fe0f-1f3fe",
      "1f6b5-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman mountain biking",
      "mountain_biking_woman"
    ],
    u: "1f6b5-200d-2640-fe0f",
    v: [
      "1f6b5-200d-2640-fe0f-1f3fb",
      "1f6b5-200d-2640-fe0f-1f3fc",
      "1f6b5-200d-2640-fe0f-1f3fd",
      "1f6b5-200d-2640-fe0f-1f3fe",
      "1f6b5-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person cartwheeling",
      "cartwheeling"
    ],
    u: "1f938",
    v: [
      "1f938-1f3fb",
      "1f938-1f3fc",
      "1f938-1f3fd",
      "1f938-1f3fe",
      "1f938-1f3ff"
    ]
  },
  {
    n: [
      "man cartwheeling",
      "man_cartwheeling"
    ],
    u: "1f938-200d-2642-fe0f",
    v: [
      "1f938-200d-2642-fe0f-1f3fb",
      "1f938-200d-2642-fe0f-1f3fc",
      "1f938-200d-2642-fe0f-1f3fd",
      "1f938-200d-2642-fe0f-1f3fe",
      "1f938-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman cartwheeling",
      "woman_cartwheeling"
    ],
    u: "1f938-200d-2640-fe0f",
    v: [
      "1f938-200d-2640-fe0f-1f3fb",
      "1f938-200d-2640-fe0f-1f3fc",
      "1f938-200d-2640-fe0f-1f3fd",
      "1f938-200d-2640-fe0f-1f3fe",
      "1f938-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "people wrestling",
      "wrestling"
    ],
    u: "1f93c"
  },
  {
    n: [
      "men wrestling",
      "men_wrestling"
    ],
    u: "1f93c-200d-2642-fe0f"
  },
  {
    n: [
      "women wrestling",
      "women_wrestling"
    ],
    u: "1f93c-200d-2640-fe0f"
  },
  {
    n: [
      "person playing water polo",
      "water_polo"
    ],
    u: "1f93d",
    v: [
      "1f93d-1f3fb",
      "1f93d-1f3fc",
      "1f93d-1f3fd",
      "1f93d-1f3fe",
      "1f93d-1f3ff"
    ]
  },
  {
    n: [
      "man playing water polo",
      "man_playing_water_polo"
    ],
    u: "1f93d-200d-2642-fe0f",
    v: [
      "1f93d-200d-2642-fe0f-1f3fb",
      "1f93d-200d-2642-fe0f-1f3fc",
      "1f93d-200d-2642-fe0f-1f3fd",
      "1f93d-200d-2642-fe0f-1f3fe",
      "1f93d-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman playing water polo",
      "woman_playing_water_polo"
    ],
    u: "1f93d-200d-2640-fe0f",
    v: [
      "1f93d-200d-2640-fe0f-1f3fb",
      "1f93d-200d-2640-fe0f-1f3fc",
      "1f93d-200d-2640-fe0f-1f3fd",
      "1f93d-200d-2640-fe0f-1f3fe",
      "1f93d-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person playing handball",
      "handball_person"
    ],
    u: "1f93e",
    v: [
      "1f93e-1f3fb",
      "1f93e-1f3fc",
      "1f93e-1f3fd",
      "1f93e-1f3fe",
      "1f93e-1f3ff"
    ]
  },
  {
    n: [
      "man playing handball",
      "man_playing_handball"
    ],
    u: "1f93e-200d-2642-fe0f",
    v: [
      "1f93e-200d-2642-fe0f-1f3fb",
      "1f93e-200d-2642-fe0f-1f3fc",
      "1f93e-200d-2642-fe0f-1f3fd",
      "1f93e-200d-2642-fe0f-1f3fe",
      "1f93e-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman playing handball",
      "woman_playing_handball"
    ],
    u: "1f93e-200d-2640-fe0f",
    v: [
      "1f93e-200d-2640-fe0f-1f3fb",
      "1f93e-200d-2640-fe0f-1f3fc",
      "1f93e-200d-2640-fe0f-1f3fd",
      "1f93e-200d-2640-fe0f-1f3fe",
      "1f93e-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person juggling",
      "juggling_person"
    ],
    u: "1f939",
    v: [
      "1f939-1f3fb",
      "1f939-1f3fc",
      "1f939-1f3fd",
      "1f939-1f3fe",
      "1f939-1f3ff"
    ]
  },
  {
    n: [
      "man juggling",
      "man_juggling"
    ],
    u: "1f939-200d-2642-fe0f",
    v: [
      "1f939-200d-2642-fe0f-1f3fb",
      "1f939-200d-2642-fe0f-1f3fc",
      "1f939-200d-2642-fe0f-1f3fd",
      "1f939-200d-2642-fe0f-1f3fe",
      "1f939-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman juggling",
      "woman_juggling"
    ],
    u: "1f939-200d-2640-fe0f",
    v: [
      "1f939-200d-2640-fe0f-1f3fb",
      "1f939-200d-2640-fe0f-1f3fc",
      "1f939-200d-2640-fe0f-1f3fd",
      "1f939-200d-2640-fe0f-1f3fe",
      "1f939-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person in lotus position",
      "lotus_position",
      "meditation"
    ],
    u: "1f9d8",
    v: [
      "1f9d8-1f3fb",
      "1f9d8-1f3fc",
      "1f9d8-1f3fd",
      "1f9d8-1f3fe",
      "1f9d8-1f3ff"
    ]
  },
  {
    n: [
      "man in lotus position",
      "lotus_position_man",
      "meditation"
    ],
    u: "1f9d8-200d-2642-fe0f",
    v: [
      "1f9d8-200d-2642-fe0f-1f3fb",
      "1f9d8-200d-2642-fe0f-1f3fc",
      "1f9d8-200d-2642-fe0f-1f3fd",
      "1f9d8-200d-2642-fe0f-1f3fe",
      "1f9d8-200d-2642-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "woman in lotus position",
      "lotus_position_woman",
      "meditation"
    ],
    u: "1f9d8-200d-2640-fe0f",
    v: [
      "1f9d8-200d-2640-fe0f-1f3fb",
      "1f9d8-200d-2640-fe0f-1f3fc",
      "1f9d8-200d-2640-fe0f-1f3fd",
      "1f9d8-200d-2640-fe0f-1f3fe",
      "1f9d8-200d-2640-fe0f-1f3ff"
    ]
  },
  {
    n: [
      "person taking bath",
      "bath",
      "shower"
    ],
    u: "1f6c0",
    v: [
      "1f6c0-1f3fb",
      "1f6c0-1f3fc",
      "1f6c0-1f3fd",
      "1f6c0-1f3fe",
      "1f6c0-1f3ff"
    ]
  },
  {
    n: [
      "person in bed",
      "sleeping_bed"
    ],
    u: "1f6cc",
    v: [
      "1f6cc-1f3fb",
      "1f6cc-1f3fc",
      "1f6cc-1f3fd",
      "1f6cc-1f3fe",
      "1f6cc-1f3ff"
    ]
  },
  {
    n: [
      "people holding hands",
      "people_holding_hands",
      "couple",
      "date"
    ],
    u: "1f9d1-200d-1f91d-200d-1f9d1"
  },
  {
    n: [
      "women holding hands",
      "two_women_holding_hands",
      "couple",
      "date"
    ],
    u: "1f46d",
    v: [
      "1f46d-1f3fb",
      "1f46d-1f3fc",
      "1f46d-1f3fd",
      "1f46d-1f3fe",
      "1f46d-1f3ff"
    ]
  },
  {
    n: [
      "woman and man holding hands",
      "couple",
      "date"
    ],
    u: "1f46b",
    v: [
      "1f46b-1f3fb",
      "1f46b-1f3fc",
      "1f46b-1f3fd",
      "1f46b-1f3fe",
      "1f46b-1f3ff"
    ]
  },
  {
    n: [
      "men holding hands",
      "two_men_holding_hands",
      "couple",
      "date"
    ],
    u: "1f46c",
    v: [
      "1f46c-1f3fb",
      "1f46c-1f3fc",
      "1f46c-1f3fd",
      "1f46c-1f3fe",
      "1f46c-1f3ff"
    ]
  },
  {
    n: [
      "kiss",
      "couplekiss"
    ],
    u: "1f48f",
    v: [
      "1f48f-1f3fb",
      "1f48f-1f3fc",
      "1f48f-1f3fd",
      "1f48f-1f3fe",
      "1f48f-1f3ff"
    ]
  },
  {
    n: [
      "kiss: woman, man",
      "couplekiss_man_woman"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",
    v: [
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"
    ]
  },
  {
    n: [
      "kiss: man, man",
      "couplekiss_man_man"
    ],
    u: "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",
    v: [
      "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"
    ]
  },
  {
    n: [
      "kiss: woman, woman",
      "couplekiss_woman_woman"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",
    v: [
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff"
    ]
  },
  {
    n: [
      "couple with heart",
      "couple_with_heart"
    ],
    u: "1f491",
    v: [
      "1f491-1f3fb",
      "1f491-1f3fc",
      "1f491-1f3fd",
      "1f491-1f3fe",
      "1f491-1f3ff"
    ]
  },
  {
    n: [
      "couple with heart: woman, man",
      "couple_with_heart_woman_man"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f468",
    v: [
      "1f469-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f469-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f469-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f469-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f469-200d-2764-fe0f-200d-1f468-1f3ff"
    ]
  },
  {
    n: [
      "couple with heart: man, man",
      "couple_with_heart_man_man"
    ],
    u: "1f468-200d-2764-fe0f-200d-1f468",
    v: [
      "1f468-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f468-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f468-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f468-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f468-200d-2764-fe0f-200d-1f468-1f3ff"
    ]
  },
  {
    n: [
      "couple with heart: woman, woman",
      "couple_with_heart_woman_woman"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f469",
    v: [
      "1f469-200d-2764-fe0f-200d-1f469-1f3fb",
      "1f469-200d-2764-fe0f-200d-1f469-1f3fc",
      "1f469-200d-2764-fe0f-200d-1f469-1f3fd",
      "1f469-200d-2764-fe0f-200d-1f469-1f3fe",
      "1f469-200d-2764-fe0f-200d-1f469-1f3ff"
    ]
  },
  {
    n: [
      "family",
      "family",
      "home",
      "parents",
      "child"
    ],
    u: "1f46a"
  },
  {
    n: [
      "family: man, woman, boy",
      "family_man_woman_boy"
    ],
    u: "1f468-200d-1f469-200d-1f466"
  },
  {
    n: [
      "family: man, woman, girl",
      "family_man_woman_girl"
    ],
    u: "1f468-200d-1f469-200d-1f467"
  },
  {
    n: [
      "family: man, woman, girl, boy",
      "family_man_woman_girl_boy"
    ],
    u: "1f468-200d-1f469-200d-1f467-200d-1f466"
  },
  {
    n: [
      "family: man, woman, boy, boy",
      "family_man_woman_boy_boy"
    ],
    u: "1f468-200d-1f469-200d-1f466-200d-1f466"
  },
  {
    n: [
      "family: man, woman, girl, girl",
      "family_man_woman_girl_girl"
    ],
    u: "1f468-200d-1f469-200d-1f467-200d-1f467"
  },
  {
    n: [
      "family: man, man, boy",
      "family_man_man_boy"
    ],
    u: "1f468-200d-1f468-200d-1f466"
  },
  {
    n: [
      "family: man, man, girl",
      "family_man_man_girl"
    ],
    u: "1f468-200d-1f468-200d-1f467"
  },
  {
    n: [
      "family: man, man, girl, boy",
      "family_man_man_girl_boy"
    ],
    u: "1f468-200d-1f468-200d-1f467-200d-1f466"
  },
  {
    n: [
      "family: man, man, boy, boy",
      "family_man_man_boy_boy"
    ],
    u: "1f468-200d-1f468-200d-1f466-200d-1f466"
  },
  {
    n: [
      "family: man, man, girl, girl",
      "family_man_man_girl_girl"
    ],
    u: "1f468-200d-1f468-200d-1f467-200d-1f467"
  },
  {
    n: [
      "family: woman, woman, boy",
      "family_woman_woman_boy"
    ],
    u: "1f469-200d-1f469-200d-1f466"
  },
  {
    n: [
      "family: woman, woman, girl",
      "family_woman_woman_girl"
    ],
    u: "1f469-200d-1f469-200d-1f467"
  },
  {
    n: [
      "family: woman, woman, girl, boy",
      "family_woman_woman_girl_boy"
    ],
    u: "1f469-200d-1f469-200d-1f467-200d-1f466"
  },
  {
    n: [
      "family: woman, woman, boy, boy",
      "family_woman_woman_boy_boy"
    ],
    u: "1f469-200d-1f469-200d-1f466-200d-1f466"
  },
  {
    n: [
      "family: woman, woman, girl, girl",
      "family_woman_woman_girl_girl"
    ],
    u: "1f469-200d-1f469-200d-1f467-200d-1f467"
  },
  {
    n: [
      "family: man, boy",
      "family_man_boy"
    ],
    u: "1f468-200d-1f466"
  },
  {
    n: [
      "family: man, boy, boy",
      "family_man_boy_boy"
    ],
    u: "1f468-200d-1f466-200d-1f466"
  },
  {
    n: [
      "family: man, girl",
      "family_man_girl"
    ],
    u: "1f468-200d-1f467"
  },
  {
    n: [
      "family: man, girl, boy",
      "family_man_girl_boy"
    ],
    u: "1f468-200d-1f467-200d-1f466"
  },
  {
    n: [
      "family: man, girl, girl",
      "family_man_girl_girl"
    ],
    u: "1f468-200d-1f467-200d-1f467"
  },
  {
    n: [
      "family: woman, boy",
      "family_woman_boy"
    ],
    u: "1f469-200d-1f466"
  },
  {
    n: [
      "family: woman, boy, boy",
      "family_woman_boy_boy"
    ],
    u: "1f469-200d-1f466-200d-1f466"
  },
  {
    n: [
      "family: woman, girl",
      "family_woman_girl"
    ],
    u: "1f469-200d-1f467"
  },
  {
    n: [
      "family: woman, girl, boy",
      "family_woman_girl_boy"
    ],
    u: "1f469-200d-1f467-200d-1f466"
  },
  {
    n: [
      "family: woman, girl, girl",
      "family_woman_girl_girl"
    ],
    u: "1f469-200d-1f467-200d-1f467"
  },
  {
    n: [
      "speaking head",
      "speaking_head"
    ],
    u: "1f5e3-fe0f"
  },
  {
    n: [
      "bust in silhouette",
      "bust_in_silhouette",
      "user"
    ],
    u: "1f464"
  },
  {
    n: [
      "busts in silhouette",
      "busts_in_silhouette",
      "users",
      "group",
      "team"
    ],
    u: "1f465"
  },
  {
    n: [
      "people hugging",
      "people_hugging"
    ],
    u: "1fac2"
  },
  {
    n: [
      "footprints",
      "footprints",
      "feet",
      "tracks"
    ],
    u: "1f463"
  }
];
const animals_nature$1 = [
  {
    n: [
      "monkey face",
      "monkey_face"
    ],
    u: "1f435"
  },
  {
    n: [
      "monkey",
      "monkey"
    ],
    u: "1f412"
  },
  {
    n: [
      "gorilla",
      "gorilla"
    ],
    u: "1f98d"
  },
  {
    n: [
      "orangutan",
      "orangutan"
    ],
    u: "1f9a7"
  },
  {
    n: [
      "dog face",
      "dog",
      "pet"
    ],
    u: "1f436"
  },
  {
    n: [
      "dog",
      "dog2"
    ],
    u: "1f415"
  },
  {
    n: [
      "guide dog",
      "guide_dog"
    ],
    u: "1f9ae"
  },
  {
    n: [
      "service dog",
      "service_dog"
    ],
    u: "1f415-200d-1f9ba"
  },
  {
    n: [
      "poodle",
      "poodle",
      "dog"
    ],
    u: "1f429"
  },
  {
    n: [
      "wolf",
      "wolf"
    ],
    u: "1f43a"
  },
  {
    n: [
      "fox",
      "fox_face"
    ],
    u: "1f98a"
  },
  {
    n: [
      "raccoon",
      "raccoon"
    ],
    u: "1f99d"
  },
  {
    n: [
      "cat face",
      "cat",
      "pet"
    ],
    u: "1f431"
  },
  {
    n: [
      "cat",
      "cat2"
    ],
    u: "1f408"
  },
  {
    n: [
      "black cat",
      "black_cat"
    ],
    u: "1f408-200d-2b1b"
  },
  {
    n: [
      "lion",
      "lion"
    ],
    u: "1f981"
  },
  {
    n: [
      "tiger face",
      "tiger"
    ],
    u: "1f42f"
  },
  {
    n: [
      "tiger",
      "tiger2"
    ],
    u: "1f405"
  },
  {
    n: [
      "leopard",
      "leopard"
    ],
    u: "1f406"
  },
  {
    n: [
      "horse face",
      "horse"
    ],
    u: "1f434"
  },
  {
    n: [
      "horse",
      "racehorse",
      "speed"
    ],
    u: "1f40e"
  },
  {
    n: [
      "unicorn",
      "unicorn"
    ],
    u: "1f984"
  },
  {
    n: [
      "zebra",
      "zebra"
    ],
    u: "1f993"
  },
  {
    n: [
      "deer",
      "deer"
    ],
    u: "1f98c"
  },
  {
    n: [
      "bison",
      "bison"
    ],
    u: "1f9ac"
  },
  {
    n: [
      "cow face",
      "cow"
    ],
    u: "1f42e"
  },
  {
    n: [
      "ox",
      "ox"
    ],
    u: "1f402"
  },
  {
    n: [
      "water buffalo",
      "water_buffalo"
    ],
    u: "1f403"
  },
  {
    n: [
      "cow",
      "cow2"
    ],
    u: "1f404"
  },
  {
    n: [
      "pig face",
      "pig"
    ],
    u: "1f437"
  },
  {
    n: [
      "pig",
      "pig2"
    ],
    u: "1f416"
  },
  {
    n: [
      "boar",
      "boar"
    ],
    u: "1f417"
  },
  {
    n: [
      "pig nose",
      "pig_nose"
    ],
    u: "1f43d"
  },
  {
    n: [
      "ram",
      "ram"
    ],
    u: "1f40f"
  },
  {
    n: [
      "ewe",
      "sheep"
    ],
    u: "1f411"
  },
  {
    n: [
      "goat",
      "goat"
    ],
    u: "1f410"
  },
  {
    n: [
      "camel",
      "dromedary_camel",
      "desert"
    ],
    u: "1f42a"
  },
  {
    n: [
      "two-hump camel",
      "camel"
    ],
    u: "1f42b"
  },
  {
    n: [
      "llama",
      "llama"
    ],
    u: "1f999"
  },
  {
    n: [
      "giraffe",
      "giraffe"
    ],
    u: "1f992"
  },
  {
    n: [
      "elephant",
      "elephant"
    ],
    u: "1f418"
  },
  {
    n: [
      "mammoth",
      "mammoth"
    ],
    u: "1f9a3"
  },
  {
    n: [
      "rhinoceros",
      "rhinoceros"
    ],
    u: "1f98f"
  },
  {
    n: [
      "hippopotamus",
      "hippopotamus"
    ],
    u: "1f99b"
  },
  {
    n: [
      "mouse face",
      "mouse"
    ],
    u: "1f42d"
  },
  {
    n: [
      "mouse",
      "mouse2"
    ],
    u: "1f401"
  },
  {
    n: [
      "rat",
      "rat"
    ],
    u: "1f400"
  },
  {
    n: [
      "hamster",
      "hamster",
      "pet"
    ],
    u: "1f439"
  },
  {
    n: [
      "rabbit face",
      "rabbit",
      "bunny"
    ],
    u: "1f430"
  },
  {
    n: [
      "rabbit",
      "rabbit2"
    ],
    u: "1f407"
  },
  {
    n: [
      "chipmunk",
      "chipmunk"
    ],
    u: "1f43f-fe0f"
  },
  {
    n: [
      "beaver",
      "beaver"
    ],
    u: "1f9ab"
  },
  {
    n: [
      "hedgehog",
      "hedgehog"
    ],
    u: "1f994"
  },
  {
    n: [
      "bat",
      "bat"
    ],
    u: "1f987"
  },
  {
    n: [
      "bear",
      "bear"
    ],
    u: "1f43b"
  },
  {
    n: [
      "polar bear",
      "polar_bear"
    ],
    u: "1f43b-200d-2744-fe0f"
  },
  {
    n: [
      "koala",
      "koala"
    ],
    u: "1f428"
  },
  {
    n: [
      "panda",
      "panda_face"
    ],
    u: "1f43c"
  },
  {
    n: [
      "sloth",
      "sloth"
    ],
    u: "1f9a5"
  },
  {
    n: [
      "otter",
      "otter"
    ],
    u: "1f9a6"
  },
  {
    n: [
      "skunk",
      "skunk"
    ],
    u: "1f9a8"
  },
  {
    n: [
      "kangaroo",
      "kangaroo"
    ],
    u: "1f998"
  },
  {
    n: [
      "badger",
      "badger"
    ],
    u: "1f9a1"
  },
  {
    n: [
      "paw prints",
      "feet",
      "paw_prints"
    ],
    u: "1f43e"
  },
  {
    n: [
      "turkey",
      "turkey",
      "thanksgiving"
    ],
    u: "1f983"
  },
  {
    n: [
      "chicken",
      "chicken"
    ],
    u: "1f414"
  },
  {
    n: [
      "rooster",
      "rooster"
    ],
    u: "1f413"
  },
  {
    n: [
      "hatching chick",
      "hatching_chick"
    ],
    u: "1f423"
  },
  {
    n: [
      "baby chick",
      "baby_chick"
    ],
    u: "1f424"
  },
  {
    n: [
      "front-facing baby chick",
      "hatched_chick"
    ],
    u: "1f425"
  },
  {
    n: [
      "bird",
      "bird"
    ],
    u: "1f426"
  },
  {
    n: [
      "penguin",
      "penguin"
    ],
    u: "1f427"
  },
  {
    n: [
      "dove",
      "dove",
      "peace"
    ],
    u: "1f54a-fe0f"
  },
  {
    n: [
      "eagle",
      "eagle"
    ],
    u: "1f985"
  },
  {
    n: [
      "duck",
      "duck"
    ],
    u: "1f986"
  },
  {
    n: [
      "swan",
      "swan"
    ],
    u: "1f9a2"
  },
  {
    n: [
      "owl",
      "owl"
    ],
    u: "1f989"
  },
  {
    n: [
      "dodo",
      "dodo"
    ],
    u: "1f9a4"
  },
  {
    n: [
      "feather",
      "feather"
    ],
    u: "1fab6"
  },
  {
    n: [
      "flamingo",
      "flamingo"
    ],
    u: "1f9a9"
  },
  {
    n: [
      "peacock",
      "peacock"
    ],
    u: "1f99a"
  },
  {
    n: [
      "parrot",
      "parrot"
    ],
    u: "1f99c"
  },
  {
    n: [
      "frog",
      "frog"
    ],
    u: "1f438"
  },
  {
    n: [
      "crocodile",
      "crocodile"
    ],
    u: "1f40a"
  },
  {
    n: [
      "turtle",
      "turtle",
      "slow"
    ],
    u: "1f422"
  },
  {
    n: [
      "lizard",
      "lizard"
    ],
    u: "1f98e"
  },
  {
    n: [
      "snake",
      "snake"
    ],
    u: "1f40d"
  },
  {
    n: [
      "dragon face",
      "dragon_face"
    ],
    u: "1f432"
  },
  {
    n: [
      "dragon",
      "dragon"
    ],
    u: "1f409"
  },
  {
    n: [
      "sauropod",
      "sauropod",
      "dinosaur"
    ],
    u: "1f995"
  },
  {
    n: [
      "T-Rex",
      "t-rex",
      "dinosaur"
    ],
    u: "1f996"
  },
  {
    n: [
      "spouting whale",
      "whale",
      "sea"
    ],
    u: "1f433"
  },
  {
    n: [
      "whale",
      "whale2"
    ],
    u: "1f40b"
  },
  {
    n: [
      "dolphin",
      "dolphin",
      "flipper"
    ],
    u: "1f42c"
  },
  {
    n: [
      "seal",
      "seal"
    ],
    u: "1f9ad"
  },
  {
    n: [
      "fish",
      "fish"
    ],
    u: "1f41f"
  },
  {
    n: [
      "tropical fish",
      "tropical_fish"
    ],
    u: "1f420"
  },
  {
    n: [
      "blowfish",
      "blowfish"
    ],
    u: "1f421"
  },
  {
    n: [
      "shark",
      "shark"
    ],
    u: "1f988"
  },
  {
    n: [
      "octopus",
      "octopus"
    ],
    u: "1f419"
  },
  {
    n: [
      "spiral shell",
      "shell",
      "sea",
      "beach"
    ],
    u: "1f41a"
  },
  {
    n: [
      "coral",
      "coral"
    ],
    u: "1fab8"
  },
  {
    n: [
      "snail",
      "snail",
      "slow"
    ],
    u: "1f40c"
  },
  {
    n: [
      "butterfly",
      "butterfly"
    ],
    u: "1f98b"
  },
  {
    n: [
      "bug",
      "bug"
    ],
    u: "1f41b"
  },
  {
    n: [
      "ant",
      "ant"
    ],
    u: "1f41c"
  },
  {
    n: [
      "honeybee",
      "bee",
      "honeybee"
    ],
    u: "1f41d"
  },
  {
    n: [
      "beetle",
      "beetle"
    ],
    u: "1fab2"
  },
  {
    n: [
      "lady beetle",
      "lady_beetle",
      "bug"
    ],
    u: "1f41e"
  },
  {
    n: [
      "cricket",
      "cricket"
    ],
    u: "1f997"
  },
  {
    n: [
      "cockroach",
      "cockroach"
    ],
    u: "1fab3"
  },
  {
    n: [
      "spider",
      "spider"
    ],
    u: "1f577-fe0f"
  },
  {
    n: [
      "spider web",
      "spider_web"
    ],
    u: "1f578-fe0f"
  },
  {
    n: [
      "scorpion",
      "scorpion"
    ],
    u: "1f982"
  },
  {
    n: [
      "mosquito",
      "mosquito"
    ],
    u: "1f99f"
  },
  {
    n: [
      "fly",
      "fly"
    ],
    u: "1fab0"
  },
  {
    n: [
      "worm",
      "worm"
    ],
    u: "1fab1"
  },
  {
    n: [
      "microbe",
      "microbe",
      "germ"
    ],
    u: "1f9a0"
  },
  {
    n: [
      "bouquet",
      "bouquet",
      "flowers"
    ],
    u: "1f490"
  },
  {
    n: [
      "cherry blossom",
      "cherry_blossom",
      "flower",
      "spring"
    ],
    u: "1f338"
  },
  {
    n: [
      "white flower",
      "white_flower"
    ],
    u: "1f4ae"
  },
  {
    n: [
      "lotus",
      "lotus"
    ],
    u: "1fab7"
  },
  {
    n: [
      "rosette",
      "rosette"
    ],
    u: "1f3f5-fe0f"
  },
  {
    n: [
      "rose",
      "rose",
      "flower"
    ],
    u: "1f339"
  },
  {
    n: [
      "wilted flower",
      "wilted_flower"
    ],
    u: "1f940"
  },
  {
    n: [
      "hibiscus",
      "hibiscus"
    ],
    u: "1f33a"
  },
  {
    n: [
      "sunflower",
      "sunflower"
    ],
    u: "1f33b"
  },
  {
    n: [
      "blossom",
      "blossom"
    ],
    u: "1f33c"
  },
  {
    n: [
      "tulip",
      "tulip",
      "flower"
    ],
    u: "1f337"
  },
  {
    n: [
      "seedling",
      "seedling",
      "plant"
    ],
    u: "1f331"
  },
  {
    n: [
      "potted plant",
      "potted_plant"
    ],
    u: "1fab4"
  },
  {
    n: [
      "evergreen tree",
      "evergreen_tree",
      "wood"
    ],
    u: "1f332"
  },
  {
    n: [
      "deciduous tree",
      "deciduous_tree",
      "wood"
    ],
    u: "1f333"
  },
  {
    n: [
      "palm tree",
      "palm_tree"
    ],
    u: "1f334"
  },
  {
    n: [
      "cactus",
      "cactus"
    ],
    u: "1f335"
  },
  {
    n: [
      "sheaf of rice",
      "ear_of_rice"
    ],
    u: "1f33e"
  },
  {
    n: [
      "herb",
      "herb"
    ],
    u: "1f33f"
  },
  {
    n: [
      "shamrock",
      "shamrock"
    ],
    u: "2618-fe0f"
  },
  {
    n: [
      "four leaf clover",
      "four_leaf_clover",
      "luck"
    ],
    u: "1f340"
  },
  {
    n: [
      "maple leaf",
      "maple_leaf",
      "canada"
    ],
    u: "1f341"
  },
  {
    n: [
      "fallen leaf",
      "fallen_leaf",
      "autumn"
    ],
    u: "1f342"
  },
  {
    n: [
      "leaf fluttering in wind",
      "leaves",
      "leaf"
    ],
    u: "1f343"
  },
  {
    n: [
      "empty nest",
      "empty_nest"
    ],
    u: "1fab9"
  },
  {
    n: [
      "nest with eggs",
      "nest_with_eggs"
    ],
    u: "1faba"
  }
];
const food_drink$1 = [
  {
    n: [
      "grapes",
      "grapes"
    ],
    u: "1f347"
  },
  {
    n: [
      "melon",
      "melon"
    ],
    u: "1f348"
  },
  {
    n: [
      "watermelon",
      "watermelon"
    ],
    u: "1f349"
  },
  {
    n: [
      "tangerine",
      "tangerine",
      "orange",
      "mandarin"
    ],
    u: "1f34a"
  },
  {
    n: [
      "lemon",
      "lemon"
    ],
    u: "1f34b"
  },
  {
    n: [
      "banana",
      "banana",
      "fruit"
    ],
    u: "1f34c"
  },
  {
    n: [
      "pineapple",
      "pineapple"
    ],
    u: "1f34d"
  },
  {
    n: [
      "mango",
      "mango"
    ],
    u: "1f96d"
  },
  {
    n: [
      "red apple",
      "apple"
    ],
    u: "1f34e"
  },
  {
    n: [
      "green apple",
      "green_apple",
      "fruit"
    ],
    u: "1f34f"
  },
  {
    n: [
      "pear",
      "pear"
    ],
    u: "1f350"
  },
  {
    n: [
      "peach",
      "peach"
    ],
    u: "1f351"
  },
  {
    n: [
      "cherries",
      "cherries",
      "fruit"
    ],
    u: "1f352"
  },
  {
    n: [
      "strawberry",
      "strawberry",
      "fruit"
    ],
    u: "1f353"
  },
  {
    n: [
      "blueberries",
      "blueberries"
    ],
    u: "1fad0"
  },
  {
    n: [
      "kiwi fruit",
      "kiwi_fruit"
    ],
    u: "1f95d"
  },
  {
    n: [
      "tomato",
      "tomato"
    ],
    u: "1f345"
  },
  {
    n: [
      "olive",
      "olive"
    ],
    u: "1fad2"
  },
  {
    n: [
      "coconut",
      "coconut"
    ],
    u: "1f965"
  },
  {
    n: [
      "avocado",
      "avocado"
    ],
    u: "1f951"
  },
  {
    n: [
      "eggplant",
      "eggplant",
      "aubergine"
    ],
    u: "1f346"
  },
  {
    n: [
      "potato",
      "potato"
    ],
    u: "1f954"
  },
  {
    n: [
      "carrot",
      "carrot"
    ],
    u: "1f955"
  },
  {
    n: [
      "ear of corn",
      "corn"
    ],
    u: "1f33d"
  },
  {
    n: [
      "hot pepper",
      "hot_pepper",
      "spicy"
    ],
    u: "1f336-fe0f"
  },
  {
    n: [
      "bell pepper",
      "bell_pepper"
    ],
    u: "1fad1"
  },
  {
    n: [
      "cucumber",
      "cucumber"
    ],
    u: "1f952"
  },
  {
    n: [
      "leafy green",
      "leafy_green"
    ],
    u: "1f96c"
  },
  {
    n: [
      "broccoli",
      "broccoli"
    ],
    u: "1f966"
  },
  {
    n: [
      "garlic",
      "garlic"
    ],
    u: "1f9c4"
  },
  {
    n: [
      "onion",
      "onion"
    ],
    u: "1f9c5"
  },
  {
    n: [
      "mushroom",
      "mushroom"
    ],
    u: "1f344"
  },
  {
    n: [
      "peanuts",
      "peanuts"
    ],
    u: "1f95c"
  },
  {
    n: [
      "beans",
      "beans"
    ],
    u: "1fad8"
  },
  {
    n: [
      "chestnut",
      "chestnut"
    ],
    u: "1f330"
  },
  {
    n: [
      "bread",
      "bread",
      "toast"
    ],
    u: "1f35e"
  },
  {
    n: [
      "croissant",
      "croissant"
    ],
    u: "1f950"
  },
  {
    n: [
      "baguette bread",
      "baguette_bread"
    ],
    u: "1f956"
  },
  {
    n: [
      "flatbread",
      "flatbread"
    ],
    u: "1fad3"
  },
  {
    n: [
      "pretzel",
      "pretzel"
    ],
    u: "1f968"
  },
  {
    n: [
      "bagel",
      "bagel"
    ],
    u: "1f96f"
  },
  {
    n: [
      "pancakes",
      "pancakes"
    ],
    u: "1f95e"
  },
  {
    n: [
      "waffle",
      "waffle"
    ],
    u: "1f9c7"
  },
  {
    n: [
      "cheese wedge",
      "cheese"
    ],
    u: "1f9c0"
  },
  {
    n: [
      "meat on bone",
      "meat_on_bone"
    ],
    u: "1f356"
  },
  {
    n: [
      "poultry leg",
      "poultry_leg",
      "meat",
      "chicken"
    ],
    u: "1f357"
  },
  {
    n: [
      "cut of meat",
      "cut_of_meat"
    ],
    u: "1f969"
  },
  {
    n: [
      "bacon",
      "bacon"
    ],
    u: "1f953"
  },
  {
    n: [
      "hamburger",
      "hamburger",
      "burger"
    ],
    u: "1f354"
  },
  {
    n: [
      "french fries",
      "fries"
    ],
    u: "1f35f"
  },
  {
    n: [
      "pizza",
      "pizza"
    ],
    u: "1f355"
  },
  {
    n: [
      "hot dog",
      "hotdog"
    ],
    u: "1f32d"
  },
  {
    n: [
      "sandwich",
      "sandwich"
    ],
    u: "1f96a"
  },
  {
    n: [
      "taco",
      "taco"
    ],
    u: "1f32e"
  },
  {
    n: [
      "burrito",
      "burrito"
    ],
    u: "1f32f"
  },
  {
    n: [
      "tamale",
      "tamale"
    ],
    u: "1fad4"
  },
  {
    n: [
      "stuffed flatbread",
      "stuffed_flatbread"
    ],
    u: "1f959"
  },
  {
    n: [
      "falafel",
      "falafel"
    ],
    u: "1f9c6"
  },
  {
    n: [
      "egg",
      "egg"
    ],
    u: "1f95a"
  },
  {
    n: [
      "cooking",
      "fried_egg",
      "breakfast"
    ],
    u: "1f373"
  },
  {
    n: [
      "shallow pan of food",
      "shallow_pan_of_food",
      "paella",
      "curry"
    ],
    u: "1f958"
  },
  {
    n: [
      "pot of food",
      "stew"
    ],
    u: "1f372"
  },
  {
    n: [
      "fondue",
      "fondue"
    ],
    u: "1fad5"
  },
  {
    n: [
      "bowl with spoon",
      "bowl_with_spoon"
    ],
    u: "1f963"
  },
  {
    n: [
      "green salad",
      "green_salad"
    ],
    u: "1f957"
  },
  {
    n: [
      "popcorn",
      "popcorn"
    ],
    u: "1f37f"
  },
  {
    n: [
      "butter",
      "butter"
    ],
    u: "1f9c8"
  },
  {
    n: [
      "salt",
      "salt"
    ],
    u: "1f9c2"
  },
  {
    n: [
      "canned food",
      "canned_food"
    ],
    u: "1f96b"
  },
  {
    n: [
      "bento box",
      "bento"
    ],
    u: "1f371"
  },
  {
    n: [
      "rice cracker",
      "rice_cracker"
    ],
    u: "1f358"
  },
  {
    n: [
      "rice ball",
      "rice_ball"
    ],
    u: "1f359"
  },
  {
    n: [
      "cooked rice",
      "rice"
    ],
    u: "1f35a"
  },
  {
    n: [
      "curry rice",
      "curry"
    ],
    u: "1f35b"
  },
  {
    n: [
      "steaming bowl",
      "ramen",
      "noodle"
    ],
    u: "1f35c"
  },
  {
    n: [
      "spaghetti",
      "spaghetti",
      "pasta"
    ],
    u: "1f35d"
  },
  {
    n: [
      "roasted sweet potato",
      "sweet_potato"
    ],
    u: "1f360"
  },
  {
    n: [
      "oden",
      "oden"
    ],
    u: "1f362"
  },
  {
    n: [
      "sushi",
      "sushi"
    ],
    u: "1f363"
  },
  {
    n: [
      "fried shrimp",
      "fried_shrimp",
      "tempura"
    ],
    u: "1f364"
  },
  {
    n: [
      "fish cake with swirl",
      "fish_cake"
    ],
    u: "1f365"
  },
  {
    n: [
      "moon cake",
      "moon_cake"
    ],
    u: "1f96e"
  },
  {
    n: [
      "dango",
      "dango"
    ],
    u: "1f361"
  },
  {
    n: [
      "dumpling",
      "dumpling"
    ],
    u: "1f95f"
  },
  {
    n: [
      "fortune cookie",
      "fortune_cookie"
    ],
    u: "1f960"
  },
  {
    n: [
      "takeout box",
      "takeout_box"
    ],
    u: "1f961"
  },
  {
    n: [
      "crab",
      "crab"
    ],
    u: "1f980"
  },
  {
    n: [
      "lobster",
      "lobster"
    ],
    u: "1f99e"
  },
  {
    n: [
      "shrimp",
      "shrimp"
    ],
    u: "1f990"
  },
  {
    n: [
      "squid",
      "squid"
    ],
    u: "1f991"
  },
  {
    n: [
      "oyster",
      "oyster"
    ],
    u: "1f9aa"
  },
  {
    n: [
      "soft ice cream",
      "icecream"
    ],
    u: "1f366"
  },
  {
    n: [
      "shaved ice",
      "shaved_ice"
    ],
    u: "1f367"
  },
  {
    n: [
      "ice cream",
      "ice_cream"
    ],
    u: "1f368"
  },
  {
    n: [
      "doughnut",
      "doughnut"
    ],
    u: "1f369"
  },
  {
    n: [
      "cookie",
      "cookie"
    ],
    u: "1f36a"
  },
  {
    n: [
      "birthday cake",
      "birthday",
      "party"
    ],
    u: "1f382"
  },
  {
    n: [
      "shortcake",
      "cake",
      "dessert"
    ],
    u: "1f370"
  },
  {
    n: [
      "cupcake",
      "cupcake"
    ],
    u: "1f9c1"
  },
  {
    n: [
      "pie",
      "pie"
    ],
    u: "1f967"
  },
  {
    n: [
      "chocolate bar",
      "chocolate_bar"
    ],
    u: "1f36b"
  },
  {
    n: [
      "candy",
      "candy",
      "sweet"
    ],
    u: "1f36c"
  },
  {
    n: [
      "lollipop",
      "lollipop"
    ],
    u: "1f36d"
  },
  {
    n: [
      "custard",
      "custard"
    ],
    u: "1f36e"
  },
  {
    n: [
      "honey pot",
      "honey_pot"
    ],
    u: "1f36f"
  },
  {
    n: [
      "baby bottle",
      "baby_bottle",
      "milk"
    ],
    u: "1f37c"
  },
  {
    n: [
      "glass of milk",
      "milk_glass"
    ],
    u: "1f95b"
  },
  {
    n: [
      "hot beverage",
      "coffee",
      "cafe",
      "espresso"
    ],
    u: "2615"
  },
  {
    n: [
      "teapot",
      "teapot"
    ],
    u: "1fad6"
  },
  {
    n: [
      "teacup without handle",
      "tea",
      "green",
      "breakfast"
    ],
    u: "1f375"
  },
  {
    n: [
      "sake",
      "sake"
    ],
    u: "1f376"
  },
  {
    n: [
      "bottle with popping cork",
      "champagne",
      "bottle",
      "bubbly",
      "celebration"
    ],
    u: "1f37e"
  },
  {
    n: [
      "wine glass",
      "wine_glass"
    ],
    u: "1f377"
  },
  {
    n: [
      "cocktail glass",
      "cocktail",
      "drink"
    ],
    u: "1f378"
  },
  {
    n: [
      "tropical drink",
      "tropical_drink",
      "summer",
      "vacation"
    ],
    u: "1f379"
  },
  {
    n: [
      "beer mug",
      "beer",
      "drink"
    ],
    u: "1f37a"
  },
  {
    n: [
      "clinking beer mugs",
      "beers",
      "drinks"
    ],
    u: "1f37b"
  },
  {
    n: [
      "clinking glasses",
      "clinking_glasses",
      "cheers",
      "toast"
    ],
    u: "1f942"
  },
  {
    n: [
      "tumbler glass",
      "tumbler_glass",
      "whisky"
    ],
    u: "1f943"
  },
  {
    n: [
      "pouring liquid",
      "pouring_liquid"
    ],
    u: "1fad7"
  },
  {
    n: [
      "cup with straw",
      "cup_with_straw"
    ],
    u: "1f964"
  },
  {
    n: [
      "bubble tea",
      "bubble_tea"
    ],
    u: "1f9cb"
  },
  {
    n: [
      "beverage box",
      "beverage_box"
    ],
    u: "1f9c3"
  },
  {
    n: [
      "mate",
      "mate"
    ],
    u: "1f9c9"
  },
  {
    n: [
      "ice",
      "ice_cube"
    ],
    u: "1f9ca"
  },
  {
    n: [
      "chopsticks",
      "chopsticks"
    ],
    u: "1f962"
  },
  {
    n: [
      "fork and knife with plate",
      "plate_with_cutlery",
      "dining",
      "dinner"
    ],
    u: "1f37d-fe0f"
  },
  {
    n: [
      "fork and knife",
      "fork_and_knife",
      "cutlery"
    ],
    u: "1f374"
  },
  {
    n: [
      "spoon",
      "spoon"
    ],
    u: "1f944"
  },
  {
    n: [
      "kitchen knife",
      "hocho",
      "knife",
      "cut",
      "chop"
    ],
    u: "1f52a"
  },
  {
    n: [
      "jar",
      "jar"
    ],
    u: "1fad9"
  },
  {
    n: [
      "amphora",
      "amphora"
    ],
    u: "1f3fa"
  }
];
const activities$1 = [
  {
    n: [
      "jack-o-lantern",
      "jack_o_lantern",
      "halloween"
    ],
    u: "1f383"
  },
  {
    n: [
      "Christmas tree",
      "christmas_tree"
    ],
    u: "1f384"
  },
  {
    n: [
      "fireworks",
      "fireworks",
      "festival",
      "celebration"
    ],
    u: "1f386"
  },
  {
    n: [
      "sparkler",
      "sparkler"
    ],
    u: "1f387"
  },
  {
    n: [
      "firecracker",
      "firecracker"
    ],
    u: "1f9e8"
  },
  {
    n: [
      "sparkles",
      "sparkles",
      "shiny"
    ],
    u: "2728"
  },
  {
    n: [
      "balloon",
      "balloon",
      "party",
      "birthday"
    ],
    u: "1f388"
  },
  {
    n: [
      "party popper",
      "tada",
      "hooray",
      "party"
    ],
    u: "1f389"
  },
  {
    n: [
      "confetti ball",
      "confetti_ball"
    ],
    u: "1f38a"
  },
  {
    n: [
      "tanabata tree",
      "tanabata_tree"
    ],
    u: "1f38b"
  },
  {
    n: [
      "pine decoration",
      "bamboo"
    ],
    u: "1f38d"
  },
  {
    n: [
      "Japanese dolls",
      "dolls"
    ],
    u: "1f38e"
  },
  {
    n: [
      "carp streamer",
      "flags"
    ],
    u: "1f38f"
  },
  {
    n: [
      "wind chime",
      "wind_chime"
    ],
    u: "1f390"
  },
  {
    n: [
      "moon viewing ceremony",
      "rice_scene"
    ],
    u: "1f391"
  },
  {
    n: [
      "red envelope",
      "red_envelope"
    ],
    u: "1f9e7"
  },
  {
    n: [
      "ribbon",
      "ribbon"
    ],
    u: "1f380"
  },
  {
    n: [
      "wrapped gift",
      "gift",
      "present",
      "birthday",
      "christmas"
    ],
    u: "1f381"
  },
  {
    n: [
      "reminder ribbon",
      "reminder_ribbon"
    ],
    u: "1f397-fe0f"
  },
  {
    n: [
      "admission tickets",
      "tickets"
    ],
    u: "1f39f-fe0f"
  },
  {
    n: [
      "ticket",
      "ticket"
    ],
    u: "1f3ab"
  },
  {
    n: [
      "military medal",
      "medal_military"
    ],
    u: "1f396-fe0f"
  },
  {
    n: [
      "trophy",
      "trophy",
      "award",
      "contest",
      "winner"
    ],
    u: "1f3c6"
  },
  {
    n: [
      "sports medal",
      "medal_sports",
      "gold",
      "winner"
    ],
    u: "1f3c5"
  },
  {
    n: [
      "1st place medal",
      "1st_place_medal",
      "gold"
    ],
    u: "1f947"
  },
  {
    n: [
      "2nd place medal",
      "2nd_place_medal",
      "silver"
    ],
    u: "1f948"
  },
  {
    n: [
      "3rd place medal",
      "3rd_place_medal",
      "bronze"
    ],
    u: "1f949"
  },
  {
    n: [
      "soccer ball",
      "soccer",
      "sports"
    ],
    u: "26bd"
  },
  {
    n: [
      "baseball",
      "baseball",
      "sports"
    ],
    u: "26be"
  },
  {
    n: [
      "softball",
      "softball"
    ],
    u: "1f94e"
  },
  {
    n: [
      "basketball",
      "basketball",
      "sports"
    ],
    u: "1f3c0"
  },
  {
    n: [
      "volleyball",
      "volleyball"
    ],
    u: "1f3d0"
  },
  {
    n: [
      "american football",
      "football",
      "sports"
    ],
    u: "1f3c8"
  },
  {
    n: [
      "rugby football",
      "rugby_football"
    ],
    u: "1f3c9"
  },
  {
    n: [
      "tennis",
      "tennis",
      "sports"
    ],
    u: "1f3be"
  },
  {
    n: [
      "flying disc",
      "flying_disc"
    ],
    u: "1f94f"
  },
  {
    n: [
      "bowling",
      "bowling"
    ],
    u: "1f3b3"
  },
  {
    n: [
      "cricket game",
      "cricket_game"
    ],
    u: "1f3cf"
  },
  {
    n: [
      "field hockey",
      "field_hockey"
    ],
    u: "1f3d1"
  },
  {
    n: [
      "ice hockey",
      "ice_hockey"
    ],
    u: "1f3d2"
  },
  {
    n: [
      "lacrosse",
      "lacrosse"
    ],
    u: "1f94d"
  },
  {
    n: [
      "ping pong",
      "ping_pong"
    ],
    u: "1f3d3"
  },
  {
    n: [
      "badminton",
      "badminton"
    ],
    u: "1f3f8"
  },
  {
    n: [
      "boxing glove",
      "boxing_glove"
    ],
    u: "1f94a"
  },
  {
    n: [
      "martial arts uniform",
      "martial_arts_uniform"
    ],
    u: "1f94b"
  },
  {
    n: [
      "goal net",
      "goal_net"
    ],
    u: "1f945"
  },
  {
    n: [
      "flag in hole",
      "golf"
    ],
    u: "26f3"
  },
  {
    n: [
      "ice skate",
      "ice_skate",
      "skating"
    ],
    u: "26f8-fe0f"
  },
  {
    n: [
      "fishing pole",
      "fishing_pole_and_fish"
    ],
    u: "1f3a3"
  },
  {
    n: [
      "diving mask",
      "diving_mask"
    ],
    u: "1f93f"
  },
  {
    n: [
      "running shirt",
      "running_shirt_with_sash",
      "marathon"
    ],
    u: "1f3bd"
  },
  {
    n: [
      "skis",
      "ski"
    ],
    u: "1f3bf"
  },
  {
    n: [
      "sled",
      "sled"
    ],
    u: "1f6f7"
  },
  {
    n: [
      "curling stone",
      "curling_stone"
    ],
    u: "1f94c"
  },
  {
    n: [
      "bullseye",
      "dart",
      "target"
    ],
    u: "1f3af"
  },
  {
    n: [
      "yo-yo",
      "yo_yo"
    ],
    u: "1fa80"
  },
  {
    n: [
      "kite",
      "kite"
    ],
    u: "1fa81"
  },
  {
    n: [
      "pool 8 ball",
      "8ball",
      "pool",
      "billiards"
    ],
    u: "1f3b1"
  },
  {
    n: [
      "crystal ball",
      "crystal_ball",
      "fortune"
    ],
    u: "1f52e"
  },
  {
    n: [
      "magic wand",
      "magic_wand"
    ],
    u: "1fa84"
  },
  {
    n: [
      "nazar amulet",
      "nazar_amulet"
    ],
    u: "1f9ff"
  },
  {
    n: [
      "hamsa",
      "hamsa"
    ],
    u: "1faac"
  },
  {
    n: [
      "video game",
      "video_game",
      "play",
      "controller",
      "console"
    ],
    u: "1f3ae"
  },
  {
    n: [
      "joystick",
      "joystick"
    ],
    u: "1f579-fe0f"
  },
  {
    n: [
      "slot machine",
      "slot_machine"
    ],
    u: "1f3b0"
  },
  {
    n: [
      "game die",
      "game_die",
      "dice",
      "gambling"
    ],
    u: "1f3b2"
  },
  {
    n: [
      "puzzle piece",
      "jigsaw"
    ],
    u: "1f9e9"
  },
  {
    n: [
      "teddy bear",
      "teddy_bear"
    ],
    u: "1f9f8"
  },
  {
    n: [
      "pi\xF1ata",
      "pinata"
    ],
    u: "1fa85"
  },
  {
    n: [
      "mirror ball",
      "mirror_ball",
      "disco",
      "party"
    ],
    u: "1faa9"
  },
  {
    n: [
      "nesting dolls",
      "nesting_dolls"
    ],
    u: "1fa86"
  },
  {
    n: [
      "spade suit",
      "spades"
    ],
    u: "2660-fe0f"
  },
  {
    n: [
      "heart suit",
      "hearts"
    ],
    u: "2665-fe0f"
  },
  {
    n: [
      "diamond suit",
      "diamonds"
    ],
    u: "2666-fe0f"
  },
  {
    n: [
      "club suit",
      "clubs"
    ],
    u: "2663-fe0f"
  },
  {
    n: [
      "chess pawn",
      "chess_pawn"
    ],
    u: "265f-fe0f"
  },
  {
    n: [
      "joker",
      "black_joker"
    ],
    u: "1f0cf"
  },
  {
    n: [
      "mahjong red dragon",
      "mahjong"
    ],
    u: "1f004"
  },
  {
    n: [
      "flower playing cards",
      "flower_playing_cards"
    ],
    u: "1f3b4"
  },
  {
    n: [
      "performing arts",
      "performing_arts",
      "theater",
      "drama"
    ],
    u: "1f3ad"
  },
  {
    n: [
      "framed picture",
      "framed_picture"
    ],
    u: "1f5bc-fe0f"
  },
  {
    n: [
      "artist palette",
      "art",
      "design",
      "paint"
    ],
    u: "1f3a8"
  },
  {
    n: [
      "thread",
      "thread"
    ],
    u: "1f9f5"
  },
  {
    n: [
      "sewing needle",
      "sewing_needle"
    ],
    u: "1faa1"
  },
  {
    n: [
      "yarn",
      "yarn"
    ],
    u: "1f9f6"
  },
  {
    n: [
      "knot",
      "knot"
    ],
    u: "1faa2"
  }
];
const travel_places$1 = [
  {
    n: [
      "globe showing Europe-Africa",
      "earth_africa",
      "globe",
      "world",
      "international"
    ],
    u: "1f30d"
  },
  {
    n: [
      "globe showing Americas",
      "earth_americas",
      "globe",
      "world",
      "international"
    ],
    u: "1f30e"
  },
  {
    n: [
      "globe showing Asia-Australia",
      "earth_asia",
      "globe",
      "world",
      "international"
    ],
    u: "1f30f"
  },
  {
    n: [
      "globe with meridians",
      "globe_with_meridians",
      "world",
      "global",
      "international"
    ],
    u: "1f310"
  },
  {
    n: [
      "world map",
      "world_map",
      "travel"
    ],
    u: "1f5fa-fe0f"
  },
  {
    n: [
      "map of Japan",
      "japan"
    ],
    u: "1f5fe"
  },
  {
    n: [
      "compass",
      "compass"
    ],
    u: "1f9ed"
  },
  {
    n: [
      "snow-capped mountain",
      "mountain_snow"
    ],
    u: "1f3d4-fe0f"
  },
  {
    n: [
      "mountain",
      "mountain"
    ],
    u: "26f0-fe0f"
  },
  {
    n: [
      "volcano",
      "volcano"
    ],
    u: "1f30b"
  },
  {
    n: [
      "mount fuji",
      "mount_fuji"
    ],
    u: "1f5fb"
  },
  {
    n: [
      "camping",
      "camping"
    ],
    u: "1f3d5-fe0f"
  },
  {
    n: [
      "beach with umbrella",
      "beach_umbrella"
    ],
    u: "1f3d6-fe0f"
  },
  {
    n: [
      "desert",
      "desert"
    ],
    u: "1f3dc-fe0f"
  },
  {
    n: [
      "desert island",
      "desert_island"
    ],
    u: "1f3dd-fe0f"
  },
  {
    n: [
      "national park",
      "national_park"
    ],
    u: "1f3de-fe0f"
  },
  {
    n: [
      "stadium",
      "stadium"
    ],
    u: "1f3df-fe0f"
  },
  {
    n: [
      "classical building",
      "classical_building"
    ],
    u: "1f3db-fe0f"
  },
  {
    n: [
      "building construction",
      "building_construction"
    ],
    u: "1f3d7-fe0f"
  },
  {
    n: [
      "brick",
      "bricks"
    ],
    u: "1f9f1"
  },
  {
    n: [
      "rock",
      "rock"
    ],
    u: "1faa8"
  },
  {
    n: [
      "wood",
      "wood"
    ],
    u: "1fab5"
  },
  {
    n: [
      "hut",
      "hut"
    ],
    u: "1f6d6"
  },
  {
    n: [
      "houses",
      "houses"
    ],
    u: "1f3d8-fe0f"
  },
  {
    n: [
      "derelict house",
      "derelict_house"
    ],
    u: "1f3da-fe0f"
  },
  {
    n: [
      "house",
      "house"
    ],
    u: "1f3e0"
  },
  {
    n: [
      "house with garden",
      "house_with_garden"
    ],
    u: "1f3e1"
  },
  {
    n: [
      "office building",
      "office"
    ],
    u: "1f3e2"
  },
  {
    n: [
      "Japanese post office",
      "post_office"
    ],
    u: "1f3e3"
  },
  {
    n: [
      "post office",
      "european_post_office"
    ],
    u: "1f3e4"
  },
  {
    n: [
      "hospital",
      "hospital"
    ],
    u: "1f3e5"
  },
  {
    n: [
      "bank",
      "bank"
    ],
    u: "1f3e6"
  },
  {
    n: [
      "hotel",
      "hotel"
    ],
    u: "1f3e8"
  },
  {
    n: [
      "love hotel",
      "love_hotel"
    ],
    u: "1f3e9"
  },
  {
    n: [
      "convenience store",
      "convenience_store"
    ],
    u: "1f3ea"
  },
  {
    n: [
      "school",
      "school"
    ],
    u: "1f3eb"
  },
  {
    n: [
      "department store",
      "department_store"
    ],
    u: "1f3ec"
  },
  {
    n: [
      "factory",
      "factory"
    ],
    u: "1f3ed"
  },
  {
    n: [
      "Japanese castle",
      "japanese_castle"
    ],
    u: "1f3ef"
  },
  {
    n: [
      "castle",
      "european_castle"
    ],
    u: "1f3f0"
  },
  {
    n: [
      "wedding",
      "wedding",
      "marriage"
    ],
    u: "1f492"
  },
  {
    n: [
      "Tokyo tower",
      "tokyo_tower"
    ],
    u: "1f5fc"
  },
  {
    n: [
      "Statue of Liberty",
      "statue_of_liberty"
    ],
    u: "1f5fd"
  },
  {
    n: [
      "church",
      "church"
    ],
    u: "26ea"
  },
  {
    n: [
      "mosque",
      "mosque"
    ],
    u: "1f54c"
  },
  {
    n: [
      "hindu temple",
      "hindu_temple"
    ],
    u: "1f6d5"
  },
  {
    n: [
      "synagogue",
      "synagogue"
    ],
    u: "1f54d"
  },
  {
    n: [
      "shinto shrine",
      "shinto_shrine"
    ],
    u: "26e9-fe0f"
  },
  {
    n: [
      "kaaba",
      "kaaba"
    ],
    u: "1f54b"
  },
  {
    n: [
      "fountain",
      "fountain"
    ],
    u: "26f2"
  },
  {
    n: [
      "tent",
      "tent",
      "camping"
    ],
    u: "26fa"
  },
  {
    n: [
      "foggy",
      "foggy",
      "karl"
    ],
    u: "1f301"
  },
  {
    n: [
      "night with stars",
      "night_with_stars"
    ],
    u: "1f303"
  },
  {
    n: [
      "cityscape",
      "cityscape",
      "skyline"
    ],
    u: "1f3d9-fe0f"
  },
  {
    n: [
      "sunrise over mountains",
      "sunrise_over_mountains"
    ],
    u: "1f304"
  },
  {
    n: [
      "sunrise",
      "sunrise"
    ],
    u: "1f305"
  },
  {
    n: [
      "cityscape at dusk",
      "city_sunset"
    ],
    u: "1f306"
  },
  {
    n: [
      "sunset",
      "city_sunrise"
    ],
    u: "1f307"
  },
  {
    n: [
      "bridge at night",
      "bridge_at_night"
    ],
    u: "1f309"
  },
  {
    n: [
      "hot springs",
      "hotsprings"
    ],
    u: "2668-fe0f"
  },
  {
    n: [
      "carousel horse",
      "carousel_horse"
    ],
    u: "1f3a0"
  },
  {
    n: [
      "playground slide",
      "playground_slide"
    ],
    u: "1f6dd"
  },
  {
    n: [
      "ferris wheel",
      "ferris_wheel"
    ],
    u: "1f3a1"
  },
  {
    n: [
      "roller coaster",
      "roller_coaster"
    ],
    u: "1f3a2"
  },
  {
    n: [
      "barber pole",
      "barber"
    ],
    u: "1f488"
  },
  {
    n: [
      "circus tent",
      "circus_tent"
    ],
    u: "1f3aa"
  },
  {
    n: [
      "locomotive",
      "steam_locomotive",
      "train"
    ],
    u: "1f682"
  },
  {
    n: [
      "railway car",
      "railway_car"
    ],
    u: "1f683"
  },
  {
    n: [
      "high-speed train",
      "bullettrain_side",
      "train"
    ],
    u: "1f684"
  },
  {
    n: [
      "bullet train",
      "bullettrain_front",
      "train"
    ],
    u: "1f685"
  },
  {
    n: [
      "train",
      "train2"
    ],
    u: "1f686"
  },
  {
    n: [
      "metro",
      "metro"
    ],
    u: "1f687"
  },
  {
    n: [
      "light rail",
      "light_rail"
    ],
    u: "1f688"
  },
  {
    n: [
      "station",
      "station"
    ],
    u: "1f689"
  },
  {
    n: [
      "tram",
      "tram"
    ],
    u: "1f68a"
  },
  {
    n: [
      "monorail",
      "monorail"
    ],
    u: "1f69d"
  },
  {
    n: [
      "mountain railway",
      "mountain_railway"
    ],
    u: "1f69e"
  },
  {
    n: [
      "tram car",
      "train"
    ],
    u: "1f68b"
  },
  {
    n: [
      "bus",
      "bus"
    ],
    u: "1f68c"
  },
  {
    n: [
      "oncoming bus",
      "oncoming_bus"
    ],
    u: "1f68d"
  },
  {
    n: [
      "trolleybus",
      "trolleybus"
    ],
    u: "1f68e"
  },
  {
    n: [
      "minibus",
      "minibus"
    ],
    u: "1f690"
  },
  {
    n: [
      "ambulance",
      "ambulance"
    ],
    u: "1f691"
  },
  {
    n: [
      "fire engine",
      "fire_engine"
    ],
    u: "1f692"
  },
  {
    n: [
      "police car",
      "police_car"
    ],
    u: "1f693"
  },
  {
    n: [
      "oncoming police car",
      "oncoming_police_car"
    ],
    u: "1f694"
  },
  {
    n: [
      "taxi",
      "taxi"
    ],
    u: "1f695"
  },
  {
    n: [
      "oncoming taxi",
      "oncoming_taxi"
    ],
    u: "1f696"
  },
  {
    n: [
      "automobile",
      "car",
      "red_car"
    ],
    u: "1f697"
  },
  {
    n: [
      "oncoming automobile",
      "oncoming_automobile"
    ],
    u: "1f698"
  },
  {
    n: [
      "sport utility vehicle",
      "blue_car"
    ],
    u: "1f699"
  },
  {
    n: [
      "pickup truck",
      "pickup_truck"
    ],
    u: "1f6fb"
  },
  {
    n: [
      "delivery truck",
      "truck"
    ],
    u: "1f69a"
  },
  {
    n: [
      "articulated lorry",
      "articulated_lorry"
    ],
    u: "1f69b"
  },
  {
    n: [
      "tractor",
      "tractor"
    ],
    u: "1f69c"
  },
  {
    n: [
      "racing car",
      "racing_car"
    ],
    u: "1f3ce-fe0f"
  },
  {
    n: [
      "motorcycle",
      "motorcycle"
    ],
    u: "1f3cd-fe0f"
  },
  {
    n: [
      "motor scooter",
      "motor_scooter"
    ],
    u: "1f6f5"
  },
  {
    n: [
      "manual wheelchair",
      "manual_wheelchair"
    ],
    u: "1f9bd"
  },
  {
    n: [
      "motorized wheelchair",
      "motorized_wheelchair"
    ],
    u: "1f9bc"
  },
  {
    n: [
      "auto rickshaw",
      "auto_rickshaw"
    ],
    u: "1f6fa"
  },
  {
    n: [
      "bicycle",
      "bike",
      "bicycle"
    ],
    u: "1f6b2"
  },
  {
    n: [
      "kick scooter",
      "kick_scooter"
    ],
    u: "1f6f4"
  },
  {
    n: [
      "skateboard",
      "skateboard"
    ],
    u: "1f6f9"
  },
  {
    n: [
      "roller skate",
      "roller_skate"
    ],
    u: "1f6fc"
  },
  {
    n: [
      "bus stop",
      "busstop"
    ],
    u: "1f68f"
  },
  {
    n: [
      "motorway",
      "motorway"
    ],
    u: "1f6e3-fe0f"
  },
  {
    n: [
      "railway track",
      "railway_track"
    ],
    u: "1f6e4-fe0f"
  },
  {
    n: [
      "oil drum",
      "oil_drum"
    ],
    u: "1f6e2-fe0f"
  },
  {
    n: [
      "fuel pump",
      "fuelpump"
    ],
    u: "26fd"
  },
  {
    n: [
      "wheel",
      "wheel"
    ],
    u: "1f6de"
  },
  {
    n: [
      "police car light",
      "rotating_light",
      "911",
      "emergency"
    ],
    u: "1f6a8"
  },
  {
    n: [
      "horizontal traffic light",
      "traffic_light"
    ],
    u: "1f6a5"
  },
  {
    n: [
      "vertical traffic light",
      "vertical_traffic_light",
      "semaphore"
    ],
    u: "1f6a6"
  },
  {
    n: [
      "stop sign",
      "stop_sign"
    ],
    u: "1f6d1"
  },
  {
    n: [
      "construction",
      "construction",
      "wip"
    ],
    u: "1f6a7"
  },
  {
    n: [
      "anchor",
      "anchor",
      "ship"
    ],
    u: "2693"
  },
  {
    n: [
      "ring buoy",
      "ring_buoy",
      "life preserver"
    ],
    u: "1f6df"
  },
  {
    n: [
      "sailboat",
      "boat",
      "sailboat"
    ],
    u: "26f5"
  },
  {
    n: [
      "canoe",
      "canoe"
    ],
    u: "1f6f6"
  },
  {
    n: [
      "speedboat",
      "speedboat",
      "ship"
    ],
    u: "1f6a4"
  },
  {
    n: [
      "passenger ship",
      "passenger_ship",
      "cruise"
    ],
    u: "1f6f3-fe0f"
  },
  {
    n: [
      "ferry",
      "ferry"
    ],
    u: "26f4-fe0f"
  },
  {
    n: [
      "motor boat",
      "motor_boat"
    ],
    u: "1f6e5-fe0f"
  },
  {
    n: [
      "ship",
      "ship"
    ],
    u: "1f6a2"
  },
  {
    n: [
      "airplane",
      "airplane",
      "flight"
    ],
    u: "2708-fe0f"
  },
  {
    n: [
      "small airplane",
      "small_airplane",
      "flight"
    ],
    u: "1f6e9-fe0f"
  },
  {
    n: [
      "airplane departure",
      "flight_departure"
    ],
    u: "1f6eb"
  },
  {
    n: [
      "airplane arrival",
      "flight_arrival"
    ],
    u: "1f6ec"
  },
  {
    n: [
      "parachute",
      "parachute"
    ],
    u: "1fa82"
  },
  {
    n: [
      "seat",
      "seat"
    ],
    u: "1f4ba"
  },
  {
    n: [
      "helicopter",
      "helicopter"
    ],
    u: "1f681"
  },
  {
    n: [
      "suspension railway",
      "suspension_railway"
    ],
    u: "1f69f"
  },
  {
    n: [
      "mountain cableway",
      "mountain_cableway"
    ],
    u: "1f6a0"
  },
  {
    n: [
      "aerial tramway",
      "aerial_tramway"
    ],
    u: "1f6a1"
  },
  {
    n: [
      "satellite",
      "artificial_satellite",
      "orbit",
      "space"
    ],
    u: "1f6f0-fe0f"
  },
  {
    n: [
      "rocket",
      "rocket",
      "ship",
      "launch"
    ],
    u: "1f680"
  },
  {
    n: [
      "flying saucer",
      "flying_saucer",
      "ufo"
    ],
    u: "1f6f8"
  },
  {
    n: [
      "bellhop bell",
      "bellhop_bell"
    ],
    u: "1f6ce-fe0f"
  },
  {
    n: [
      "luggage",
      "luggage"
    ],
    u: "1f9f3"
  },
  {
    n: [
      "hourglass done",
      "hourglass",
      "time"
    ],
    u: "231b"
  },
  {
    n: [
      "hourglass not done",
      "hourglass_flowing_sand",
      "time"
    ],
    u: "23f3"
  },
  {
    n: [
      "watch",
      "watch",
      "time"
    ],
    u: "231a"
  },
  {
    n: [
      "alarm clock",
      "alarm_clock",
      "morning"
    ],
    u: "23f0"
  },
  {
    n: [
      "stopwatch",
      "stopwatch"
    ],
    u: "23f1-fe0f"
  },
  {
    n: [
      "timer clock",
      "timer_clock"
    ],
    u: "23f2-fe0f"
  },
  {
    n: [
      "mantelpiece clock",
      "mantelpiece_clock"
    ],
    u: "1f570-fe0f"
  },
  {
    n: [
      "twelve o\u2019clock",
      "clock12"
    ],
    u: "1f55b"
  },
  {
    n: [
      "twelve-thirty",
      "clock1230"
    ],
    u: "1f567"
  },
  {
    n: [
      "one o\u2019clock",
      "clock1"
    ],
    u: "1f550"
  },
  {
    n: [
      "one-thirty",
      "clock130"
    ],
    u: "1f55c"
  },
  {
    n: [
      "two o\u2019clock",
      "clock2"
    ],
    u: "1f551"
  },
  {
    n: [
      "two-thirty",
      "clock230"
    ],
    u: "1f55d"
  },
  {
    n: [
      "three o\u2019clock",
      "clock3"
    ],
    u: "1f552"
  },
  {
    n: [
      "three-thirty",
      "clock330"
    ],
    u: "1f55e"
  },
  {
    n: [
      "four o\u2019clock",
      "clock4"
    ],
    u: "1f553"
  },
  {
    n: [
      "four-thirty",
      "clock430"
    ],
    u: "1f55f"
  },
  {
    n: [
      "five o\u2019clock",
      "clock5"
    ],
    u: "1f554"
  },
  {
    n: [
      "five-thirty",
      "clock530"
    ],
    u: "1f560"
  },
  {
    n: [
      "six o\u2019clock",
      "clock6"
    ],
    u: "1f555"
  },
  {
    n: [
      "six-thirty",
      "clock630"
    ],
    u: "1f561"
  },
  {
    n: [
      "seven o\u2019clock",
      "clock7"
    ],
    u: "1f556"
  },
  {
    n: [
      "seven-thirty",
      "clock730"
    ],
    u: "1f562"
  },
  {
    n: [
      "eight o\u2019clock",
      "clock8"
    ],
    u: "1f557"
  },
  {
    n: [
      "eight-thirty",
      "clock830"
    ],
    u: "1f563"
  },
  {
    n: [
      "nine o\u2019clock",
      "clock9"
    ],
    u: "1f558"
  },
  {
    n: [
      "nine-thirty",
      "clock930"
    ],
    u: "1f564"
  },
  {
    n: [
      "ten o\u2019clock",
      "clock10"
    ],
    u: "1f559"
  },
  {
    n: [
      "ten-thirty",
      "clock1030"
    ],
    u: "1f565"
  },
  {
    n: [
      "eleven o\u2019clock",
      "clock11"
    ],
    u: "1f55a"
  },
  {
    n: [
      "eleven-thirty",
      "clock1130"
    ],
    u: "1f566"
  },
  {
    n: [
      "new moon",
      "new_moon"
    ],
    u: "1f311"
  },
  {
    n: [
      "waxing crescent moon",
      "waxing_crescent_moon"
    ],
    u: "1f312"
  },
  {
    n: [
      "first quarter moon",
      "first_quarter_moon"
    ],
    u: "1f313"
  },
  {
    n: [
      "waxing gibbous moon",
      "moon",
      "waxing_gibbous_moon"
    ],
    u: "1f314"
  },
  {
    n: [
      "full moon",
      "full_moon"
    ],
    u: "1f315"
  },
  {
    n: [
      "waning gibbous moon",
      "waning_gibbous_moon"
    ],
    u: "1f316"
  },
  {
    n: [
      "last quarter moon",
      "last_quarter_moon"
    ],
    u: "1f317"
  },
  {
    n: [
      "waning crescent moon",
      "waning_crescent_moon"
    ],
    u: "1f318"
  },
  {
    n: [
      "crescent moon",
      "crescent_moon",
      "night"
    ],
    u: "1f319"
  },
  {
    n: [
      "new moon face",
      "new_moon_with_face"
    ],
    u: "1f31a"
  },
  {
    n: [
      "first quarter moon face",
      "first_quarter_moon_with_face"
    ],
    u: "1f31b"
  },
  {
    n: [
      "last quarter moon face",
      "last_quarter_moon_with_face"
    ],
    u: "1f31c"
  },
  {
    n: [
      "thermometer",
      "thermometer"
    ],
    u: "1f321-fe0f"
  },
  {
    n: [
      "sun",
      "sunny",
      "weather"
    ],
    u: "2600-fe0f"
  },
  {
    n: [
      "full moon face",
      "full_moon_with_face"
    ],
    u: "1f31d"
  },
  {
    n: [
      "sun with face",
      "sun_with_face",
      "summer"
    ],
    u: "1f31e"
  },
  {
    n: [
      "ringed planet",
      "ringed_planet"
    ],
    u: "1fa90"
  },
  {
    n: [
      "star",
      "star"
    ],
    u: "2b50"
  },
  {
    n: [
      "glowing star",
      "star2"
    ],
    u: "1f31f"
  },
  {
    n: [
      "shooting star",
      "stars"
    ],
    u: "1f320"
  },
  {
    n: [
      "milky way",
      "milky_way"
    ],
    u: "1f30c"
  },
  {
    n: [
      "cloud",
      "cloud"
    ],
    u: "2601-fe0f"
  },
  {
    n: [
      "sun behind cloud",
      "partly_sunny",
      "weather",
      "cloud"
    ],
    u: "26c5"
  },
  {
    n: [
      "cloud with lightning and rain",
      "cloud_with_lightning_and_rain"
    ],
    u: "26c8-fe0f"
  },
  {
    n: [
      "sun behind small cloud",
      "sun_behind_small_cloud"
    ],
    u: "1f324-fe0f"
  },
  {
    n: [
      "sun behind large cloud",
      "sun_behind_large_cloud"
    ],
    u: "1f325-fe0f"
  },
  {
    n: [
      "sun behind rain cloud",
      "sun_behind_rain_cloud"
    ],
    u: "1f326-fe0f"
  },
  {
    n: [
      "cloud with rain",
      "cloud_with_rain"
    ],
    u: "1f327-fe0f"
  },
  {
    n: [
      "cloud with snow",
      "cloud_with_snow"
    ],
    u: "1f328-fe0f"
  },
  {
    n: [
      "cloud with lightning",
      "cloud_with_lightning"
    ],
    u: "1f329-fe0f"
  },
  {
    n: [
      "tornado",
      "tornado"
    ],
    u: "1f32a-fe0f"
  },
  {
    n: [
      "fog",
      "fog"
    ],
    u: "1f32b-fe0f"
  },
  {
    n: [
      "wind face",
      "wind_face"
    ],
    u: "1f32c-fe0f"
  },
  {
    n: [
      "cyclone",
      "cyclone",
      "swirl"
    ],
    u: "1f300"
  },
  {
    n: [
      "rainbow",
      "rainbow"
    ],
    u: "1f308"
  },
  {
    n: [
      "closed umbrella",
      "closed_umbrella",
      "weather",
      "rain"
    ],
    u: "1f302"
  },
  {
    n: [
      "umbrella",
      "open_umbrella"
    ],
    u: "2602-fe0f"
  },
  {
    n: [
      "umbrella with rain drops",
      "umbrella",
      "rain",
      "weather"
    ],
    u: "2614"
  },
  {
    n: [
      "umbrella on ground",
      "parasol_on_ground",
      "beach_umbrella"
    ],
    u: "26f1-fe0f"
  },
  {
    n: [
      "high voltage",
      "zap",
      "lightning",
      "thunder"
    ],
    u: "26a1"
  },
  {
    n: [
      "snowflake",
      "snowflake",
      "winter",
      "cold",
      "weather"
    ],
    u: "2744-fe0f"
  },
  {
    n: [
      "snowman",
      "snowman_with_snow",
      "winter",
      "christmas"
    ],
    u: "2603-fe0f"
  },
  {
    n: [
      "snowman without snow",
      "snowman",
      "winter"
    ],
    u: "26c4"
  },
  {
    n: [
      "comet",
      "comet"
    ],
    u: "2604-fe0f"
  },
  {
    n: [
      "fire",
      "fire",
      "burn"
    ],
    u: "1f525"
  },
  {
    n: [
      "droplet",
      "droplet",
      "water"
    ],
    u: "1f4a7"
  },
  {
    n: [
      "water wave",
      "ocean",
      "sea"
    ],
    u: "1f30a"
  }
];
const objects$1 = [
  {
    n: [
      "glasses",
      "eyeglasses",
      "glasses"
    ],
    u: "1f453"
  },
  {
    n: [
      "sunglasses",
      "dark_sunglasses"
    ],
    u: "1f576-fe0f"
  },
  {
    n: [
      "goggles",
      "goggles"
    ],
    u: "1f97d"
  },
  {
    n: [
      "lab coat",
      "lab_coat"
    ],
    u: "1f97c"
  },
  {
    n: [
      "safety vest",
      "safety_vest"
    ],
    u: "1f9ba"
  },
  {
    n: [
      "necktie",
      "necktie",
      "shirt",
      "formal"
    ],
    u: "1f454"
  },
  {
    n: [
      "t-shirt",
      "shirt",
      "tshirt"
    ],
    u: "1f455"
  },
  {
    n: [
      "jeans",
      "jeans",
      "pants"
    ],
    u: "1f456"
  },
  {
    n: [
      "scarf",
      "scarf"
    ],
    u: "1f9e3"
  },
  {
    n: [
      "gloves",
      "gloves"
    ],
    u: "1f9e4"
  },
  {
    n: [
      "coat",
      "coat"
    ],
    u: "1f9e5"
  },
  {
    n: [
      "socks",
      "socks"
    ],
    u: "1f9e6"
  },
  {
    n: [
      "dress",
      "dress"
    ],
    u: "1f457"
  },
  {
    n: [
      "kimono",
      "kimono"
    ],
    u: "1f458"
  },
  {
    n: [
      "sari",
      "sari"
    ],
    u: "1f97b"
  },
  {
    n: [
      "one-piece swimsuit",
      "one_piece_swimsuit"
    ],
    u: "1fa71"
  },
  {
    n: [
      "briefs",
      "swim_brief"
    ],
    u: "1fa72"
  },
  {
    n: [
      "shorts",
      "shorts"
    ],
    u: "1fa73"
  },
  {
    n: [
      "bikini",
      "bikini",
      "beach"
    ],
    u: "1f459"
  },
  {
    n: [
      "woman\u2019s clothes",
      "womans_clothes"
    ],
    u: "1f45a"
  },
  {
    n: [
      "purse",
      "purse"
    ],
    u: "1f45b"
  },
  {
    n: [
      "handbag",
      "handbag",
      "bag"
    ],
    u: "1f45c"
  },
  {
    n: [
      "clutch bag",
      "pouch",
      "bag"
    ],
    u: "1f45d"
  },
  {
    n: [
      "shopping bags",
      "shopping",
      "bags"
    ],
    u: "1f6cd-fe0f"
  },
  {
    n: [
      "backpack",
      "school_satchel"
    ],
    u: "1f392"
  },
  {
    n: [
      "thong sandal",
      "thong_sandal"
    ],
    u: "1fa74"
  },
  {
    n: [
      "man\u2019s shoe",
      "mans_shoe",
      "shoe"
    ],
    u: "1f45e"
  },
  {
    n: [
      "running shoe",
      "athletic_shoe",
      "sneaker",
      "sport",
      "running"
    ],
    u: "1f45f"
  },
  {
    n: [
      "hiking boot",
      "hiking_boot"
    ],
    u: "1f97e"
  },
  {
    n: [
      "flat shoe",
      "flat_shoe"
    ],
    u: "1f97f"
  },
  {
    n: [
      "high-heeled shoe",
      "high_heel",
      "shoe"
    ],
    u: "1f460"
  },
  {
    n: [
      "woman\u2019s sandal",
      "sandal",
      "shoe"
    ],
    u: "1f461"
  },
  {
    n: [
      "ballet shoes",
      "ballet_shoes"
    ],
    u: "1fa70"
  },
  {
    n: [
      "woman\u2019s boot",
      "boot"
    ],
    u: "1f462"
  },
  {
    n: [
      "crown",
      "crown",
      "king",
      "queen",
      "royal"
    ],
    u: "1f451"
  },
  {
    n: [
      "woman\u2019s hat",
      "womans_hat"
    ],
    u: "1f452"
  },
  {
    n: [
      "top hat",
      "tophat",
      "hat",
      "classy"
    ],
    u: "1f3a9"
  },
  {
    n: [
      "graduation cap",
      "mortar_board",
      "education",
      "college",
      "university",
      "graduation"
    ],
    u: "1f393"
  },
  {
    n: [
      "billed cap",
      "billed_cap"
    ],
    u: "1f9e2"
  },
  {
    n: [
      "military helmet",
      "military_helmet"
    ],
    u: "1fa96"
  },
  {
    n: [
      "rescue worker\u2019s helmet",
      "rescue_worker_helmet"
    ],
    u: "26d1-fe0f"
  },
  {
    n: [
      "prayer beads",
      "prayer_beads"
    ],
    u: "1f4ff"
  },
  {
    n: [
      "lipstick",
      "lipstick",
      "makeup"
    ],
    u: "1f484"
  },
  {
    n: [
      "ring",
      "ring",
      "wedding",
      "marriage",
      "engaged"
    ],
    u: "1f48d"
  },
  {
    n: [
      "gem stone",
      "gem",
      "diamond"
    ],
    u: "1f48e"
  },
  {
    n: [
      "muted speaker",
      "mute",
      "sound",
      "volume"
    ],
    u: "1f507"
  },
  {
    n: [
      "speaker low volume",
      "speaker"
    ],
    u: "1f508"
  },
  {
    n: [
      "speaker medium volume",
      "sound",
      "volume"
    ],
    u: "1f509"
  },
  {
    n: [
      "speaker high volume",
      "loud_sound",
      "volume"
    ],
    u: "1f50a"
  },
  {
    n: [
      "loudspeaker",
      "loudspeaker",
      "announcement"
    ],
    u: "1f4e2"
  },
  {
    n: [
      "megaphone",
      "mega"
    ],
    u: "1f4e3"
  },
  {
    n: [
      "postal horn",
      "postal_horn"
    ],
    u: "1f4ef"
  },
  {
    n: [
      "bell",
      "bell",
      "sound",
      "notification"
    ],
    u: "1f514"
  },
  {
    n: [
      "bell with slash",
      "no_bell",
      "volume",
      "off"
    ],
    u: "1f515"
  },
  {
    n: [
      "musical score",
      "musical_score"
    ],
    u: "1f3bc"
  },
  {
    n: [
      "musical note",
      "musical_note"
    ],
    u: "1f3b5"
  },
  {
    n: [
      "musical notes",
      "notes",
      "music"
    ],
    u: "1f3b6"
  },
  {
    n: [
      "studio microphone",
      "studio_microphone",
      "podcast"
    ],
    u: "1f399-fe0f"
  },
  {
    n: [
      "level slider",
      "level_slider"
    ],
    u: "1f39a-fe0f"
  },
  {
    n: [
      "control knobs",
      "control_knobs"
    ],
    u: "1f39b-fe0f"
  },
  {
    n: [
      "microphone",
      "microphone",
      "sing"
    ],
    u: "1f3a4"
  },
  {
    n: [
      "headphone",
      "headphones",
      "music",
      "earphones"
    ],
    u: "1f3a7"
  },
  {
    n: [
      "radio",
      "radio",
      "podcast"
    ],
    u: "1f4fb"
  },
  {
    n: [
      "saxophone",
      "saxophone"
    ],
    u: "1f3b7"
  },
  {
    n: [
      "accordion",
      "accordion"
    ],
    u: "1fa97"
  },
  {
    n: [
      "guitar",
      "guitar",
      "rock"
    ],
    u: "1f3b8"
  },
  {
    n: [
      "musical keyboard",
      "musical_keyboard",
      "piano"
    ],
    u: "1f3b9"
  },
  {
    n: [
      "trumpet",
      "trumpet"
    ],
    u: "1f3ba"
  },
  {
    n: [
      "violin",
      "violin"
    ],
    u: "1f3bb"
  },
  {
    n: [
      "banjo",
      "banjo"
    ],
    u: "1fa95"
  },
  {
    n: [
      "drum",
      "drum"
    ],
    u: "1f941"
  },
  {
    n: [
      "long drum",
      "long_drum"
    ],
    u: "1fa98"
  },
  {
    n: [
      "mobile phone",
      "iphone",
      "smartphone",
      "mobile"
    ],
    u: "1f4f1"
  },
  {
    n: [
      "mobile phone with arrow",
      "calling",
      "call",
      "incoming"
    ],
    u: "1f4f2"
  },
  {
    n: [
      "telephone",
      "phone",
      "telephone"
    ],
    u: "260e-fe0f"
  },
  {
    n: [
      "telephone receiver",
      "telephone_receiver",
      "phone",
      "call"
    ],
    u: "1f4de"
  },
  {
    n: [
      "pager",
      "pager"
    ],
    u: "1f4df"
  },
  {
    n: [
      "fax machine",
      "fax"
    ],
    u: "1f4e0"
  },
  {
    n: [
      "battery",
      "battery",
      "power"
    ],
    u: "1f50b"
  },
  {
    n: [
      "low battery",
      "low_battery"
    ],
    u: "1faab"
  },
  {
    n: [
      "electric plug",
      "electric_plug"
    ],
    u: "1f50c"
  },
  {
    n: [
      "laptop",
      "computer",
      "desktop",
      "screen"
    ],
    u: "1f4bb"
  },
  {
    n: [
      "desktop computer",
      "desktop_computer"
    ],
    u: "1f5a5-fe0f"
  },
  {
    n: [
      "printer",
      "printer"
    ],
    u: "1f5a8-fe0f"
  },
  {
    n: [
      "keyboard",
      "keyboard"
    ],
    u: "2328-fe0f"
  },
  {
    n: [
      "computer mouse",
      "computer_mouse"
    ],
    u: "1f5b1-fe0f"
  },
  {
    n: [
      "trackball",
      "trackball"
    ],
    u: "1f5b2-fe0f"
  },
  {
    n: [
      "computer disk",
      "minidisc"
    ],
    u: "1f4bd"
  },
  {
    n: [
      "floppy disk",
      "floppy_disk",
      "save"
    ],
    u: "1f4be"
  },
  {
    n: [
      "optical disk",
      "cd"
    ],
    u: "1f4bf"
  },
  {
    n: [
      "dvd",
      "dvd"
    ],
    u: "1f4c0"
  },
  {
    n: [
      "abacus",
      "abacus"
    ],
    u: "1f9ee"
  },
  {
    n: [
      "movie camera",
      "movie_camera",
      "film",
      "video"
    ],
    u: "1f3a5"
  },
  {
    n: [
      "film frames",
      "film_strip"
    ],
    u: "1f39e-fe0f"
  },
  {
    n: [
      "film projector",
      "film_projector"
    ],
    u: "1f4fd-fe0f"
  },
  {
    n: [
      "clapper board",
      "clapper",
      "film"
    ],
    u: "1f3ac"
  },
  {
    n: [
      "television",
      "tv"
    ],
    u: "1f4fa"
  },
  {
    n: [
      "camera",
      "camera",
      "photo"
    ],
    u: "1f4f7"
  },
  {
    n: [
      "camera with flash",
      "camera_flash",
      "photo"
    ],
    u: "1f4f8"
  },
  {
    n: [
      "video camera",
      "video_camera"
    ],
    u: "1f4f9"
  },
  {
    n: [
      "videocassette",
      "vhs"
    ],
    u: "1f4fc"
  },
  {
    n: [
      "magnifying glass tilted left",
      "mag",
      "search",
      "zoom"
    ],
    u: "1f50d"
  },
  {
    n: [
      "magnifying glass tilted right",
      "mag_right"
    ],
    u: "1f50e"
  },
  {
    n: [
      "candle",
      "candle"
    ],
    u: "1f56f-fe0f"
  },
  {
    n: [
      "light bulb",
      "bulb",
      "idea",
      "light"
    ],
    u: "1f4a1"
  },
  {
    n: [
      "flashlight",
      "flashlight"
    ],
    u: "1f526"
  },
  {
    n: [
      "red paper lantern",
      "izakaya_lantern",
      "lantern"
    ],
    u: "1f3ee"
  },
  {
    n: [
      "diya lamp",
      "diya_lamp"
    ],
    u: "1fa94"
  },
  {
    n: [
      "notebook with decorative cover",
      "notebook_with_decorative_cover"
    ],
    u: "1f4d4"
  },
  {
    n: [
      "closed book",
      "closed_book"
    ],
    u: "1f4d5"
  },
  {
    n: [
      "open book",
      "book",
      "open_book"
    ],
    u: "1f4d6"
  },
  {
    n: [
      "green book",
      "green_book"
    ],
    u: "1f4d7"
  },
  {
    n: [
      "blue book",
      "blue_book"
    ],
    u: "1f4d8"
  },
  {
    n: [
      "orange book",
      "orange_book"
    ],
    u: "1f4d9"
  },
  {
    n: [
      "books",
      "books",
      "library"
    ],
    u: "1f4da"
  },
  {
    n: [
      "notebook",
      "notebook"
    ],
    u: "1f4d3"
  },
  {
    n: [
      "ledger",
      "ledger"
    ],
    u: "1f4d2"
  },
  {
    n: [
      "page with curl",
      "page_with_curl"
    ],
    u: "1f4c3"
  },
  {
    n: [
      "scroll",
      "scroll",
      "document"
    ],
    u: "1f4dc"
  },
  {
    n: [
      "page facing up",
      "page_facing_up",
      "document"
    ],
    u: "1f4c4"
  },
  {
    n: [
      "newspaper",
      "newspaper",
      "press"
    ],
    u: "1f4f0"
  },
  {
    n: [
      "rolled-up newspaper",
      "newspaper_roll",
      "press"
    ],
    u: "1f5de-fe0f"
  },
  {
    n: [
      "bookmark tabs",
      "bookmark_tabs"
    ],
    u: "1f4d1"
  },
  {
    n: [
      "bookmark",
      "bookmark"
    ],
    u: "1f516"
  },
  {
    n: [
      "label",
      "label",
      "tag"
    ],
    u: "1f3f7-fe0f"
  },
  {
    n: [
      "money bag",
      "moneybag",
      "dollar",
      "cream"
    ],
    u: "1f4b0"
  },
  {
    n: [
      "coin",
      "coin"
    ],
    u: "1fa99"
  },
  {
    n: [
      "yen banknote",
      "yen"
    ],
    u: "1f4b4"
  },
  {
    n: [
      "dollar banknote",
      "dollar",
      "money"
    ],
    u: "1f4b5"
  },
  {
    n: [
      "euro banknote",
      "euro"
    ],
    u: "1f4b6"
  },
  {
    n: [
      "pound banknote",
      "pound"
    ],
    u: "1f4b7"
  },
  {
    n: [
      "money with wings",
      "money_with_wings",
      "dollar"
    ],
    u: "1f4b8"
  },
  {
    n: [
      "credit card",
      "credit_card",
      "subscription"
    ],
    u: "1f4b3"
  },
  {
    n: [
      "receipt",
      "receipt"
    ],
    u: "1f9fe"
  },
  {
    n: [
      "chart increasing with yen",
      "chart"
    ],
    u: "1f4b9"
  },
  {
    n: [
      "envelope",
      "envelope",
      "letter",
      "email"
    ],
    u: "2709-fe0f"
  },
  {
    n: [
      "e-mail",
      "email",
      "e-mail"
    ],
    u: "1f4e7"
  },
  {
    n: [
      "incoming envelope",
      "incoming_envelope"
    ],
    u: "1f4e8"
  },
  {
    n: [
      "envelope with arrow",
      "envelope_with_arrow"
    ],
    u: "1f4e9"
  },
  {
    n: [
      "outbox tray",
      "outbox_tray"
    ],
    u: "1f4e4"
  },
  {
    n: [
      "inbox tray",
      "inbox_tray"
    ],
    u: "1f4e5"
  },
  {
    n: [
      "package",
      "package",
      "shipping"
    ],
    u: "1f4e6"
  },
  {
    n: [
      "closed mailbox with raised flag",
      "mailbox"
    ],
    u: "1f4eb"
  },
  {
    n: [
      "closed mailbox with lowered flag",
      "mailbox_closed"
    ],
    u: "1f4ea"
  },
  {
    n: [
      "open mailbox with raised flag",
      "mailbox_with_mail"
    ],
    u: "1f4ec"
  },
  {
    n: [
      "open mailbox with lowered flag",
      "mailbox_with_no_mail"
    ],
    u: "1f4ed"
  },
  {
    n: [
      "postbox",
      "postbox"
    ],
    u: "1f4ee"
  },
  {
    n: [
      "ballot box with ballot",
      "ballot_box"
    ],
    u: "1f5f3-fe0f"
  },
  {
    n: [
      "pencil",
      "pencil2"
    ],
    u: "270f-fe0f"
  },
  {
    n: [
      "black nib",
      "black_nib"
    ],
    u: "2712-fe0f"
  },
  {
    n: [
      "fountain pen",
      "fountain_pen"
    ],
    u: "1f58b-fe0f"
  },
  {
    n: [
      "pen",
      "pen"
    ],
    u: "1f58a-fe0f"
  },
  {
    n: [
      "paintbrush",
      "paintbrush"
    ],
    u: "1f58c-fe0f"
  },
  {
    n: [
      "crayon",
      "crayon"
    ],
    u: "1f58d-fe0f"
  },
  {
    n: [
      "memo",
      "memo",
      "pencil",
      "document",
      "note"
    ],
    u: "1f4dd"
  },
  {
    n: [
      "briefcase",
      "briefcase",
      "business"
    ],
    u: "1f4bc"
  },
  {
    n: [
      "file folder",
      "file_folder",
      "directory"
    ],
    u: "1f4c1"
  },
  {
    n: [
      "open file folder",
      "open_file_folder"
    ],
    u: "1f4c2"
  },
  {
    n: [
      "card index dividers",
      "card_index_dividers"
    ],
    u: "1f5c2-fe0f"
  },
  {
    n: [
      "calendar",
      "date",
      "calendar",
      "schedule"
    ],
    u: "1f4c5"
  },
  {
    n: [
      "tear-off calendar",
      "calendar",
      "schedule"
    ],
    u: "1f4c6"
  },
  {
    n: [
      "spiral notepad",
      "spiral_notepad"
    ],
    u: "1f5d2-fe0f"
  },
  {
    n: [
      "spiral calendar",
      "spiral_calendar"
    ],
    u: "1f5d3-fe0f"
  },
  {
    n: [
      "card index",
      "card_index"
    ],
    u: "1f4c7"
  },
  {
    n: [
      "chart increasing",
      "chart_with_upwards_trend",
      "graph",
      "metrics"
    ],
    u: "1f4c8"
  },
  {
    n: [
      "chart decreasing",
      "chart_with_downwards_trend",
      "graph",
      "metrics"
    ],
    u: "1f4c9"
  },
  {
    n: [
      "bar chart",
      "bar_chart",
      "stats",
      "metrics"
    ],
    u: "1f4ca"
  },
  {
    n: [
      "clipboard",
      "clipboard"
    ],
    u: "1f4cb"
  },
  {
    n: [
      "pushpin",
      "pushpin",
      "location"
    ],
    u: "1f4cc"
  },
  {
    n: [
      "round pushpin",
      "round_pushpin",
      "location"
    ],
    u: "1f4cd"
  },
  {
    n: [
      "paperclip",
      "paperclip"
    ],
    u: "1f4ce"
  },
  {
    n: [
      "linked paperclips",
      "paperclips"
    ],
    u: "1f587-fe0f"
  },
  {
    n: [
      "straight ruler",
      "straight_ruler"
    ],
    u: "1f4cf"
  },
  {
    n: [
      "triangular ruler",
      "triangular_ruler"
    ],
    u: "1f4d0"
  },
  {
    n: [
      "scissors",
      "scissors",
      "cut"
    ],
    u: "2702-fe0f"
  },
  {
    n: [
      "card file box",
      "card_file_box"
    ],
    u: "1f5c3-fe0f"
  },
  {
    n: [
      "file cabinet",
      "file_cabinet"
    ],
    u: "1f5c4-fe0f"
  },
  {
    n: [
      "wastebasket",
      "wastebasket",
      "trash"
    ],
    u: "1f5d1-fe0f"
  },
  {
    n: [
      "locked",
      "lock",
      "security",
      "private"
    ],
    u: "1f512"
  },
  {
    n: [
      "unlocked",
      "unlock",
      "security"
    ],
    u: "1f513"
  },
  {
    n: [
      "locked with pen",
      "lock_with_ink_pen"
    ],
    u: "1f50f"
  },
  {
    n: [
      "locked with key",
      "closed_lock_with_key",
      "security"
    ],
    u: "1f510"
  },
  {
    n: [
      "key",
      "key",
      "lock",
      "password"
    ],
    u: "1f511"
  },
  {
    n: [
      "old key",
      "old_key"
    ],
    u: "1f5dd-fe0f"
  },
  {
    n: [
      "hammer",
      "hammer",
      "tool"
    ],
    u: "1f528"
  },
  {
    n: [
      "axe",
      "axe"
    ],
    u: "1fa93"
  },
  {
    n: [
      "pick",
      "pick"
    ],
    u: "26cf-fe0f"
  },
  {
    n: [
      "hammer and pick",
      "hammer_and_pick"
    ],
    u: "2692-fe0f"
  },
  {
    n: [
      "hammer and wrench",
      "hammer_and_wrench"
    ],
    u: "1f6e0-fe0f"
  },
  {
    n: [
      "dagger",
      "dagger"
    ],
    u: "1f5e1-fe0f"
  },
  {
    n: [
      "crossed swords",
      "crossed_swords"
    ],
    u: "2694-fe0f"
  },
  {
    n: [
      "water pistol",
      "gun",
      "shoot",
      "weapon"
    ],
    u: "1f52b"
  },
  {
    n: [
      "boomerang",
      "boomerang"
    ],
    u: "1fa83"
  },
  {
    n: [
      "bow and arrow",
      "bow_and_arrow",
      "archery"
    ],
    u: "1f3f9"
  },
  {
    n: [
      "shield",
      "shield"
    ],
    u: "1f6e1-fe0f"
  },
  {
    n: [
      "carpentry saw",
      "carpentry_saw"
    ],
    u: "1fa9a"
  },
  {
    n: [
      "wrench",
      "wrench",
      "tool"
    ],
    u: "1f527"
  },
  {
    n: [
      "screwdriver",
      "screwdriver"
    ],
    u: "1fa9b"
  },
  {
    n: [
      "nut and bolt",
      "nut_and_bolt"
    ],
    u: "1f529"
  },
  {
    n: [
      "gear",
      "gear"
    ],
    u: "2699-fe0f"
  },
  {
    n: [
      "clamp",
      "clamp"
    ],
    u: "1f5dc-fe0f"
  },
  {
    n: [
      "balance scale",
      "balance_scale"
    ],
    u: "2696-fe0f"
  },
  {
    n: [
      "white cane",
      "probing_cane"
    ],
    u: "1f9af"
  },
  {
    n: [
      "link",
      "link"
    ],
    u: "1f517"
  },
  {
    n: [
      "chains",
      "chains"
    ],
    u: "26d3-fe0f"
  },
  {
    n: [
      "hook",
      "hook"
    ],
    u: "1fa9d"
  },
  {
    n: [
      "toolbox",
      "toolbox"
    ],
    u: "1f9f0"
  },
  {
    n: [
      "magnet",
      "magnet"
    ],
    u: "1f9f2"
  },
  {
    n: [
      "ladder",
      "ladder"
    ],
    u: "1fa9c"
  },
  {
    n: [
      "alembic",
      "alembic"
    ],
    u: "2697-fe0f"
  },
  {
    n: [
      "test tube",
      "test_tube"
    ],
    u: "1f9ea"
  },
  {
    n: [
      "petri dish",
      "petri_dish"
    ],
    u: "1f9eb"
  },
  {
    n: [
      "dna",
      "dna"
    ],
    u: "1f9ec"
  },
  {
    n: [
      "microscope",
      "microscope",
      "science",
      "laboratory",
      "investigate"
    ],
    u: "1f52c"
  },
  {
    n: [
      "telescope",
      "telescope"
    ],
    u: "1f52d"
  },
  {
    n: [
      "satellite antenna",
      "satellite",
      "signal"
    ],
    u: "1f4e1"
  },
  {
    n: [
      "syringe",
      "syringe",
      "health",
      "hospital",
      "needle"
    ],
    u: "1f489"
  },
  {
    n: [
      "drop of blood",
      "drop_of_blood"
    ],
    u: "1fa78"
  },
  {
    n: [
      "pill",
      "pill",
      "health",
      "medicine"
    ],
    u: "1f48a"
  },
  {
    n: [
      "adhesive bandage",
      "adhesive_bandage"
    ],
    u: "1fa79"
  },
  {
    n: [
      "crutch",
      "crutch"
    ],
    u: "1fa7c"
  },
  {
    n: [
      "stethoscope",
      "stethoscope"
    ],
    u: "1fa7a"
  },
  {
    n: [
      "x-ray",
      "x_ray"
    ],
    u: "1fa7b"
  },
  {
    n: [
      "door",
      "door"
    ],
    u: "1f6aa"
  },
  {
    n: [
      "elevator",
      "elevator"
    ],
    u: "1f6d7"
  },
  {
    n: [
      "mirror",
      "mirror"
    ],
    u: "1fa9e"
  },
  {
    n: [
      "window",
      "window"
    ],
    u: "1fa9f"
  },
  {
    n: [
      "bed",
      "bed"
    ],
    u: "1f6cf-fe0f"
  },
  {
    n: [
      "couch and lamp",
      "couch_and_lamp"
    ],
    u: "1f6cb-fe0f"
  },
  {
    n: [
      "chair",
      "chair"
    ],
    u: "1fa91"
  },
  {
    n: [
      "toilet",
      "toilet",
      "wc"
    ],
    u: "1f6bd"
  },
  {
    n: [
      "plunger",
      "plunger"
    ],
    u: "1faa0"
  },
  {
    n: [
      "shower",
      "shower",
      "bath"
    ],
    u: "1f6bf"
  },
  {
    n: [
      "bathtub",
      "bathtub"
    ],
    u: "1f6c1"
  },
  {
    n: [
      "mouse trap",
      "mouse_trap"
    ],
    u: "1faa4"
  },
  {
    n: [
      "razor",
      "razor"
    ],
    u: "1fa92"
  },
  {
    n: [
      "lotion bottle",
      "lotion_bottle"
    ],
    u: "1f9f4"
  },
  {
    n: [
      "safety pin",
      "safety_pin"
    ],
    u: "1f9f7"
  },
  {
    n: [
      "broom",
      "broom"
    ],
    u: "1f9f9"
  },
  {
    n: [
      "basket",
      "basket"
    ],
    u: "1f9fa"
  },
  {
    n: [
      "roll of paper",
      "roll_of_paper",
      "toilet"
    ],
    u: "1f9fb"
  },
  {
    n: [
      "bucket",
      "bucket"
    ],
    u: "1faa3"
  },
  {
    n: [
      "soap",
      "soap"
    ],
    u: "1f9fc"
  },
  {
    n: [
      "bubbles",
      "bubbles"
    ],
    u: "1fae7"
  },
  {
    n: [
      "toothbrush",
      "toothbrush"
    ],
    u: "1faa5"
  },
  {
    n: [
      "sponge",
      "sponge"
    ],
    u: "1f9fd"
  },
  {
    n: [
      "fire extinguisher",
      "fire_extinguisher"
    ],
    u: "1f9ef"
  },
  {
    n: [
      "shopping cart",
      "shopping_cart"
    ],
    u: "1f6d2"
  },
  {
    n: [
      "cigarette",
      "smoking",
      "cigarette"
    ],
    u: "1f6ac"
  },
  {
    n: [
      "coffin",
      "coffin",
      "funeral"
    ],
    u: "26b0-fe0f"
  },
  {
    n: [
      "headstone",
      "headstone"
    ],
    u: "1faa6"
  },
  {
    n: [
      "funeral urn",
      "funeral_urn"
    ],
    u: "26b1-fe0f"
  },
  {
    n: [
      "moai",
      "moyai",
      "stone"
    ],
    u: "1f5ff"
  },
  {
    n: [
      "placard",
      "placard"
    ],
    u: "1faa7"
  },
  {
    n: [
      "identification card",
      "identification_card"
    ],
    u: "1faaa"
  }
];
const symbols$1 = [
  {
    n: [
      "ATM sign",
      "atm"
    ],
    u: "1f3e7"
  },
  {
    n: [
      "litter in bin sign",
      "put_litter_in_its_place"
    ],
    u: "1f6ae"
  },
  {
    n: [
      "potable water",
      "potable_water"
    ],
    u: "1f6b0"
  },
  {
    n: [
      "wheelchair symbol",
      "wheelchair",
      "accessibility"
    ],
    u: "267f"
  },
  {
    n: [
      "men\u2019s room",
      "mens"
    ],
    u: "1f6b9"
  },
  {
    n: [
      "women\u2019s room",
      "womens"
    ],
    u: "1f6ba"
  },
  {
    n: [
      "restroom",
      "restroom",
      "toilet"
    ],
    u: "1f6bb"
  },
  {
    n: [
      "baby symbol",
      "baby_symbol"
    ],
    u: "1f6bc"
  },
  {
    n: [
      "water closet",
      "wc",
      "toilet",
      "restroom"
    ],
    u: "1f6be"
  },
  {
    n: [
      "passport control",
      "passport_control"
    ],
    u: "1f6c2"
  },
  {
    n: [
      "customs",
      "customs"
    ],
    u: "1f6c3"
  },
  {
    n: [
      "baggage claim",
      "baggage_claim",
      "airport"
    ],
    u: "1f6c4"
  },
  {
    n: [
      "left luggage",
      "left_luggage"
    ],
    u: "1f6c5"
  },
  {
    n: [
      "warning",
      "warning",
      "wip"
    ],
    u: "26a0-fe0f"
  },
  {
    n: [
      "children crossing",
      "children_crossing"
    ],
    u: "1f6b8"
  },
  {
    n: [
      "no entry",
      "no_entry",
      "limit"
    ],
    u: "26d4"
  },
  {
    n: [
      "prohibited",
      "no_entry_sign",
      "block",
      "forbidden"
    ],
    u: "1f6ab"
  },
  {
    n: [
      "no bicycles",
      "no_bicycles"
    ],
    u: "1f6b3"
  },
  {
    n: [
      "no smoking",
      "no_smoking"
    ],
    u: "1f6ad"
  },
  {
    n: [
      "no littering",
      "do_not_litter"
    ],
    u: "1f6af"
  },
  {
    n: [
      "non-potable water",
      "non-potable_water"
    ],
    u: "1f6b1"
  },
  {
    n: [
      "no pedestrians",
      "no_pedestrians"
    ],
    u: "1f6b7"
  },
  {
    n: [
      "no mobile phones",
      "no_mobile_phones"
    ],
    u: "1f4f5"
  },
  {
    n: [
      "no one under eighteen",
      "underage"
    ],
    u: "1f51e"
  },
  {
    n: [
      "radioactive",
      "radioactive"
    ],
    u: "2622-fe0f"
  },
  {
    n: [
      "biohazard",
      "biohazard"
    ],
    u: "2623-fe0f"
  },
  {
    n: [
      "up arrow",
      "arrow_up"
    ],
    u: "2b06-fe0f"
  },
  {
    n: [
      "up-right arrow",
      "arrow_upper_right"
    ],
    u: "2197-fe0f"
  },
  {
    n: [
      "right arrow",
      "arrow_right"
    ],
    u: "27a1-fe0f"
  },
  {
    n: [
      "down-right arrow",
      "arrow_lower_right"
    ],
    u: "2198-fe0f"
  },
  {
    n: [
      "down arrow",
      "arrow_down"
    ],
    u: "2b07-fe0f"
  },
  {
    n: [
      "down-left arrow",
      "arrow_lower_left"
    ],
    u: "2199-fe0f"
  },
  {
    n: [
      "left arrow",
      "arrow_left"
    ],
    u: "2b05-fe0f"
  },
  {
    n: [
      "up-left arrow",
      "arrow_upper_left"
    ],
    u: "2196-fe0f"
  },
  {
    n: [
      "up-down arrow",
      "arrow_up_down"
    ],
    u: "2195-fe0f"
  },
  {
    n: [
      "left-right arrow",
      "left_right_arrow"
    ],
    u: "2194-fe0f"
  },
  {
    n: [
      "right arrow curving left",
      "leftwards_arrow_with_hook",
      "return"
    ],
    u: "21a9-fe0f"
  },
  {
    n: [
      "left arrow curving right",
      "arrow_right_hook"
    ],
    u: "21aa-fe0f"
  },
  {
    n: [
      "right arrow curving up",
      "arrow_heading_up"
    ],
    u: "2934-fe0f"
  },
  {
    n: [
      "right arrow curving down",
      "arrow_heading_down"
    ],
    u: "2935-fe0f"
  },
  {
    n: [
      "clockwise vertical arrows",
      "arrows_clockwise"
    ],
    u: "1f503"
  },
  {
    n: [
      "counterclockwise arrows button",
      "arrows_counterclockwise",
      "sync"
    ],
    u: "1f504"
  },
  {
    n: [
      "BACK arrow",
      "back"
    ],
    u: "1f519"
  },
  {
    n: [
      "END arrow",
      "end"
    ],
    u: "1f51a"
  },
  {
    n: [
      "ON! arrow",
      "on"
    ],
    u: "1f51b"
  },
  {
    n: [
      "SOON arrow",
      "soon"
    ],
    u: "1f51c"
  },
  {
    n: [
      "TOP arrow",
      "top"
    ],
    u: "1f51d"
  },
  {
    n: [
      "place of worship",
      "place_of_worship"
    ],
    u: "1f6d0"
  },
  {
    n: [
      "atom symbol",
      "atom_symbol"
    ],
    u: "269b-fe0f"
  },
  {
    n: [
      "om",
      "om"
    ],
    u: "1f549-fe0f"
  },
  {
    n: [
      "star of David",
      "star_of_david"
    ],
    u: "2721-fe0f"
  },
  {
    n: [
      "wheel of dharma",
      "wheel_of_dharma"
    ],
    u: "2638-fe0f"
  },
  {
    n: [
      "yin yang",
      "yin_yang"
    ],
    u: "262f-fe0f"
  },
  {
    n: [
      "latin cross",
      "latin_cross"
    ],
    u: "271d-fe0f"
  },
  {
    n: [
      "orthodox cross",
      "orthodox_cross"
    ],
    u: "2626-fe0f"
  },
  {
    n: [
      "star and crescent",
      "star_and_crescent"
    ],
    u: "262a-fe0f"
  },
  {
    n: [
      "peace symbol",
      "peace_symbol"
    ],
    u: "262e-fe0f"
  },
  {
    n: [
      "menorah",
      "menorah"
    ],
    u: "1f54e"
  },
  {
    n: [
      "dotted six-pointed star",
      "six_pointed_star"
    ],
    u: "1f52f"
  },
  {
    n: [
      "Aries",
      "aries"
    ],
    u: "2648"
  },
  {
    n: [
      "Taurus",
      "taurus"
    ],
    u: "2649"
  },
  {
    n: [
      "Gemini",
      "gemini"
    ],
    u: "264a"
  },
  {
    n: [
      "Cancer",
      "cancer"
    ],
    u: "264b"
  },
  {
    n: [
      "Leo",
      "leo"
    ],
    u: "264c"
  },
  {
    n: [
      "Virgo",
      "virgo"
    ],
    u: "264d"
  },
  {
    n: [
      "Libra",
      "libra"
    ],
    u: "264e"
  },
  {
    n: [
      "Scorpio",
      "scorpius"
    ],
    u: "264f"
  },
  {
    n: [
      "Sagittarius",
      "sagittarius"
    ],
    u: "2650"
  },
  {
    n: [
      "Capricorn",
      "capricorn"
    ],
    u: "2651"
  },
  {
    n: [
      "Aquarius",
      "aquarius"
    ],
    u: "2652"
  },
  {
    n: [
      "Pisces",
      "pisces"
    ],
    u: "2653"
  },
  {
    n: [
      "Ophiuchus",
      "ophiuchus"
    ],
    u: "26ce"
  },
  {
    n: [
      "shuffle tracks button",
      "twisted_rightwards_arrows",
      "shuffle"
    ],
    u: "1f500"
  },
  {
    n: [
      "repeat button",
      "repeat",
      "loop"
    ],
    u: "1f501"
  },
  {
    n: [
      "repeat single button",
      "repeat_one"
    ],
    u: "1f502"
  },
  {
    n: [
      "play button",
      "arrow_forward"
    ],
    u: "25b6-fe0f"
  },
  {
    n: [
      "fast-forward button",
      "fast_forward"
    ],
    u: "23e9"
  },
  {
    n: [
      "next track button",
      "next_track_button"
    ],
    u: "23ed-fe0f"
  },
  {
    n: [
      "play or pause button",
      "play_or_pause_button"
    ],
    u: "23ef-fe0f"
  },
  {
    n: [
      "reverse button",
      "arrow_backward"
    ],
    u: "25c0-fe0f"
  },
  {
    n: [
      "fast reverse button",
      "rewind"
    ],
    u: "23ea"
  },
  {
    n: [
      "last track button",
      "previous_track_button"
    ],
    u: "23ee-fe0f"
  },
  {
    n: [
      "upwards button",
      "arrow_up_small"
    ],
    u: "1f53c"
  },
  {
    n: [
      "fast up button",
      "arrow_double_up"
    ],
    u: "23eb"
  },
  {
    n: [
      "downwards button",
      "arrow_down_small"
    ],
    u: "1f53d"
  },
  {
    n: [
      "fast down button",
      "arrow_double_down"
    ],
    u: "23ec"
  },
  {
    n: [
      "pause button",
      "pause_button"
    ],
    u: "23f8-fe0f"
  },
  {
    n: [
      "stop button",
      "stop_button"
    ],
    u: "23f9-fe0f"
  },
  {
    n: [
      "record button",
      "record_button"
    ],
    u: "23fa-fe0f"
  },
  {
    n: [
      "eject button",
      "eject_button"
    ],
    u: "23cf-fe0f"
  },
  {
    n: [
      "cinema",
      "cinema",
      "film",
      "movie"
    ],
    u: "1f3a6"
  },
  {
    n: [
      "dim button",
      "low_brightness"
    ],
    u: "1f505"
  },
  {
    n: [
      "bright button",
      "high_brightness"
    ],
    u: "1f506"
  },
  {
    n: [
      "antenna bars",
      "signal_strength",
      "wifi"
    ],
    u: "1f4f6"
  },
  {
    n: [
      "vibration mode",
      "vibration_mode"
    ],
    u: "1f4f3"
  },
  {
    n: [
      "mobile phone off",
      "mobile_phone_off",
      "mute",
      "off"
    ],
    u: "1f4f4"
  },
  {
    n: [
      "female sign",
      "female_sign"
    ],
    u: "2640-fe0f"
  },
  {
    n: [
      "male sign",
      "male_sign"
    ],
    u: "2642-fe0f"
  },
  {
    n: [
      "transgender symbol",
      "transgender_symbol"
    ],
    u: "26a7-fe0f"
  },
  {
    n: [
      "multiply",
      "heavy_multiplication_x"
    ],
    u: "2716-fe0f"
  },
  {
    n: [
      "plus",
      "heavy_plus_sign"
    ],
    u: "2795"
  },
  {
    n: [
      "minus",
      "heavy_minus_sign"
    ],
    u: "2796"
  },
  {
    n: [
      "divide",
      "heavy_division_sign"
    ],
    u: "2797"
  },
  {
    n: [
      "heavy equals sign",
      "heavy_equals_sign"
    ],
    u: "1f7f0"
  },
  {
    n: [
      "infinity",
      "infinity"
    ],
    u: "267e-fe0f"
  },
  {
    n: [
      "double exclamation mark",
      "bangbang"
    ],
    u: "203c-fe0f"
  },
  {
    n: [
      "exclamation question mark",
      "interrobang"
    ],
    u: "2049-fe0f"
  },
  {
    n: [
      "red question mark",
      "question",
      "confused"
    ],
    u: "2753"
  },
  {
    n: [
      "white question mark",
      "grey_question"
    ],
    u: "2754"
  },
  {
    n: [
      "white exclamation mark",
      "grey_exclamation"
    ],
    u: "2755"
  },
  {
    n: [
      "red exclamation mark",
      "exclamation",
      "heavy_exclamation_mark",
      "bang"
    ],
    u: "2757"
  },
  {
    n: [
      "wavy dash",
      "wavy_dash"
    ],
    u: "3030-fe0f"
  },
  {
    n: [
      "currency exchange",
      "currency_exchange"
    ],
    u: "1f4b1"
  },
  {
    n: [
      "heavy dollar sign",
      "heavy_dollar_sign"
    ],
    u: "1f4b2"
  },
  {
    n: [
      "medical symbol",
      "medical_symbol"
    ],
    u: "2695-fe0f"
  },
  {
    n: [
      "recycling symbol",
      "recycle",
      "environment",
      "green"
    ],
    u: "267b-fe0f"
  },
  {
    n: [
      "fleur-de-lis",
      "fleur_de_lis"
    ],
    u: "269c-fe0f"
  },
  {
    n: [
      "trident emblem",
      "trident"
    ],
    u: "1f531"
  },
  {
    n: [
      "name badge",
      "name_badge"
    ],
    u: "1f4db"
  },
  {
    n: [
      "Japanese symbol for beginner",
      "beginner"
    ],
    u: "1f530"
  },
  {
    n: [
      "hollow red circle",
      "o"
    ],
    u: "2b55"
  },
  {
    n: [
      "check mark button",
      "white_check_mark"
    ],
    u: "2705"
  },
  {
    n: [
      "check box with check",
      "ballot_box_with_check"
    ],
    u: "2611-fe0f"
  },
  {
    n: [
      "check mark",
      "heavy_check_mark"
    ],
    u: "2714-fe0f"
  },
  {
    n: [
      "cross mark",
      "x"
    ],
    u: "274c"
  },
  {
    n: [
      "cross mark button",
      "negative_squared_cross_mark"
    ],
    u: "274e"
  },
  {
    n: [
      "curly loop",
      "curly_loop"
    ],
    u: "27b0"
  },
  {
    n: [
      "double curly loop",
      "loop"
    ],
    u: "27bf"
  },
  {
    n: [
      "part alternation mark",
      "part_alternation_mark"
    ],
    u: "303d-fe0f"
  },
  {
    n: [
      "eight-spoked asterisk",
      "eight_spoked_asterisk"
    ],
    u: "2733-fe0f"
  },
  {
    n: [
      "eight-pointed star",
      "eight_pointed_black_star"
    ],
    u: "2734-fe0f"
  },
  {
    n: [
      "sparkle",
      "sparkle"
    ],
    u: "2747-fe0f"
  },
  {
    n: [
      "copyright",
      "copyright"
    ],
    u: "a9-fe0f"
  },
  {
    n: [
      "registered",
      "registered"
    ],
    u: "ae-fe0f"
  },
  {
    n: [
      "trade mark",
      "tm",
      "trademark"
    ],
    u: "2122-fe0f"
  },
  {
    n: [
      "keycap: #",
      "hash",
      "number"
    ],
    u: "23-fe0f-20e3"
  },
  {
    n: [
      "keycap: *",
      "asterisk"
    ],
    u: "2a-fe0f-20e3"
  },
  {
    n: [
      "keycap: 0",
      "zero"
    ],
    u: "30-fe0f-20e3"
  },
  {
    n: [
      "keycap: 1",
      "one"
    ],
    u: "31-fe0f-20e3"
  },
  {
    n: [
      "keycap: 2",
      "two"
    ],
    u: "32-fe0f-20e3"
  },
  {
    n: [
      "keycap: 3",
      "three"
    ],
    u: "33-fe0f-20e3"
  },
  {
    n: [
      "keycap: 4",
      "four"
    ],
    u: "34-fe0f-20e3"
  },
  {
    n: [
      "keycap: 5",
      "five"
    ],
    u: "35-fe0f-20e3"
  },
  {
    n: [
      "keycap: 6",
      "six"
    ],
    u: "36-fe0f-20e3"
  },
  {
    n: [
      "keycap: 7",
      "seven"
    ],
    u: "37-fe0f-20e3"
  },
  {
    n: [
      "keycap: 8",
      "eight"
    ],
    u: "38-fe0f-20e3"
  },
  {
    n: [
      "keycap: 9",
      "nine"
    ],
    u: "39-fe0f-20e3"
  },
  {
    n: [
      "keycap: 10",
      "keycap_ten"
    ],
    u: "1f51f"
  },
  {
    n: [
      "input latin uppercase",
      "capital_abcd",
      "letters"
    ],
    u: "1f520"
  },
  {
    n: [
      "input latin lowercase",
      "abcd"
    ],
    u: "1f521"
  },
  {
    n: [
      "input numbers",
      "1234",
      "numbers"
    ],
    u: "1f522"
  },
  {
    n: [
      "input symbols",
      "symbols"
    ],
    u: "1f523"
  },
  {
    n: [
      "input latin letters",
      "abc",
      "alphabet"
    ],
    u: "1f524"
  },
  {
    n: [
      "A button (blood type)",
      "a"
    ],
    u: "1f170-fe0f"
  },
  {
    n: [
      "AB button (blood type)",
      "ab"
    ],
    u: "1f18e"
  },
  {
    n: [
      "B button (blood type)",
      "b"
    ],
    u: "1f171-fe0f"
  },
  {
    n: [
      "CL button",
      "cl"
    ],
    u: "1f191"
  },
  {
    n: [
      "COOL button",
      "cool"
    ],
    u: "1f192"
  },
  {
    n: [
      "FREE button",
      "free"
    ],
    u: "1f193"
  },
  {
    n: [
      "information",
      "information_source"
    ],
    u: "2139-fe0f"
  },
  {
    n: [
      "ID button",
      "id"
    ],
    u: "1f194"
  },
  {
    n: [
      "circled M",
      "m"
    ],
    u: "24c2-fe0f"
  },
  {
    n: [
      "NEW button",
      "new",
      "fresh"
    ],
    u: "1f195"
  },
  {
    n: [
      "NG button",
      "ng"
    ],
    u: "1f196"
  },
  {
    n: [
      "O button (blood type)",
      "o2"
    ],
    u: "1f17e-fe0f"
  },
  {
    n: [
      "OK button",
      "ok",
      "yes"
    ],
    u: "1f197"
  },
  {
    n: [
      "P button",
      "parking"
    ],
    u: "1f17f-fe0f"
  },
  {
    n: [
      "SOS button",
      "sos",
      "help",
      "emergency"
    ],
    u: "1f198"
  },
  {
    n: [
      "UP! button",
      "up"
    ],
    u: "1f199"
  },
  {
    n: [
      "VS button",
      "vs"
    ],
    u: "1f19a"
  },
  {
    n: [
      "Japanese \u201Chere\u201D button",
      "koko"
    ],
    u: "1f201"
  },
  {
    n: [
      "Japanese \u201Cservice charge\u201D button",
      "sa"
    ],
    u: "1f202-fe0f"
  },
  {
    n: [
      "Japanese \u201Cmonthly amount\u201D button",
      "u6708"
    ],
    u: "1f237-fe0f"
  },
  {
    n: [
      "Japanese \u201Cnot free of charge\u201D button",
      "u6709"
    ],
    u: "1f236"
  },
  {
    n: [
      "Japanese \u201Creserved\u201D button",
      "u6307"
    ],
    u: "1f22f"
  },
  {
    n: [
      "Japanese \u201Cbargain\u201D button",
      "ideograph_advantage"
    ],
    u: "1f250"
  },
  {
    n: [
      "Japanese \u201Cdiscount\u201D button",
      "u5272"
    ],
    u: "1f239"
  },
  {
    n: [
      "Japanese \u201Cfree of charge\u201D button",
      "u7121"
    ],
    u: "1f21a"
  },
  {
    n: [
      "Japanese \u201Cprohibited\u201D button",
      "u7981"
    ],
    u: "1f232"
  },
  {
    n: [
      "Japanese \u201Cacceptable\u201D button",
      "accept"
    ],
    u: "1f251"
  },
  {
    n: [
      "Japanese \u201Capplication\u201D button",
      "u7533"
    ],
    u: "1f238"
  },
  {
    n: [
      "Japanese \u201Cpassing grade\u201D button",
      "u5408"
    ],
    u: "1f234"
  },
  {
    n: [
      "Japanese \u201Cvacancy\u201D button",
      "u7a7a"
    ],
    u: "1f233"
  },
  {
    n: [
      "Japanese \u201Ccongratulations\u201D button",
      "congratulations"
    ],
    u: "3297-fe0f"
  },
  {
    n: [
      "Japanese \u201Csecret\u201D button",
      "secret"
    ],
    u: "3299-fe0f"
  },
  {
    n: [
      "Japanese \u201Copen for business\u201D button",
      "u55b6"
    ],
    u: "1f23a"
  },
  {
    n: [
      "Japanese \u201Cno vacancy\u201D button",
      "u6e80"
    ],
    u: "1f235"
  },
  {
    n: [
      "red circle",
      "red_circle"
    ],
    u: "1f534"
  },
  {
    n: [
      "orange circle",
      "orange_circle"
    ],
    u: "1f7e0"
  },
  {
    n: [
      "yellow circle",
      "yellow_circle"
    ],
    u: "1f7e1"
  },
  {
    n: [
      "green circle",
      "green_circle"
    ],
    u: "1f7e2"
  },
  {
    n: [
      "blue circle",
      "large_blue_circle"
    ],
    u: "1f535"
  },
  {
    n: [
      "purple circle",
      "purple_circle"
    ],
    u: "1f7e3"
  },
  {
    n: [
      "brown circle",
      "brown_circle"
    ],
    u: "1f7e4"
  },
  {
    n: [
      "black circle",
      "black_circle"
    ],
    u: "26ab"
  },
  {
    n: [
      "white circle",
      "white_circle"
    ],
    u: "26aa"
  },
  {
    n: [
      "red square",
      "red_square"
    ],
    u: "1f7e5"
  },
  {
    n: [
      "orange square",
      "orange_square"
    ],
    u: "1f7e7"
  },
  {
    n: [
      "yellow square",
      "yellow_square"
    ],
    u: "1f7e8"
  },
  {
    n: [
      "green square",
      "green_square"
    ],
    u: "1f7e9"
  },
  {
    n: [
      "blue square",
      "blue_square"
    ],
    u: "1f7e6"
  },
  {
    n: [
      "purple square",
      "purple_square"
    ],
    u: "1f7ea"
  },
  {
    n: [
      "brown square",
      "brown_square"
    ],
    u: "1f7eb"
  },
  {
    n: [
      "black large square",
      "black_large_square"
    ],
    u: "2b1b"
  },
  {
    n: [
      "white large square",
      "white_large_square"
    ],
    u: "2b1c"
  },
  {
    n: [
      "black medium square",
      "black_medium_square"
    ],
    u: "25fc-fe0f"
  },
  {
    n: [
      "white medium square",
      "white_medium_square"
    ],
    u: "25fb-fe0f"
  },
  {
    n: [
      "black medium-small square",
      "black_medium_small_square"
    ],
    u: "25fe"
  },
  {
    n: [
      "white medium-small square",
      "white_medium_small_square"
    ],
    u: "25fd"
  },
  {
    n: [
      "black small square",
      "black_small_square"
    ],
    u: "25aa-fe0f"
  },
  {
    n: [
      "white small square",
      "white_small_square"
    ],
    u: "25ab-fe0f"
  },
  {
    n: [
      "large orange diamond",
      "large_orange_diamond"
    ],
    u: "1f536"
  },
  {
    n: [
      "large blue diamond",
      "large_blue_diamond"
    ],
    u: "1f537"
  },
  {
    n: [
      "small orange diamond",
      "small_orange_diamond"
    ],
    u: "1f538"
  },
  {
    n: [
      "small blue diamond",
      "small_blue_diamond"
    ],
    u: "1f539"
  },
  {
    n: [
      "red triangle pointed up",
      "small_red_triangle"
    ],
    u: "1f53a"
  },
  {
    n: [
      "red triangle pointed down",
      "small_red_triangle_down"
    ],
    u: "1f53b"
  },
  {
    n: [
      "diamond with a dot",
      "diamond_shape_with_a_dot_inside"
    ],
    u: "1f4a0"
  },
  {
    n: [
      "radio button",
      "radio_button"
    ],
    u: "1f518"
  },
  {
    n: [
      "white square button",
      "white_square_button"
    ],
    u: "1f533"
  },
  {
    n: [
      "black square button",
      "black_square_button"
    ],
    u: "1f532"
  }
];
const flags$1 = [
  {
    n: [
      "chequered flag",
      "checkered_flag",
      "milestone",
      "finish"
    ],
    u: "1f3c1"
  },
  {
    n: [
      "triangular flag",
      "triangular_flag_on_post"
    ],
    u: "1f6a9"
  },
  {
    n: [
      "crossed flags",
      "crossed_flags"
    ],
    u: "1f38c"
  },
  {
    n: [
      "black flag",
      "black_flag"
    ],
    u: "1f3f4"
  },
  {
    n: [
      "white flag",
      "white_flag"
    ],
    u: "1f3f3-fe0f"
  },
  {
    n: [
      "rainbow flag",
      "rainbow_flag",
      "pride"
    ],
    u: "1f3f3-fe0f-200d-1f308"
  },
  {
    n: [
      "transgender flag",
      "transgender_flag"
    ],
    u: "1f3f3-fe0f-200d-26a7-fe0f"
  },
  {
    n: [
      "pirate flag",
      "pirate_flag"
    ],
    u: "1f3f4-200d-2620-fe0f"
  },
  {
    n: [
      "flag: Ascension Island",
      "ascension_island"
    ],
    u: "1f1e6-1f1e8"
  },
  {
    n: [
      "flag: Andorra",
      "andorra"
    ],
    u: "1f1e6-1f1e9"
  },
  {
    n: [
      "flag: United Arab Emirates",
      "united_arab_emirates"
    ],
    u: "1f1e6-1f1ea"
  },
  {
    n: [
      "flag: Afghanistan",
      "afghanistan"
    ],
    u: "1f1e6-1f1eb"
  },
  {
    n: [
      "flag: Antigua & Barbuda",
      "antigua_barbuda"
    ],
    u: "1f1e6-1f1ec"
  },
  {
    n: [
      "flag: Anguilla",
      "anguilla"
    ],
    u: "1f1e6-1f1ee"
  },
  {
    n: [
      "flag: Albania",
      "albania"
    ],
    u: "1f1e6-1f1f1"
  },
  {
    n: [
      "flag: Armenia",
      "armenia"
    ],
    u: "1f1e6-1f1f2"
  },
  {
    n: [
      "flag: Angola",
      "angola"
    ],
    u: "1f1e6-1f1f4"
  },
  {
    n: [
      "flag: Antarctica",
      "antarctica"
    ],
    u: "1f1e6-1f1f6"
  },
  {
    n: [
      "flag: Argentina",
      "argentina"
    ],
    u: "1f1e6-1f1f7"
  },
  {
    n: [
      "flag: American Samoa",
      "american_samoa"
    ],
    u: "1f1e6-1f1f8"
  },
  {
    n: [
      "flag: Austria",
      "austria"
    ],
    u: "1f1e6-1f1f9"
  },
  {
    n: [
      "flag: Australia",
      "australia"
    ],
    u: "1f1e6-1f1fa"
  },
  {
    n: [
      "flag: Aruba",
      "aruba"
    ],
    u: "1f1e6-1f1fc"
  },
  {
    n: [
      "flag: \xC5land Islands",
      "aland_islands"
    ],
    u: "1f1e6-1f1fd"
  },
  {
    n: [
      "flag: Azerbaijan",
      "azerbaijan"
    ],
    u: "1f1e6-1f1ff"
  },
  {
    n: [
      "flag: Bosnia & Herzegovina",
      "bosnia_herzegovina"
    ],
    u: "1f1e7-1f1e6"
  },
  {
    n: [
      "flag: Barbados",
      "barbados"
    ],
    u: "1f1e7-1f1e7"
  },
  {
    n: [
      "flag: Bangladesh",
      "bangladesh"
    ],
    u: "1f1e7-1f1e9"
  },
  {
    n: [
      "flag: Belgium",
      "belgium"
    ],
    u: "1f1e7-1f1ea"
  },
  {
    n: [
      "flag: Burkina Faso",
      "burkina_faso"
    ],
    u: "1f1e7-1f1eb"
  },
  {
    n: [
      "flag: Bulgaria",
      "bulgaria"
    ],
    u: "1f1e7-1f1ec"
  },
  {
    n: [
      "flag: Bahrain",
      "bahrain"
    ],
    u: "1f1e7-1f1ed"
  },
  {
    n: [
      "flag: Burundi",
      "burundi"
    ],
    u: "1f1e7-1f1ee"
  },
  {
    n: [
      "flag: Benin",
      "benin"
    ],
    u: "1f1e7-1f1ef"
  },
  {
    n: [
      "flag: St. Barth\xE9lemy",
      "st_barthelemy"
    ],
    u: "1f1e7-1f1f1"
  },
  {
    n: [
      "flag: Bermuda",
      "bermuda"
    ],
    u: "1f1e7-1f1f2"
  },
  {
    n: [
      "flag: Brunei",
      "brunei"
    ],
    u: "1f1e7-1f1f3"
  },
  {
    n: [
      "flag: Bolivia",
      "bolivia"
    ],
    u: "1f1e7-1f1f4"
  },
  {
    n: [
      "flag: Caribbean Netherlands",
      "caribbean_netherlands"
    ],
    u: "1f1e7-1f1f6"
  },
  {
    n: [
      "flag: Brazil",
      "brazil"
    ],
    u: "1f1e7-1f1f7"
  },
  {
    n: [
      "flag: Bahamas",
      "bahamas"
    ],
    u: "1f1e7-1f1f8"
  },
  {
    n: [
      "flag: Bhutan",
      "bhutan"
    ],
    u: "1f1e7-1f1f9"
  },
  {
    n: [
      "flag: Bouvet Island",
      "bouvet_island"
    ],
    u: "1f1e7-1f1fb"
  },
  {
    n: [
      "flag: Botswana",
      "botswana"
    ],
    u: "1f1e7-1f1fc"
  },
  {
    n: [
      "flag: Belarus",
      "belarus"
    ],
    u: "1f1e7-1f1fe"
  },
  {
    n: [
      "flag: Belize",
      "belize"
    ],
    u: "1f1e7-1f1ff"
  },
  {
    n: [
      "flag: Canada",
      "canada"
    ],
    u: "1f1e8-1f1e6"
  },
  {
    n: [
      "flag: Cocos (Keeling) Islands",
      "cocos_islands",
      "keeling"
    ],
    u: "1f1e8-1f1e8"
  },
  {
    n: [
      "flag: Congo - Kinshasa",
      "congo_kinshasa"
    ],
    u: "1f1e8-1f1e9"
  },
  {
    n: [
      "flag: Central African Republic",
      "central_african_republic"
    ],
    u: "1f1e8-1f1eb"
  },
  {
    n: [
      "flag: Congo - Brazzaville",
      "congo_brazzaville"
    ],
    u: "1f1e8-1f1ec"
  },
  {
    n: [
      "flag: Switzerland",
      "switzerland"
    ],
    u: "1f1e8-1f1ed"
  },
  {
    n: [
      "flag: C\xF4te d\u2019Ivoire",
      "cote_divoire",
      "ivory"
    ],
    u: "1f1e8-1f1ee"
  },
  {
    n: [
      "flag: Cook Islands",
      "cook_islands"
    ],
    u: "1f1e8-1f1f0"
  },
  {
    n: [
      "flag: Chile",
      "chile"
    ],
    u: "1f1e8-1f1f1"
  },
  {
    n: [
      "flag: Cameroon",
      "cameroon"
    ],
    u: "1f1e8-1f1f2"
  },
  {
    n: [
      "flag: China",
      "cn",
      "china"
    ],
    u: "1f1e8-1f1f3"
  },
  {
    n: [
      "flag: Colombia",
      "colombia"
    ],
    u: "1f1e8-1f1f4"
  },
  {
    n: [
      "flag: Clipperton Island",
      "clipperton_island"
    ],
    u: "1f1e8-1f1f5"
  },
  {
    n: [
      "flag: Costa Rica",
      "costa_rica"
    ],
    u: "1f1e8-1f1f7"
  },
  {
    n: [
      "flag: Cuba",
      "cuba"
    ],
    u: "1f1e8-1f1fa"
  },
  {
    n: [
      "flag: Cape Verde",
      "cape_verde"
    ],
    u: "1f1e8-1f1fb"
  },
  {
    n: [
      "flag: Cura\xE7ao",
      "curacao"
    ],
    u: "1f1e8-1f1fc"
  },
  {
    n: [
      "flag: Christmas Island",
      "christmas_island"
    ],
    u: "1f1e8-1f1fd"
  },
  {
    n: [
      "flag: Cyprus",
      "cyprus"
    ],
    u: "1f1e8-1f1fe"
  },
  {
    n: [
      "flag: Czechia",
      "czech_republic"
    ],
    u: "1f1e8-1f1ff"
  },
  {
    n: [
      "flag: Germany",
      "de",
      "flag",
      "germany"
    ],
    u: "1f1e9-1f1ea"
  },
  {
    n: [
      "flag: Diego Garcia",
      "diego_garcia"
    ],
    u: "1f1e9-1f1ec"
  },
  {
    n: [
      "flag: Djibouti",
      "djibouti"
    ],
    u: "1f1e9-1f1ef"
  },
  {
    n: [
      "flag: Denmark",
      "denmark"
    ],
    u: "1f1e9-1f1f0"
  },
  {
    n: [
      "flag: Dominica",
      "dominica"
    ],
    u: "1f1e9-1f1f2"
  },
  {
    n: [
      "flag: Dominican Republic",
      "dominican_republic"
    ],
    u: "1f1e9-1f1f4"
  },
  {
    n: [
      "flag: Algeria",
      "algeria"
    ],
    u: "1f1e9-1f1ff"
  },
  {
    n: [
      "flag: Ceuta & Melilla",
      "ceuta_melilla"
    ],
    u: "1f1ea-1f1e6"
  },
  {
    n: [
      "flag: Ecuador",
      "ecuador"
    ],
    u: "1f1ea-1f1e8"
  },
  {
    n: [
      "flag: Estonia",
      "estonia"
    ],
    u: "1f1ea-1f1ea"
  },
  {
    n: [
      "flag: Egypt",
      "egypt"
    ],
    u: "1f1ea-1f1ec"
  },
  {
    n: [
      "flag: Western Sahara",
      "western_sahara"
    ],
    u: "1f1ea-1f1ed"
  },
  {
    n: [
      "flag: Eritrea",
      "eritrea"
    ],
    u: "1f1ea-1f1f7"
  },
  {
    n: [
      "flag: Spain",
      "es",
      "spain"
    ],
    u: "1f1ea-1f1f8"
  },
  {
    n: [
      "flag: Ethiopia",
      "ethiopia"
    ],
    u: "1f1ea-1f1f9"
  },
  {
    n: [
      "flag: European Union",
      "eu",
      "european_union"
    ],
    u: "1f1ea-1f1fa"
  },
  {
    n: [
      "flag: Finland",
      "finland"
    ],
    u: "1f1eb-1f1ee"
  },
  {
    n: [
      "flag: Fiji",
      "fiji"
    ],
    u: "1f1eb-1f1ef"
  },
  {
    n: [
      "flag: Falkland Islands",
      "falkland_islands"
    ],
    u: "1f1eb-1f1f0"
  },
  {
    n: [
      "flag: Micronesia",
      "micronesia"
    ],
    u: "1f1eb-1f1f2"
  },
  {
    n: [
      "flag: Faroe Islands",
      "faroe_islands"
    ],
    u: "1f1eb-1f1f4"
  },
  {
    n: [
      "flag: France",
      "fr",
      "france",
      "french"
    ],
    u: "1f1eb-1f1f7"
  },
  {
    n: [
      "flag: Gabon",
      "gabon"
    ],
    u: "1f1ec-1f1e6"
  },
  {
    n: [
      "flag: United Kingdom",
      "gb",
      "uk",
      "flag",
      "british"
    ],
    u: "1f1ec-1f1e7"
  },
  {
    n: [
      "flag: Grenada",
      "grenada"
    ],
    u: "1f1ec-1f1e9"
  },
  {
    n: [
      "flag: Georgia",
      "georgia"
    ],
    u: "1f1ec-1f1ea"
  },
  {
    n: [
      "flag: French Guiana",
      "french_guiana"
    ],
    u: "1f1ec-1f1eb"
  },
  {
    n: [
      "flag: Guernsey",
      "guernsey"
    ],
    u: "1f1ec-1f1ec"
  },
  {
    n: [
      "flag: Ghana",
      "ghana"
    ],
    u: "1f1ec-1f1ed"
  },
  {
    n: [
      "flag: Gibraltar",
      "gibraltar"
    ],
    u: "1f1ec-1f1ee"
  },
  {
    n: [
      "flag: Greenland",
      "greenland"
    ],
    u: "1f1ec-1f1f1"
  },
  {
    n: [
      "flag: Gambia",
      "gambia"
    ],
    u: "1f1ec-1f1f2"
  },
  {
    n: [
      "flag: Guinea",
      "guinea"
    ],
    u: "1f1ec-1f1f3"
  },
  {
    n: [
      "flag: Guadeloupe",
      "guadeloupe"
    ],
    u: "1f1ec-1f1f5"
  },
  {
    n: [
      "flag: Equatorial Guinea",
      "equatorial_guinea"
    ],
    u: "1f1ec-1f1f6"
  },
  {
    n: [
      "flag: Greece",
      "greece"
    ],
    u: "1f1ec-1f1f7"
  },
  {
    n: [
      "flag: South Georgia & South Sandwich Islands",
      "south_georgia_south_sandwich_islands"
    ],
    u: "1f1ec-1f1f8"
  },
  {
    n: [
      "flag: Guatemala",
      "guatemala"
    ],
    u: "1f1ec-1f1f9"
  },
  {
    n: [
      "flag: Guam",
      "guam"
    ],
    u: "1f1ec-1f1fa"
  },
  {
    n: [
      "flag: Guinea-Bissau",
      "guinea_bissau"
    ],
    u: "1f1ec-1f1fc"
  },
  {
    n: [
      "flag: Guyana",
      "guyana"
    ],
    u: "1f1ec-1f1fe"
  },
  {
    n: [
      "flag: Hong Kong SAR China",
      "hong_kong"
    ],
    u: "1f1ed-1f1f0"
  },
  {
    n: [
      "flag: Heard & McDonald Islands",
      "heard_mcdonald_islands"
    ],
    u: "1f1ed-1f1f2"
  },
  {
    n: [
      "flag: Honduras",
      "honduras"
    ],
    u: "1f1ed-1f1f3"
  },
  {
    n: [
      "flag: Croatia",
      "croatia"
    ],
    u: "1f1ed-1f1f7"
  },
  {
    n: [
      "flag: Haiti",
      "haiti"
    ],
    u: "1f1ed-1f1f9"
  },
  {
    n: [
      "flag: Hungary",
      "hungary"
    ],
    u: "1f1ed-1f1fa"
  },
  {
    n: [
      "flag: Canary Islands",
      "canary_islands"
    ],
    u: "1f1ee-1f1e8"
  },
  {
    n: [
      "flag: Indonesia",
      "indonesia"
    ],
    u: "1f1ee-1f1e9"
  },
  {
    n: [
      "flag: Ireland",
      "ireland"
    ],
    u: "1f1ee-1f1ea"
  },
  {
    n: [
      "flag: Israel",
      "israel"
    ],
    u: "1f1ee-1f1f1"
  },
  {
    n: [
      "flag: Isle of Man",
      "isle_of_man"
    ],
    u: "1f1ee-1f1f2"
  },
  {
    n: [
      "flag: India",
      "india"
    ],
    u: "1f1ee-1f1f3"
  },
  {
    n: [
      "flag: British Indian Ocean Territory",
      "british_indian_ocean_territory"
    ],
    u: "1f1ee-1f1f4"
  },
  {
    n: [
      "flag: Iraq",
      "iraq"
    ],
    u: "1f1ee-1f1f6"
  },
  {
    n: [
      "flag: Iran",
      "iran"
    ],
    u: "1f1ee-1f1f7"
  },
  {
    n: [
      "flag: Iceland",
      "iceland"
    ],
    u: "1f1ee-1f1f8"
  },
  {
    n: [
      "flag: Italy",
      "it",
      "italy"
    ],
    u: "1f1ee-1f1f9"
  },
  {
    n: [
      "flag: Jersey",
      "jersey"
    ],
    u: "1f1ef-1f1ea"
  },
  {
    n: [
      "flag: Jamaica",
      "jamaica"
    ],
    u: "1f1ef-1f1f2"
  },
  {
    n: [
      "flag: Jordan",
      "jordan"
    ],
    u: "1f1ef-1f1f4"
  },
  {
    n: [
      "flag: Japan",
      "jp",
      "japan"
    ],
    u: "1f1ef-1f1f5"
  },
  {
    n: [
      "flag: Kenya",
      "kenya"
    ],
    u: "1f1f0-1f1ea"
  },
  {
    n: [
      "flag: Kyrgyzstan",
      "kyrgyzstan"
    ],
    u: "1f1f0-1f1ec"
  },
  {
    n: [
      "flag: Cambodia",
      "cambodia"
    ],
    u: "1f1f0-1f1ed"
  },
  {
    n: [
      "flag: Kiribati",
      "kiribati"
    ],
    u: "1f1f0-1f1ee"
  },
  {
    n: [
      "flag: Comoros",
      "comoros"
    ],
    u: "1f1f0-1f1f2"
  },
  {
    n: [
      "flag: St. Kitts & Nevis",
      "st_kitts_nevis"
    ],
    u: "1f1f0-1f1f3"
  },
  {
    n: [
      "flag: North Korea",
      "north_korea"
    ],
    u: "1f1f0-1f1f5"
  },
  {
    n: [
      "flag: South Korea",
      "kr",
      "korea"
    ],
    u: "1f1f0-1f1f7"
  },
  {
    n: [
      "flag: Kuwait",
      "kuwait"
    ],
    u: "1f1f0-1f1fc"
  },
  {
    n: [
      "flag: Cayman Islands",
      "cayman_islands"
    ],
    u: "1f1f0-1f1fe"
  },
  {
    n: [
      "flag: Kazakhstan",
      "kazakhstan"
    ],
    u: "1f1f0-1f1ff"
  },
  {
    n: [
      "flag: Laos",
      "laos"
    ],
    u: "1f1f1-1f1e6"
  },
  {
    n: [
      "flag: Lebanon",
      "lebanon"
    ],
    u: "1f1f1-1f1e7"
  },
  {
    n: [
      "flag: St. Lucia",
      "st_lucia"
    ],
    u: "1f1f1-1f1e8"
  },
  {
    n: [
      "flag: Liechtenstein",
      "liechtenstein"
    ],
    u: "1f1f1-1f1ee"
  },
  {
    n: [
      "flag: Sri Lanka",
      "sri_lanka"
    ],
    u: "1f1f1-1f1f0"
  },
  {
    n: [
      "flag: Liberia",
      "liberia"
    ],
    u: "1f1f1-1f1f7"
  },
  {
    n: [
      "flag: Lesotho",
      "lesotho"
    ],
    u: "1f1f1-1f1f8"
  },
  {
    n: [
      "flag: Lithuania",
      "lithuania"
    ],
    u: "1f1f1-1f1f9"
  },
  {
    n: [
      "flag: Luxembourg",
      "luxembourg"
    ],
    u: "1f1f1-1f1fa"
  },
  {
    n: [
      "flag: Latvia",
      "latvia"
    ],
    u: "1f1f1-1f1fb"
  },
  {
    n: [
      "flag: Libya",
      "libya"
    ],
    u: "1f1f1-1f1fe"
  },
  {
    n: [
      "flag: Morocco",
      "morocco"
    ],
    u: "1f1f2-1f1e6"
  },
  {
    n: [
      "flag: Monaco",
      "monaco"
    ],
    u: "1f1f2-1f1e8"
  },
  {
    n: [
      "flag: Moldova",
      "moldova"
    ],
    u: "1f1f2-1f1e9"
  },
  {
    n: [
      "flag: Montenegro",
      "montenegro"
    ],
    u: "1f1f2-1f1ea"
  },
  {
    n: [
      "flag: St. Martin",
      "st_martin"
    ],
    u: "1f1f2-1f1eb"
  },
  {
    n: [
      "flag: Madagascar",
      "madagascar"
    ],
    u: "1f1f2-1f1ec"
  },
  {
    n: [
      "flag: Marshall Islands",
      "marshall_islands"
    ],
    u: "1f1f2-1f1ed"
  },
  {
    n: [
      "flag: North Macedonia",
      "macedonia"
    ],
    u: "1f1f2-1f1f0"
  },
  {
    n: [
      "flag: Mali",
      "mali"
    ],
    u: "1f1f2-1f1f1"
  },
  {
    n: [
      "flag: Myanmar (Burma)",
      "myanmar",
      "burma"
    ],
    u: "1f1f2-1f1f2"
  },
  {
    n: [
      "flag: Mongolia",
      "mongolia"
    ],
    u: "1f1f2-1f1f3"
  },
  {
    n: [
      "flag: Macao SAR China",
      "macau"
    ],
    u: "1f1f2-1f1f4"
  },
  {
    n: [
      "flag: Northern Mariana Islands",
      "northern_mariana_islands"
    ],
    u: "1f1f2-1f1f5"
  },
  {
    n: [
      "flag: Martinique",
      "martinique"
    ],
    u: "1f1f2-1f1f6"
  },
  {
    n: [
      "flag: Mauritania",
      "mauritania"
    ],
    u: "1f1f2-1f1f7"
  },
  {
    n: [
      "flag: Montserrat",
      "montserrat"
    ],
    u: "1f1f2-1f1f8"
  },
  {
    n: [
      "flag: Malta",
      "malta"
    ],
    u: "1f1f2-1f1f9"
  },
  {
    n: [
      "flag: Mauritius",
      "mauritius"
    ],
    u: "1f1f2-1f1fa"
  },
  {
    n: [
      "flag: Maldives",
      "maldives"
    ],
    u: "1f1f2-1f1fb"
  },
  {
    n: [
      "flag: Malawi",
      "malawi"
    ],
    u: "1f1f2-1f1fc"
  },
  {
    n: [
      "flag: Mexico",
      "mexico"
    ],
    u: "1f1f2-1f1fd"
  },
  {
    n: [
      "flag: Malaysia",
      "malaysia"
    ],
    u: "1f1f2-1f1fe"
  },
  {
    n: [
      "flag: Mozambique",
      "mozambique"
    ],
    u: "1f1f2-1f1ff"
  },
  {
    n: [
      "flag: Namibia",
      "namibia"
    ],
    u: "1f1f3-1f1e6"
  },
  {
    n: [
      "flag: New Caledonia",
      "new_caledonia"
    ],
    u: "1f1f3-1f1e8"
  },
  {
    n: [
      "flag: Niger",
      "niger"
    ],
    u: "1f1f3-1f1ea"
  },
  {
    n: [
      "flag: Norfolk Island",
      "norfolk_island"
    ],
    u: "1f1f3-1f1eb"
  },
  {
    n: [
      "flag: Nigeria",
      "nigeria"
    ],
    u: "1f1f3-1f1ec"
  },
  {
    n: [
      "flag: Nicaragua",
      "nicaragua"
    ],
    u: "1f1f3-1f1ee"
  },
  {
    n: [
      "flag: Netherlands",
      "netherlands"
    ],
    u: "1f1f3-1f1f1"
  },
  {
    n: [
      "flag: Norway",
      "norway"
    ],
    u: "1f1f3-1f1f4"
  },
  {
    n: [
      "flag: Nepal",
      "nepal"
    ],
    u: "1f1f3-1f1f5"
  },
  {
    n: [
      "flag: Nauru",
      "nauru"
    ],
    u: "1f1f3-1f1f7"
  },
  {
    n: [
      "flag: Niue",
      "niue"
    ],
    u: "1f1f3-1f1fa"
  },
  {
    n: [
      "flag: New Zealand",
      "new_zealand"
    ],
    u: "1f1f3-1f1ff"
  },
  {
    n: [
      "flag: Oman",
      "oman"
    ],
    u: "1f1f4-1f1f2"
  },
  {
    n: [
      "flag: Panama",
      "panama"
    ],
    u: "1f1f5-1f1e6"
  },
  {
    n: [
      "flag: Peru",
      "peru"
    ],
    u: "1f1f5-1f1ea"
  },
  {
    n: [
      "flag: French Polynesia",
      "french_polynesia"
    ],
    u: "1f1f5-1f1eb"
  },
  {
    n: [
      "flag: Papua New Guinea",
      "papua_new_guinea"
    ],
    u: "1f1f5-1f1ec"
  },
  {
    n: [
      "flag: Philippines",
      "philippines"
    ],
    u: "1f1f5-1f1ed"
  },
  {
    n: [
      "flag: Pakistan",
      "pakistan"
    ],
    u: "1f1f5-1f1f0"
  },
  {
    n: [
      "flag: Poland",
      "poland"
    ],
    u: "1f1f5-1f1f1"
  },
  {
    n: [
      "flag: St. Pierre & Miquelon",
      "st_pierre_miquelon"
    ],
    u: "1f1f5-1f1f2"
  },
  {
    n: [
      "flag: Pitcairn Islands",
      "pitcairn_islands"
    ],
    u: "1f1f5-1f1f3"
  },
  {
    n: [
      "flag: Puerto Rico",
      "puerto_rico"
    ],
    u: "1f1f5-1f1f7"
  },
  {
    n: [
      "flag: Palestinian Territories",
      "palestinian_territories"
    ],
    u: "1f1f5-1f1f8"
  },
  {
    n: [
      "flag: Portugal",
      "portugal"
    ],
    u: "1f1f5-1f1f9"
  },
  {
    n: [
      "flag: Palau",
      "palau"
    ],
    u: "1f1f5-1f1fc"
  },
  {
    n: [
      "flag: Paraguay",
      "paraguay"
    ],
    u: "1f1f5-1f1fe"
  },
  {
    n: [
      "flag: Qatar",
      "qatar"
    ],
    u: "1f1f6-1f1e6"
  },
  {
    n: [
      "flag: R\xE9union",
      "reunion"
    ],
    u: "1f1f7-1f1ea"
  },
  {
    n: [
      "flag: Romania",
      "romania"
    ],
    u: "1f1f7-1f1f4"
  },
  {
    n: [
      "flag: Serbia",
      "serbia"
    ],
    u: "1f1f7-1f1f8"
  },
  {
    n: [
      "flag: Russia",
      "ru",
      "russia"
    ],
    u: "1f1f7-1f1fa"
  },
  {
    n: [
      "flag: Rwanda",
      "rwanda"
    ],
    u: "1f1f7-1f1fc"
  },
  {
    n: [
      "flag: Saudi Arabia",
      "saudi_arabia"
    ],
    u: "1f1f8-1f1e6"
  },
  {
    n: [
      "flag: Solomon Islands",
      "solomon_islands"
    ],
    u: "1f1f8-1f1e7"
  },
  {
    n: [
      "flag: Seychelles",
      "seychelles"
    ],
    u: "1f1f8-1f1e8"
  },
  {
    n: [
      "flag: Sudan",
      "sudan"
    ],
    u: "1f1f8-1f1e9"
  },
  {
    n: [
      "flag: Sweden",
      "sweden"
    ],
    u: "1f1f8-1f1ea"
  },
  {
    n: [
      "flag: Singapore",
      "singapore"
    ],
    u: "1f1f8-1f1ec"
  },
  {
    n: [
      "flag: St. Helena",
      "st_helena"
    ],
    u: "1f1f8-1f1ed"
  },
  {
    n: [
      "flag: Slovenia",
      "slovenia"
    ],
    u: "1f1f8-1f1ee"
  },
  {
    n: [
      "flag: Svalbard & Jan Mayen",
      "svalbard_jan_mayen"
    ],
    u: "1f1f8-1f1ef"
  },
  {
    n: [
      "flag: Slovakia",
      "slovakia"
    ],
    u: "1f1f8-1f1f0"
  },
  {
    n: [
      "flag: Sierra Leone",
      "sierra_leone"
    ],
    u: "1f1f8-1f1f1"
  },
  {
    n: [
      "flag: San Marino",
      "san_marino"
    ],
    u: "1f1f8-1f1f2"
  },
  {
    n: [
      "flag: Senegal",
      "senegal"
    ],
    u: "1f1f8-1f1f3"
  },
  {
    n: [
      "flag: Somalia",
      "somalia"
    ],
    u: "1f1f8-1f1f4"
  },
  {
    n: [
      "flag: Suriname",
      "suriname"
    ],
    u: "1f1f8-1f1f7"
  },
  {
    n: [
      "flag: South Sudan",
      "south_sudan"
    ],
    u: "1f1f8-1f1f8"
  },
  {
    n: [
      "flag: S\xE3o Tom\xE9 & Pr\xEDncipe",
      "sao_tome_principe"
    ],
    u: "1f1f8-1f1f9"
  },
  {
    n: [
      "flag: El Salvador",
      "el_salvador"
    ],
    u: "1f1f8-1f1fb"
  },
  {
    n: [
      "flag: Sint Maarten",
      "sint_maarten"
    ],
    u: "1f1f8-1f1fd"
  },
  {
    n: [
      "flag: Syria",
      "syria"
    ],
    u: "1f1f8-1f1fe"
  },
  {
    n: [
      "flag: Eswatini",
      "swaziland"
    ],
    u: "1f1f8-1f1ff"
  },
  {
    n: [
      "flag: Tristan da Cunha",
      "tristan_da_cunha"
    ],
    u: "1f1f9-1f1e6"
  },
  {
    n: [
      "flag: Turks & Caicos Islands",
      "turks_caicos_islands"
    ],
    u: "1f1f9-1f1e8"
  },
  {
    n: [
      "flag: Chad",
      "chad"
    ],
    u: "1f1f9-1f1e9"
  },
  {
    n: [
      "flag: French Southern Territories",
      "french_southern_territories"
    ],
    u: "1f1f9-1f1eb"
  },
  {
    n: [
      "flag: Togo",
      "togo"
    ],
    u: "1f1f9-1f1ec"
  },
  {
    n: [
      "flag: Thailand",
      "thailand"
    ],
    u: "1f1f9-1f1ed"
  },
  {
    n: [
      "flag: Tajikistan",
      "tajikistan"
    ],
    u: "1f1f9-1f1ef"
  },
  {
    n: [
      "flag: Tokelau",
      "tokelau"
    ],
    u: "1f1f9-1f1f0"
  },
  {
    n: [
      "flag: Timor-Leste",
      "timor_leste"
    ],
    u: "1f1f9-1f1f1"
  },
  {
    n: [
      "flag: Turkmenistan",
      "turkmenistan"
    ],
    u: "1f1f9-1f1f2"
  },
  {
    n: [
      "flag: Tunisia",
      "tunisia"
    ],
    u: "1f1f9-1f1f3"
  },
  {
    n: [
      "flag: Tonga",
      "tonga"
    ],
    u: "1f1f9-1f1f4"
  },
  {
    n: [
      "flag: Turkey",
      "tr",
      "turkey"
    ],
    u: "1f1f9-1f1f7"
  },
  {
    n: [
      "flag: Trinidad & Tobago",
      "trinidad_tobago"
    ],
    u: "1f1f9-1f1f9"
  },
  {
    n: [
      "flag: Tuvalu",
      "tuvalu"
    ],
    u: "1f1f9-1f1fb"
  },
  {
    n: [
      "flag: Taiwan",
      "taiwan"
    ],
    u: "1f1f9-1f1fc"
  },
  {
    n: [
      "flag: Tanzania",
      "tanzania"
    ],
    u: "1f1f9-1f1ff"
  },
  {
    n: [
      "flag: Ukraine",
      "ukraine"
    ],
    u: "1f1fa-1f1e6"
  },
  {
    n: [
      "flag: Uganda",
      "uganda"
    ],
    u: "1f1fa-1f1ec"
  },
  {
    n: [
      "flag: U.S. Outlying Islands",
      "us_outlying_islands"
    ],
    u: "1f1fa-1f1f2"
  },
  {
    n: [
      "flag: United Nations",
      "united_nations"
    ],
    u: "1f1fa-1f1f3"
  },
  {
    n: [
      "flag: United States",
      "us",
      "flag",
      "united",
      "america"
    ],
    u: "1f1fa-1f1f8"
  },
  {
    n: [
      "flag: Uruguay",
      "uruguay"
    ],
    u: "1f1fa-1f1fe"
  },
  {
    n: [
      "flag: Uzbekistan",
      "uzbekistan"
    ],
    u: "1f1fa-1f1ff"
  },
  {
    n: [
      "flag: Vatican City",
      "vatican_city"
    ],
    u: "1f1fb-1f1e6"
  },
  {
    n: [
      "flag: St. Vincent & Grenadines",
      "st_vincent_grenadines"
    ],
    u: "1f1fb-1f1e8"
  },
  {
    n: [
      "flag: Venezuela",
      "venezuela"
    ],
    u: "1f1fb-1f1ea"
  },
  {
    n: [
      "flag: British Virgin Islands",
      "british_virgin_islands"
    ],
    u: "1f1fb-1f1ec"
  },
  {
    n: [
      "flag: U.S. Virgin Islands",
      "us_virgin_islands"
    ],
    u: "1f1fb-1f1ee"
  },
  {
    n: [
      "flag: Vietnam",
      "vietnam"
    ],
    u: "1f1fb-1f1f3"
  },
  {
    n: [
      "flag: Vanuatu",
      "vanuatu"
    ],
    u: "1f1fb-1f1fa"
  },
  {
    n: [
      "flag: Wallis & Futuna",
      "wallis_futuna"
    ],
    u: "1f1fc-1f1eb"
  },
  {
    n: [
      "flag: Samoa",
      "samoa"
    ],
    u: "1f1fc-1f1f8"
  },
  {
    n: [
      "flag: Kosovo",
      "kosovo"
    ],
    u: "1f1fd-1f1f0"
  },
  {
    n: [
      "flag: Yemen",
      "yemen"
    ],
    u: "1f1fe-1f1ea"
  },
  {
    n: [
      "flag: Mayotte",
      "mayotte"
    ],
    u: "1f1fe-1f1f9"
  },
  {
    n: [
      "flag: South Africa",
      "south_africa"
    ],
    u: "1f1ff-1f1e6"
  },
  {
    n: [
      "flag: Zambia",
      "zambia"
    ],
    u: "1f1ff-1f1f2"
  },
  {
    n: [
      "flag: Zimbabwe",
      "zimbabwe"
    ],
    u: "1f1ff-1f1fc"
  },
  {
    n: [
      "flag: England",
      "england"
    ],
    u: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f"
  },
  {
    n: [
      "flag: Scotland",
      "scotland"
    ],
    u: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f"
  },
  {
    n: [
      "flag: Wales",
      "wales"
    ],
    u: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f"
  }
];
var emojis = {
  smileys_people: smileys_people$1,
  animals_nature: animals_nature$1,
  food_drink: food_drink$1,
  activities: activities$1,
  travel_places: travel_places$1,
  objects: objects$1,
  symbols: symbols$1,
  flags: flags$1
};
var _groups = [
  {
    key: "recent",
    title: "Recently Used",
    u: "1f551"
  },
  {
    key: "smileys_people",
    title: "Smiles & People",
    u: "1f600"
  },
  {
    key: "animals_nature",
    title: "Animals & Nature",
    u: "1F431"
  },
  {
    key: "food_drink",
    title: "Food & Drink",
    u: "2615"
  },
  {
    key: "activities",
    title: "Activities",
    u: "26BD"
  },
  {
    key: "travel_places",
    title: "Travel & Places",
    u: "1F697"
  },
  {
    key: "objects",
    title: "Objects",
    u: "1F4A1"
  },
  {
    key: "symbols",
    title: "Symbols",
    u: "1f4af"
  },
  {
    key: "flags",
    title: "Flags",
    u: "1f3f3-fe0f"
  }
];
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(event.oldVersion, event.newVersion, event));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
const DB_KEY = "EMJ";
const STORE_KEY = "emojis";
const DB_VERSION = 3;
async function initialize() {
  const db = await openDB(DB_KEY, DB_VERSION, {
    upgrade(db2, oldVersion) {
      if (!db2.objectStoreNames.contains(STORE_KEY)) {
        const store = db2.createObjectStore(STORE_KEY, {
          keyPath: "id",
          autoIncrement: true
        });
        store.createIndex("id", "id", {
          unique: true
        });
      }
    }
  });
  db.close();
}
initialize();
const defaultOptions = {
  native: false,
  hideSearch: true,
  hideGroupIcons: false,
  hideGroupNames: false,
  staticTexts: {},
  disabledGroups: [],
  groupNames: {},
  displayRecent: false,
  additionalGroups: {},
  groupOrder: [],
  groupIcons: {},
  emojiRemoteSrc: EMOJI_REMOTE_SRC,
  lazyLoading: false
};
async function getRecentEmojis() {
  const db = await openDB(DB_KEY, DB_VERSION);
  const store = db.transaction(STORE_KEY, "readonly").objectStore(STORE_KEY);
  return await store.getAll();
}
function Store() {
  const state = reactive({
    search: "",
    emoji: DEFAULT_EMOJI,
    activeGroup: "",
    skinTone: SKIN_TONE_NEUTRAL,
    options: defaultOptions,
    additionalGroups: {},
    recent: [],
    get emojis() {
      return __spreadValues(__spreadValues({
        recent: this.recent
      }, this.options.additionalGroups), emojis);
    },
    get disabled() {
      let disabled = Array.isArray(this.options.disabledGroups) ? this.options.disabledGroups : [];
      if (!this.options.displayRecent) {
        disabled = ["recent", ...disabled];
      }
      return disabled;
    },
    get groups() {
      return _groups.filter((group) => !this.disabled.includes(group.key));
    },
    get orderedGroupKeys() {
      const keys = [
        ...this.options.groupOrder,
        ...Object.keys(this.options.additionalGroups),
        ..._groups.map((group) => group.key)
      ];
      return [...new Set(keys)].filter((key) => !this.disabled.includes(key));
    }
  });
  function initialize2() {
    if (state.options.displayRecent) {
      setInitialRecentEmojis();
    }
  }
  async function getRecent() {
    var _a;
    let recent2 = await getRecentEmojis();
    if (Array.isArray(recent2) && recent2.length) {
      recent2 = JSON.parse(((_a = recent2[0]) == null ? void 0 : _a.value) || "");
    } else {
      recent2 = [];
    }
    return recent2;
  }
  function setInitialRecentEmojis() {
    getRecent().then((recent2) => {
      state.recent = recent2;
      updateLocalStore();
    });
  }
  const updateSearch = (value) => {
    state.search = value;
  };
  const updateEmoji = (value) => {
    state.emoji = value;
  };
  const updateActiveGroup = (group) => {
    state.activeGroup = group;
  };
  const updateSkinTone = (tone = SKIN_TONE_NEUTRAL) => {
    state.skinTone = tone;
  };
  const updateOptions = (options) => {
    state.options = Object.assign({}, state.options, options);
    initialize2();
  };
  async function updateLocalStore() {
    const db = await openDB(DB_KEY, DB_VERSION);
    const store = db.transaction(STORE_KEY, "readwrite").objectStore(STORE_KEY);
    store.put({
      id: 0,
      value: JSON.stringify(state.recent)
    });
    return;
  }
  const updateSelect = (emoji) => {
    if (state.options.displayRecent !== true)
      return;
    const index2 = state.recent.findIndex((item) => item.u === emoji.u);
    if (index2 > 0)
      state.recent.splice(index2, 1);
    if (index2 === 0)
      return;
    const _emoji = { u: emoji.u, n: toRaw(emoji.n) };
    state.recent = [_emoji, ...state.recent];
    if (state.recent.length > 24)
      state.recent.length = 24;
    updateLocalStore();
  };
  return {
    state: readonly(state),
    updateSearch,
    updateEmoji,
    updateActiveGroup,
    updateSkinTone,
    updateOptions,
    updateSelect
  };
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle(clippingParent).position !== "static" : true);
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions2;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions2, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var smileys_people = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxNiA0IEMgOS4zODI4MTMgNCA0IDkuMzgyODEzIDQgMTYgQyA0IDIyLjYxNzE4OCA5LjM4MjgxMyAyOCAxNiAyOCBDIDIyLjYxNzE4OCAyOCAyOCAyMi42MTcxODggMjggMTYgQyAyOCA5LjM4MjgxMyAyMi42MTcxODggNCAxNiA0IFogTSAxNiA2IEMgMjEuNTM1MTU2IDYgMjYgMTAuNDY0ODQ0IDI2IDE2IEMgMjYgMjEuNTM1MTU2IDIxLjUzNTE1NiAyNiAxNiAyNiBDIDEwLjQ2NDg0NCAyNiA2IDIxLjUzNTE1NiA2IDE2IEMgNiAxMC40NjQ4NDQgMTAuNDY0ODQ0IDYgMTYgNiBaIE0gMTEuNSAxMiBDIDEwLjY3MTg3NSAxMiAxMCAxMi42NzE4NzUgMTAgMTMuNSBDIDEwIDE0LjMyODEyNSAxMC42NzE4NzUgMTUgMTEuNSAxNSBDIDEyLjMyODEyNSAxNSAxMyAxNC4zMjgxMjUgMTMgMTMuNSBDIDEzIDEyLjY3MTg3NSAxMi4zMjgxMjUgMTIgMTEuNSAxMiBaIE0gMjAuNSAxMiBDIDE5LjY3MTg3NSAxMiAxOSAxMi42NzE4NzUgMTkgMTMuNSBDIDE5IDE0LjMyODEyNSAxOS42NzE4NzUgMTUgMjAuNSAxNSBDIDIxLjMyODEyNSAxNSAyMiAxNC4zMjgxMjUgMjIgMTMuNSBDIDIyIDEyLjY3MTg3NSAyMS4zMjgxMjUgMTIgMjAuNSAxMiBaIE0gMTAuODEyNSAxOSBMIDkuMDkzNzUgMjAgQyAxMC40NzY1NjMgMjIuMzg2NzE5IDEzLjA0Njg3NSAyNCAxNiAyNCBDIDE4Ljk1MzEyNSAyNCAyMS41MjM0MzggMjIuMzg2NzE5IDIyLjkwNjI1IDIwIEwgMjEuMTg3NSAxOSBDIDIwLjE0ODQzOCAyMC43OTI5NjkgMTguMjI2NTYzIDIyIDE2IDIyIEMgMTMuNzczNDM4IDIyIDExLjg1MTU2MyAyMC43OTI5NjkgMTAuODEyNSAxOSBaIi8+PC9zdmc+";
function unicodeToEmoji(unicode) {
  return unicode.split("-").map((hex) => parseInt(hex, 16)).map((hex) => String.fromCodePoint(hex)).join("");
}
function filterEmojis(emojis2, keyword, skinTone, disabledGroups = []) {
  const _emojiData = {};
  Object.keys(emojis2).forEach((key) => {
    if (disabledGroups.includes(key)) {
      return;
    }
    const _emojis = [];
    emojis2[key].forEach((emoji) => {
      var _a;
      if (emoji[EMOJI_NAME_KEY][0].includes(keyword.toLocaleLowerCase())) {
        let result = emoji[EMOJI_UNICODE_KEY];
        if (skinTone !== SKIN_TONE_NEUTRAL && Array.isArray(emoji[EMOJI_VARIATIONS_KEY])) {
          const v_index = ((_a = emoji[EMOJI_VARIATIONS_KEY]) == null ? void 0 : _a.findIndex((v) => v.includes(skinTone))) || -1;
          if (v_index !== -1 && emoji[EMOJI_VARIATIONS_KEY]) {
            result = emoji[EMOJI_VARIATIONS_KEY][v_index];
          }
        }
        return _emojis.push(__spreadProps(__spreadValues({}, emoji), {
          [EMOJI_RESULT_KEY]: result
        }));
      }
    });
    if (_emojis.length) {
      _emojiData[key] = _emojis;
    }
  });
  return _emojiData;
}
function isMac() {
  var _a;
  let platform = ((_a = navigator == null ? void 0 : navigator.userAgentData) == null ? void 0 : _a.platform) || (navigator == null ? void 0 : navigator.platform) || "unknown";
  return platform.toUpperCase().indexOf("MAC") !== -1;
}
function snakeToCapitalizedCase(string) {
  return string.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : " " + d.toUpperCase());
}
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$4 = defineComponent({
  name: "Body",
  setup() {
    const { state, updateEmoji, updateSelect } = inject("store");
    const bodyInner = ref(null);
    const emojis2 = computed(() => {
      return filterEmojis(state.emojis, state.search, state.skinTone, state.options.disabledGroups);
    });
    const _this = getCurrentInstance();
    const hasGroupNames = computed(() => !state.options.hideGroupNames);
    const isSticky = computed(() => !state.options.disableStickyGroupNames);
    const groupNames = toRaw(state.options.groupNames);
    const orderedKeys = state.orderedGroupKeys;
    const emojiRemoteSrc = state.options.emojiRemoteSrc;
    const lazyLoading = state.options.lazyLoading;
    if (state.options.additionalGroups) {
      Object.keys(state.options.additionalGroups).map((k) => {
        if (state.options.groupNames[k]) {
          groupNames[k] = state.options.groupNames[k];
        } else {
          groupNames[k] = snakeToCapitalizedCase(k);
        }
      });
    }
    const platform = isMac() ? "is-mac" : "";
    function handleMouseEnter(emoji) {
      updateEmoji(emoji);
    }
    function handleClick(emoji) {
      updateSelect(emoji);
      _this == null ? void 0 : _this.emit("select", __spreadProps(__spreadValues({}, emoji), {
        t: state.skinTone,
        i: unicodeToEmoji(emoji.r)
      }));
    }
    function handleError(event, unicode) {
      var _a;
      const button = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.closest("button");
      if (button) {
        button.innerHTML = `<span>${unicodeToEmoji(unicode)}</span>`;
      }
    }
    watch(() => state.activeGroup, () => {
      var _a;
      const target = (_a = bodyInner.value) == null ? void 0 : _a.querySelector("#" + state.activeGroup);
      if (target) {
        target.parentNode.scrollTop = target.offsetTop - target.parentNode.offsetTop;
      }
    });
    return {
      emojis: emojis2,
      bodyInner,
      emojiRemoteSrc,
      lazyLoading,
      GROUP_NAMES,
      handleClick,
      handleError,
      handleMouseEnter,
      native: state.options.native,
      unicodeToEmoji,
      EMOJI_RESULT_KEY,
      EMOJI_NAME_KEY,
      hasGroupNames,
      isSticky,
      platform,
      groupNames,
      orderedKeys
    };
  }
});
const _hoisted_1$3 = { class: "v3-body" };
const _hoisted_2$3 = ["id"];
const _hoisted_3$3 = { class: "v3-emojis" };
const _hoisted_4$3 = ["onMouseenter", "onClick"];
const _hoisted_5$3 = { key: 0 };
const _hoisted_6$2 = ["loading", "src", "alt", "onError"];
const _hoisted_7$1 = {
  key: 1,
  class: "v3-no-result"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", {
      ref: "bodyInner",
      class: normalizeClass([_ctx.platform, "v3-body-inner"])
    }, [
      _ctx.orderedKeys.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.orderedKeys, (key) => {
        return openBlock(), createElementBlock("div", {
          id: key,
          key,
          class: "v3-group"
        }, [
          _ctx.hasGroupNames ? withDirectives((openBlock(), createElementBlock("h5", {
            key: 0,
            class: normalizeClass(_ctx.isSticky ? `v3-sticky` : ``)
          }, toDisplayString(_ctx.groupNames[key]), 3)), [
            [vShow, _ctx.emojis[key]]
          ]) : createCommentVNode("", true),
          withDirectives(createElementVNode("div", _hoisted_3$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.emojis[key], (emoji) => {
              return openBlock(), createElementBlock("button", {
                key: emoji.r,
                type: "button",
                onMouseenter: ($event) => _ctx.handleMouseEnter(emoji),
                onClick: ($event) => _ctx.handleClick(emoji)
              }, [
                _ctx.native ? (openBlock(), createElementBlock("span", _hoisted_5$3, toDisplayString(_ctx.unicodeToEmoji(emoji.r)), 1)) : (openBlock(), createElementBlock("img", {
                  key: 1,
                  loading: _ctx.lazyLoading ? `lazy` : `eager`,
                  src: _ctx.emojiRemoteSrc + `/${emoji.r}.png`,
                  alt: emoji.n[0],
                  onError: ($event) => _ctx.handleError($event, emoji.r)
                }, null, 40, _hoisted_6$2))
              ], 40, _hoisted_4$3);
            }), 128))
          ], 512), [
            [vShow, _ctx.emojis[key]]
          ])
        ], 8, _hoisted_2$3);
      }), 128)) : (openBlock(), createElementBlock("span", _hoisted_7$1, " No emoji has been found! "))
    ], 2)
  ]);
}
var Body = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var animals_nature = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxMi41IDUgQyAxMS40Mjk2ODggNSAxMC41IDUuNjA5Mzc1IDkuOTA2MjUgNi40Mzc1IEMgOS4zMTI1IDcuMjY1NjI1IDkgOC4zMzk4NDQgOSA5LjUgQyA5IDEwLjY2MDE1NiA5LjMxMjUgMTEuNzM0Mzc1IDkuOTA2MjUgMTIuNTYyNSBDIDEwLjUgMTMuMzkwNjI1IDExLjQyOTY4OCAxNCAxMi41IDE0IEMgMTMuNTcwMzEzIDE0IDE0LjUgMTMuMzkwNjI1IDE1LjA5Mzc1IDEyLjU2MjUgQyAxNS42ODc1IDExLjczNDM3NSAxNiAxMC42NjAxNTYgMTYgOS41IEMgMTYgOC4zMzk4NDQgMTUuNjg3NSA3LjI2NTYyNSAxNS4wOTM3NSA2LjQzNzUgQyAxNC41IDUuNjA5Mzc1IDEzLjU3MDMxMyA1IDEyLjUgNSBaIE0gMTYgOS41IEMgMTYgMTAuNjYwMTU2IDE2LjMxMjUgMTEuNzM0Mzc1IDE2LjkwNjI1IDEyLjU2MjUgQyAxNy41IDEzLjM5MDYyNSAxOC40Mjk2ODggMTQgMTkuNSAxNCBDIDIwLjU3MDMxMyAxNCAyMS41IDEzLjM5MDYyNSAyMi4wOTM3NSAxMi41NjI1IEMgMjIuNjg3NSAxMS43MzQzNzUgMjMgMTAuNjYwMTU2IDIzIDkuNSBDIDIzIDguMzM5ODQ0IDIyLjY4NzUgNy4yNjU2MjUgMjIuMDkzNzUgNi40Mzc1IEMgMjEuNSA1LjYwOTM3NSAyMC41NzAzMTMgNSAxOS41IDUgQyAxOC40Mjk2ODggNSAxNy41IDUuNjA5Mzc1IDE2LjkwNjI1IDYuNDM3NSBDIDE2LjMxMjUgNy4yNjU2MjUgMTYgOC4zMzk4NDQgMTYgOS41IFogTSAxMi41IDcgQyAxMi44MTI1IDcgMTMuMTU2MjUgNy4xNTYyNSAxMy40Njg3NSA3LjU5Mzc1IEMgMTMuNzgxMjUgOC4wMzEyNSAxNCA4LjcyNjU2MyAxNCA5LjUgQyAxNCAxMC4yNzM0MzggMTMuNzgxMjUgMTAuOTY4NzUgMTMuNDY4NzUgMTEuNDA2MjUgQyAxMy4xNTYyNSAxMS44NDM3NSAxMi44MTI1IDEyIDEyLjUgMTIgQyAxMi4xODc1IDEyIDExLjg0Mzc1IDExLjg0Mzc1IDExLjUzMTI1IDExLjQwNjI1IEMgMTEuMjE4NzUgMTAuOTY4NzUgMTEgMTAuMjczNDM4IDExIDkuNSBDIDExIDguNzI2NTYzIDExLjIxODc1IDguMDMxMjUgMTEuNTMxMjUgNy41OTM3NSBDIDExLjg0Mzc1IDcuMTU2MjUgMTIuMTg3NSA3IDEyLjUgNyBaIE0gMTkuNSA3IEMgMTkuODEyNSA3IDIwLjE1NjI1IDcuMTU2MjUgMjAuNDY4NzUgNy41OTM3NSBDIDIwLjc4MTI1IDguMDMxMjUgMjEgOC43MjY1NjMgMjEgOS41IEMgMjEgMTAuMjczNDM4IDIwLjc4MTI1IDEwLjk2ODc1IDIwLjQ2ODc1IDExLjQwNjI1IEMgMjAuMTU2MjUgMTEuODQzNzUgMTkuODEyNSAxMiAxOS41IDEyIEMgMTkuMTg3NSAxMiAxOC44NDM3NSAxMS44NDM3NSAxOC41MzEyNSAxMS40MDYyNSBDIDE4LjIxODc1IDEwLjk2ODc1IDE4IDEwLjI3MzQzOCAxOCA5LjUgQyAxOCA4LjcyNjU2MyAxOC4yMTg3NSA4LjAzMTI1IDE4LjUzMTI1IDcuNTkzNzUgQyAxOC44NDM3NSA3LjE1NjI1IDE5LjE4NzUgNyAxOS41IDcgWiBNIDcuNSAxMiBDIDYuNDI5Njg4IDEyIDUuNSAxMi42MDkzNzUgNC45MDYyNSAxMy40Mzc1IEMgNC4zMTI1IDE0LjI2NTYyNSA0IDE1LjMzOTg0NCA0IDE2LjUgQyA0IDE3LjY2MDE1NiA0LjMxMjUgMTguNzM0Mzc1IDQuOTA2MjUgMTkuNTYyNSBDIDUuNSAyMC4zOTA2MjUgNi40Mjk2ODggMjEgNy41IDIxIEMgOC41NzAzMTMgMjEgOS41IDIwLjM5MDYyNSAxMC4wOTM3NSAxOS41NjI1IEMgMTAuNjg3NSAxOC43MzQzNzUgMTEgMTcuNjYwMTU2IDExIDE2LjUgQyAxMSAxNS4zMzk4NDQgMTAuNjg3NSAxNC4yNjU2MjUgMTAuMDkzNzUgMTMuNDM3NSBDIDkuNSAxMi42MDkzNzUgOC41NzAzMTMgMTIgNy41IDEyIFogTSAyNC41IDEyIEMgMjMuNDI5Njg4IDEyIDIyLjUgMTIuNjA5Mzc1IDIxLjkwNjI1IDEzLjQzNzUgQyAyMS4zMTI1IDE0LjI2NTYyNSAyMSAxNS4zMzk4NDQgMjEgMTYuNSBDIDIxIDE3LjY2MDE1NiAyMS4zMTI1IDE4LjczNDM3NSAyMS45MDYyNSAxOS41NjI1IEMgMjIuNSAyMC4zOTA2MjUgMjMuNDI5Njg4IDIxIDI0LjUgMjEgQyAyNS41NzAzMTMgMjEgMjYuNSAyMC4zOTA2MjUgMjcuMDkzNzUgMTkuNTYyNSBDIDI3LjY4NzUgMTguNzM0Mzc1IDI4IDE3LjY2MDE1NiAyOCAxNi41IEMgMjggMTUuMzM5ODQ0IDI3LjY4NzUgMTQuMjY1NjI1IDI3LjA5Mzc1IDEzLjQzNzUgQyAyNi41IDEyLjYwOTM3NSAyNS41NzAzMTMgMTIgMjQuNSAxMiBaIE0gNy41IDE0IEMgNy44MTI1IDE0IDguMTU2MjUgMTQuMTU2MjUgOC40Njg3NSAxNC41OTM3NSBDIDguNzgxMjUgMTUuMDMxMjUgOSAxNS43MjY1NjMgOSAxNi41IEMgOSAxNy4yNzM0MzggOC43ODEyNSAxNy45Njg3NSA4LjQ2ODc1IDE4LjQwNjI1IEMgOC4xNTYyNSAxOC44NDM3NSA3LjgxMjUgMTkgNy41IDE5IEMgNy4xODc1IDE5IDYuODQzNzUgMTguODQzNzUgNi41MzEyNSAxOC40MDYyNSBDIDYuMjE4NzUgMTcuOTY4NzUgNiAxNy4yNzM0MzggNiAxNi41IEMgNiAxNS43MjY1NjMgNi4yMTg3NSAxNS4wMzEyNSA2LjUzMTI1IDE0LjU5Mzc1IEMgNi44NDM3NSAxNC4xNTYyNSA3LjE4NzUgMTQgNy41IDE0IFogTSAyNC41IDE0IEMgMjQuODEyNSAxNCAyNS4xNTYyNSAxNC4xNTYyNSAyNS40Njg3NSAxNC41OTM3NSBDIDI1Ljc4MTI1IDE1LjAzMTI1IDI2IDE1LjcyNjU2MyAyNiAxNi41IEMgMjYgMTcuMjczNDM4IDI1Ljc4MTI1IDE3Ljk2ODc1IDI1LjQ2ODc1IDE4LjQwNjI1IEMgMjUuMTU2MjUgMTguODQzNzUgMjQuODEyNSAxOSAyNC41IDE5IEMgMjQuMTg3NSAxOSAyMy44NDM3NSAxOC44NDM3NSAyMy41MzEyNSAxOC40MDYyNSBDIDIzLjIxODc1IDE3Ljk2ODc1IDIzIDE3LjI3MzQzOCAyMyAxNi41IEMgMjMgMTUuNzI2NTYzIDIzLjIxODc1IDE1LjAzMTI1IDIzLjUzMTI1IDE0LjU5Mzc1IEMgMjMuODQzNzUgMTQuMTU2MjUgMjQuMTg3NSAxNCAyNC41IDE0IFogTSAxNiAxNiBDIDE0LjY2Nzk2OSAxNiAxMy43MzgyODEgMTYuODY3MTg4IDEzLjI4MTI1IDE3LjYyNSBDIDEyLjgyNDIxOSAxOC4zODI4MTMgMTIuNTQ2ODc1IDE5LjAxNTYyNSAxMi4yODEyNSAxOS4yODEyNSBDIDEyLjEyNSAxOS40Mzc1IDExLjE2MDE1NiAxOS44MDA3ODEgMTAuMTU2MjUgMjAuMzEyNSBDIDkuNjUyMzQ0IDIwLjU3MDMxMyA5LjE0NDUzMSAyMC45MTQwNjMgOC43MTg3NSAyMS40Mzc1IEMgOC4yOTI5NjkgMjEuOTYwOTM4IDggMjIuNjg3NSA4IDIzLjUgQyA4IDI1LjQyMTg3NSA5LjU3ODEyNSAyNyAxMS41IDI3IEMgMTIuMzY3MTg4IDI3IDEzLjI2OTUzMSAyNi43MjI2NTYgMTQuMTU2MjUgMjYuNDY4NzUgQyAxNS4wNDI5NjkgMjYuMjE0ODQ0IDE2IDI2IDE2IDI2IEMgMTYgMjYgMTYuOTU3MDMxIDI2LjIxNDg0NCAxNy44NDM3NSAyNi40Njg3NSBDIDE4LjczMDQ2OSAyNi43MjI2NTYgMTkuNjMyODEzIDI3IDIwLjUgMjcgQyAyMi40MjE4NzUgMjcgMjQgMjUuNDIxODc1IDI0IDIzLjUgQyAyNCAyMi43MDcwMzEgMjMuNzA3MDMxIDIxLjk4MDQ2OSAyMy4yODEyNSAyMS40Njg3NSBDIDIyLjg1NTQ2OSAyMC45NTcwMzEgMjIuMzQzNzUgMjAuNjQwNjI1IDIxLjg0Mzc1IDIwLjM3NSBDIDIwLjg0Mzc1IDE5Ljg0Mzc1IDE5Ljg1OTM3NSAxOS40MjE4NzUgMTkuNzE4NzUgMTkuMjgxMjUgQyAxOS40ODA0NjkgMTkuMDQyOTY5IDE5LjIxMDkzOCAxOC4zOTA2MjUgMTguNzUgMTcuNjI1IEMgMTguMjg5MDYzIDE2Ljg1OTM3NSAxNy4zMzk4NDQgMTYgMTYgMTYgWiBNIDE2IDE4IEMgMTYuNjYwMTU2IDE4IDE2LjczNDM3NSAxOC4xNjAxNTYgMTcuMDMxMjUgMTguNjU2MjUgQyAxNy4zMjgxMjUgMTkuMTUyMzQ0IDE3LjU1NDY4OCAxOS45OTIxODggMTguMjgxMjUgMjAuNzE4NzUgQyAxOS4xMDU0NjkgMjEuNTQyOTY5IDIwLjE0ODQzOCAyMS43MjI2NTYgMjAuOTA2MjUgMjIuMTI1IEMgMjEuMjg1MTU2IDIyLjMyODEyNSAyMS41NzgxMjUgMjIuNTQyOTY5IDIxLjc1IDIyLjc1IEMgMjEuOTIxODc1IDIyLjk1NzAzMSAyMiAyMy4xNDg0MzggMjIgMjMuNSBDIDIyIDI0LjMzOTg0NCAyMS4zMzk4NDQgMjUgMjAuNSAyNSBDIDIwLjIxMDkzOCAyNSAxOS4yNzczNDQgMjQuNzc3MzQ0IDE4LjQwNjI1IDI0LjUzMTI1IEMgMTcuNTM1MTU2IDI0LjI4NTE1NiAxNi44MTY0MDYgMjQgMTYgMjQgQyAxNS4xODM1OTQgMjQgMTQuNDY0ODQ0IDI0LjI4NTE1NiAxMy41OTM3NSAyNC41MzEyNSBDIDEyLjcyMjY1NiAyNC43NzczNDQgMTEuNzg5MDYzIDI1IDExLjUgMjUgQyAxMC42NjAxNTYgMjUgMTAgMjQuMzM5ODQ0IDEwIDIzLjUgQyAxMCAyMy4wOTc2NTYgMTAuMDgyMDMxIDIyLjg5MDYyNSAxMC4yNSAyMi42ODc1IEMgMTAuNDE3OTY5IDIyLjQ4NDM3NSAxMC43MjI2NTYgMjIuMjg1MTU2IDExLjA5Mzc1IDIyLjA5Mzc1IEMgMTEuODM5ODQ0IDIxLjcxNDg0NCAxMi44NzUgMjEuNTYyNSAxMy43MTg3NSAyMC43MTg3NSBDIDE0LjQ1MzEyNSAxOS45ODQzNzUgMTQuNjc1NzgxIDE5LjExNzE4OCAxNC45Njg3NSAxOC42MjUgQyAxNS4yNjE3MTkgMTguMTMyODEzIDE1LjMzMjAzMSAxOCAxNiAxOCBaIi8+PC9zdmc+";
var food_drink = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxMSAzIEwgMTEgNyBMIDEzIDcgTCAxMyAzIFogTSAxNSA0IEwgMTUgNyBMIDE3IDcgTCAxNyA0IFogTSA0Ljg3NSA4IEwgNSA5LjA5Mzc1IEwgNi44MTI1IDI2LjMxMjUgQyA2Ljk3MjY1NiAyNy44MzIwMzEgOC4yODUxNTYgMjkgOS44MTI1IDI5IEwgMTkuMTg3NSAyOSBDIDIwLjcxNDg0NCAyOSAyMi4wMjczNDQgMjcuODMyMDMxIDIyLjE4NzUgMjYuMzEyNSBMIDIyLjY1NjI1IDIyIEwgMjUgMjIgQyAyNi42NDQ1MzEgMjIgMjggMjAuNjQ0NTMxIDI4IDE5IEwgMjggMTYgQyAyOCAxNC4zNTU0NjkgMjYuNjQ0NTMxIDEzIDI1IDEzIEwgMjMuNTkzNzUgMTMgTCAyNCA5LjA5Mzc1IEwgMjQuMTI1IDggWiBNIDcuMTI1IDEwIEwgMjEuODc1IDEwIEwgMjAuMTg3NSAyNi4wOTM3NSBDIDIwLjEzMjgxMyAyNi42MTMyODEgMTkuNzA3MDMxIDI3IDE5LjE4NzUgMjcgTCA5LjgxMjUgMjcgQyA5LjI5Mjk2OSAyNyA4Ljg2NzE4OCAyNi42MTMyODEgOC44MTI1IDI2LjA5Mzc1IFogTSAyMy4zNzUgMTUgTCAyNSAxNSBDIDI1LjU2NjQwNiAxNSAyNiAxNS40MzM1OTQgMjYgMTYgTCAyNiAxOSBDIDI2IDE5LjU2NjQwNiAyNS41NjY0MDYgMjAgMjUgMjAgTCAyMi44NDM3NSAyMCBaIi8+PC9zdmc+";
var activities = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxNiAzIEMgOC44MzIwMzEgMyAzIDguODMyMDMxIDMgMTYgQyAzIDIzLjE2Nzk2OSA4LjgzMjAzMSAyOSAxNiAyOSBDIDIzLjE2Nzk2OSAyOSAyOSAyMy4xNjc5NjkgMjkgMTYgQyAyOSA4LjgzMjAzMSAyMy4xNjc5NjkgMyAxNiAzIFogTSAxNiA1IEMgMTYuNjAxNTYzIDUgMTcuMTc1NzgxIDUuMDYyNSAxNy43NSA1LjE1NjI1IEwgMTYgNi40MDYyNSBMIDE0LjI1IDUuMTU2MjUgQyAxNC44MjAzMTMgNS4wNjY0MDYgMTUuNDAyMzQ0IDUgMTYgNSBaIE0gMTEuODEyNSA1Ljg0Mzc1IEwgMTUuNDA2MjUgOC40Njg3NSBMIDE2IDguOTA2MjUgTCAxNi41OTM3NSA4LjQ2ODc1IEwgMjAuMTg3NSA1Ljg0Mzc1IEMgMjEuNzg1MTU2IDYuNTA3ODEzIDIzLjE5NTMxMyA3LjUyMzQzOCAyNC4zMTI1IDguODEyNSBMIDIyLjkzNzUgMTMuMDkzNzUgTCAyMi43MTg3NSAxMy43ODEyNSBMIDIzLjMxMjUgMTQuMTg3NSBMIDI2LjkzNzUgMTYuODQzNzUgQyAyNi44MDQ2ODggMTguNjA1NDY5IDI2LjI2NTYyNSAyMC4yNTc4MTMgMjUuNDA2MjUgMjEuNjg3NSBMIDIwLjEyNSAyMS42ODc1IEwgMTkuOTA2MjUgMjIuMzc1IEwgMTguNSAyNi43MTg3NSBDIDE3LjY5OTIxOSAyNi45MDYyNSAxNi44NTkzNzUgMjcgMTYgMjcgQyAxNS4xMDU0NjkgMjcgMTQuMjM4MjgxIDI2Ljg4NjcxOSAxMy40MDYyNSAyNi42ODc1IEwgMTIuMDMxMjUgMjIuNDA2MjUgTCAxMS44MTI1IDIxLjcxODc1IEwgNi41OTM3NSAyMS43MTg3NSBDIDUuNzE4NzUgMjAuMjgxMjUgNS4xOTkyMTkgMTguNjIxMDk0IDUuMDYyNSAxNi44NDM3NSBMIDguNjU2MjUgMTQuMjE4NzUgTCA5LjI1IDEzLjgxMjUgTCA5LjAzMTI1IDEzLjEyNSBMIDcuNjI1IDguODc1IEMgOC43NSA3LjU1NDY4OCAxMC4xODM1OTQgNi41MTU2MjUgMTEuODEyNSA1Ljg0Mzc1IFogTSAxNiAxMC4wOTM3NSBMIDE1LjQwNjI1IDEwLjUzMTI1IEwgMTAuODQzNzUgMTMuODQzNzUgTCAxMC4yODEyNSAxNC4yODEyNSBMIDEwLjUgMTQuOTY4NzUgTCAxMi4yNSAyMC4zMTI1IEwgMTIuNDY4NzUgMjEgTCAxOS41MzEyNSAyMSBMIDE5Ljc1IDIwLjMxMjUgTCAyMS41IDE0Ljk2ODc1IEwgMjEuNzE4NzUgMTQuMjgxMjUgTCAyMS4xNTYyNSAxMy44NDM3NSBMIDE2LjU5Mzc1IDEwLjUzMTI1IFogTSAyNS43NSAxMC45MDYyNSBDIDI2LjI5Njg3NSAxMS45NTMxMjUgMjYuNjU2MjUgMTMuMTAxNTYzIDI2Ljg0Mzc1IDE0LjMxMjUgTCAyNS4wNjI1IDEzLjAzMTI1IFogTSA2LjIxODc1IDEwLjk2ODc1IEwgNi45MDYyNSAxMy4wMzEyNSBMIDUuMTU2MjUgMTQuMzEyNSBDIDUuMzM5ODQ0IDEzLjEyNSA1LjY4NzUgMTIgNi4yMTg3NSAxMC45Njg3NSBaIE0gMTYgMTIuNTkzNzUgTCAxOS4zNzUgMTUuMDMxMjUgTCAxOC4wOTM3NSAxOSBMIDEzLjkwNjI1IDE5IEwgMTIuNjI1IDE1LjAzMTI1IFogTSAyMS41OTM3NSAyMy42ODc1IEwgMjMuODQzNzUgMjMuNjg3NSBDIDIyLjk5MjE4OCAyNC41NjY0MDYgMjIuMDExNzE5IDI1LjI5Mjk2OSAyMC45MDYyNSAyNS44NDM3NSBaIE0gOC4xNTYyNSAyMy43MTg3NSBMIDEwLjM0Mzc1IDIzLjcxODc1IEwgMTEuMDMxMjUgMjUuODEyNSBDIDkuOTYwOTM4IDI1LjI2OTUzMSA4Ljk4ODI4MSAyNC41NjI1IDguMTU2MjUgMjMuNzE4NzUgWiIvPjwvc3ZnPg==";
var travel_places = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSA5LjUgNiBDIDguMTc5Njg4IDYgNy4wMDM5MDYgNi44NTkzNzUgNi42MjUgOC4xMjUgTCA1LjI1IDEyLjcxODc1IEwgMy4zMTI1IDEyLjA2MjUgTCAyLjY4NzUgMTMuOTM3NSBMIDQuNjU2MjUgMTQuNTkzNzUgTCA0LjAzMTI1IDE2LjcxODc1IEMgNC4wMDc4MTMgMTYuODA4NTk0IDMuOTk2MDk0IDE2LjkwNjI1IDQgMTcgTCA0IDI0IEMgNCAyNC4wMzEyNSA0IDI0LjA2MjUgNCAyNC4wOTM3NSBMIDQgMjUgQyA0IDI1LjU1MDc4MSA0LjQ0OTIxOSAyNiA1IDI2IEwgOCAyNiBMIDguMzQzNzUgMjUgTCAyMy42NTYyNSAyNSBMIDI0IDI2IEwgMjcgMjYgQyAyNy41NTA3ODEgMjYgMjggMjUuNTUwNzgxIDI4IDI1IEwgMjggMjQuMTU2MjUgQyAyOC4wMDM5MDYgMjQuMTA1NDY5IDI4LjAwMzkwNiAyNC4wNTA3ODEgMjggMjQgTCAyOCAxNyBDIDI4LjAwMzkwNiAxNi45MDYyNSAyNy45OTIxODggMTYuODA4NTk0IDI3Ljk2ODc1IDE2LjcxODc1IEwgMjcuMzQzNzUgMTQuNTkzNzUgTCAyOS4zMTI1IDEzLjkzNzUgTCAyOC42ODc1IDEyLjA2MjUgTCAyNi43NSAxMi43MTg3NSBMIDI1LjM3NSA4LjEyNSBDIDI0Ljk5NjA5NCA2Ljg1OTM3NSAyMy44MjAzMTMgNiAyMi41IDYgWiBNIDkuNSA4IEwgMjIuNSA4IEMgMjIuOTQ1MzEzIDggMjMuMzM5ODQ0IDguMjkyOTY5IDIzLjQ2ODc1IDguNzE4NzUgTCAyNC43NSAxMyBMIDcuMjUgMTMgTCA4LjUzMTI1IDguNzE4NzUgQyA4LjY2MDE1NiA4LjI4OTA2MyA5LjA1NDY4OCA4IDkuNSA4IFogTSA2LjY1NjI1IDE1IEwgMjUuMzQzNzUgMTUgTCAyNiAxNy4xODc1IEwgMjYgMjMgTCA2IDIzIEwgNiAxNy4xODc1IFogTSA4LjUgMTYgQyA3LjY3MTg3NSAxNiA3IDE2LjY3MTg3NSA3IDE3LjUgQyA3IDE4LjMyODEyNSA3LjY3MTg3NSAxOSA4LjUgMTkgQyA5LjMyODEyNSAxOSAxMCAxOC4zMjgxMjUgMTAgMTcuNSBDIDEwIDE2LjY3MTg3NSA5LjMyODEyNSAxNiA4LjUgMTYgWiBNIDIzLjUgMTYgQyAyMi42NzE4NzUgMTYgMjIgMTYuNjcxODc1IDIyIDE3LjUgQyAyMiAxOC4zMjgxMjUgMjIuNjcxODc1IDE5IDIzLjUgMTkgQyAyNC4zMjgxMjUgMTkgMjUgMTguMzI4MTI1IDI1IDE3LjUgQyAyNSAxNi42NzE4NzUgMjQuMzI4MTI1IDE2IDIzLjUgMTYgWiBNIDEyIDE5IEwgMTAuNzUgMjIgTCAxMi45MDYyNSAyMiBMIDEzLjM0Mzc1IDIxIEwgMTguNjU2MjUgMjEgTCAxOS4wOTM3NSAyMiBMIDIxLjI1IDIyIEwgMjAgMTkgWiIvPjwvc3ZnPg==";
var objects = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxNiA0IEMgMTEuMDQyOTY5IDQgNyA4LjA0Mjk2OSA3IDEzIEMgNyAxNC45MTc5NjkgNy44NDM3NSAxNi45MDYyNSA5IDE4LjY4NzUgQyA5Ljg1OTM3NSAyMC4wMTE3MTkgMTAuODg2NzE5IDIxLjIzMDQ2OSAxMiAyMi4xNTYyNSBMIDEyIDI1IEMgMTIgMjYuMDkzNzUgMTIuOTA2MjUgMjcgMTQgMjcgTCAxNSAyOCBMIDE3IDI4IEwgMTggMjcgQyAxOS4wOTM3NSAyNyAyMCAyNi4wOTM3NSAyMCAyNSBMIDIwIDIyLjE1NjI1IEMgMjEuMTEzMjgxIDIxLjIzMDQ2OSAyMi4xNDA2MjUgMjAuMDExNzE5IDIzIDE4LjY4NzUgQyAyNC4xNTYyNSAxNi45MDYyNSAyNSAxNC45MTc5NjkgMjUgMTMgQyAyNSA4LjA0Mjk2OSAyMC45NTcwMzEgNCAxNiA0IFogTSAxNiA2IEMgMTkuODc4OTA2IDYgMjMgOS4xMjEwOTQgMjMgMTMgQyAyMyAxNC4zMDg1OTQgMjIuMzU1NDY5IDE2LjAzNTE1NiAyMS4zNDM3NSAxNy41OTM3NSBDIDIwLjQ0MTQwNiAxOC45ODQzNzUgMTkuMjUzOTA2IDIwLjIyMjY1NiAxOC4xNTYyNSAyMSBMIDEzLjg0Mzc1IDIxIEMgMTIuNzQ2MDk0IDIwLjIyMjY1NiAxMS41NTg1OTQgMTguOTg0Mzc1IDEwLjY1NjI1IDE3LjU5Mzc1IEMgOS42NDQ1MzEgMTYuMDM1MTU2IDkgMTQuMzA4NTk0IDkgMTMgQyA5IDkuMTIxMDk0IDEyLjEyMTA5NCA2IDE2IDYgWiBNIDE0LjI1IDIzIEwgMTcuNzUgMjMgQyAxNy44MjgxMjUgMjMuMDU0Njg4IDE3LjkxMDE1NiAyMy4wOTM3NSAxOCAyMy4xMjUgTCAxOCAyNSBMIDE0IDI1IEwgMTQgMjMuMTI1IEMgMTQuMDg5ODQ0IDIzLjA5Mzc1IDE0LjE3MTg3NSAyMy4wNTQ2ODggMTQuMjUgMjMgWiIvPjwvc3ZnPg==";
var symbols = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxMSA1IEwgMTEgMTEgTCA1IDExIEwgNSAxMyBMIDExIDEzIEwgMTEgMTkgTCA1IDE5IEwgNSAyMSBMIDExIDIxIEwgMTEgMjcgTCAxMyAyNyBMIDEzIDIxIEwgMTkgMjEgTCAxOSAyNyBMIDIxIDI3IEwgMjEgMjEgTCAyNyAyMSBMIDI3IDE5IEwgMjEgMTkgTCAyMSAxMyBMIDI3IDEzIEwgMjcgMTEgTCAyMSAxMSBMIDIxIDUgTCAxOSA1IEwgMTkgMTEgTCAxMyAxMSBMIDEzIDUgWiBNIDEzIDEzIEwgMTkgMTMgTCAxOSAxOSBMIDEzIDE5IFoiLz48L3N2Zz4=";
var flags = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSA5IDQgQyA3LjM0NiA0IDYgNS4zNDYgNiA3IEMgNiA4LjMwMTYwOTQgNi44Mzg3NDg2IDkuNDAyMTM5MSA4IDkuODE2NDA2MiBMIDggMTEuMzA0Njg4IEwgOCAyMy4yMDcwMzEgTCA4IDI3LjAyMzQzOCBDIDggMjcuNTYzNDM4IDguNDM2NTYyNSAyOCA4Ljk3NjU2MjUgMjggTCA5LjAyMzQzNzUgMjggQyA5LjU2MzQzNzUgMjggMTAgMjcuNTYzNDM3IDEwIDI3LjAyMzQzOCBMIDEwIDIyLjIyODUxNiBDIDEwLjMzNDcwNyAyMS44Mzk3NTYgMTEuMTM4NDIzIDIxLjA0Njg3NSAxMy40NDUzMTIgMjEuMDQ2ODc1IEMgMTQuNjY5MzEzIDIxLjA0Njg3NSAxNS42NzA0MjIgMjEuNDczNzgxIDE2LjczMjQyMiAyMS45MjU3ODEgQyAxNy43Njk0MjIgMjIuMzY3NzgxIDE4Ljg0MTg5MSAyMi44MjQyMTkgMjAuMDg3ODkxIDIyLjgyNDIxOSBDIDIyLjQ0Njg5MSAyMi44MjQyMTkgMjQuMDQ5Mzc1IDIxLjU4NDY4OCAyNC43MzQzNzUgMjEuMDU0Njg4IEwgMjQuODg2NzE5IDIwLjkzOTQ1MyBDIDI1LjQzNzcxOSAyMC41NDA0NTMgMjYgMTkuOTk2IDI2IDE5IEwgMjYgMTAuNjc1NzgxIEMgMjYgOS43Njc3ODEyIDI1LjIyMTgyOCA5IDI0LjI5ODgyOCA5IEMgMjMuODAzODI4IDkgMjMuNDQwNDA2IDkuMjg2NTkzNyAyMi45NDE0MDYgOS42ODM1OTM4IEMgMjIuMjc5NDA2IDEwLjIwNzU5NCAyMS4yODA4OTEgMTEgMjAuMDg3ODkxIDExIEMgMTkuMjcyODkxIDExIDE4LjQ3NzY4OCAxMC42MTk3MzQgMTcuNTU0Njg4IDEwLjE3NzczNCBDIDE2LjQwMzY4NyA5LjYyNTczNDQgMTUuMDk4MzU5IDkgMTMuNDQzMzU5IDkgQyAxMi4zMDgyNTcgOSAxMS40MjE2ODcgOS4xODgzMzkzIDEwLjcxMjg5MSA5LjQ1NzAzMTIgQyAxMS40ODkwNzEgOC45MTQxODI0IDEyIDguMDE2NzgwMiAxMiA3IEMgMTIgNS4zNDYgMTAuNjU0IDQgOSA0IHogTSA5IDYgQyA5LjU1MiA2IDEwIDYuNDQ5IDEwIDcgQyAxMCA3LjU1MSA5LjU1MiA4IDkgOCBDIDguNDQ4IDggOCA3LjU1MSA4IDcgQyA4IDYuNDQ5IDguNDQ4IDYgOSA2IHogTSAxMy40NDMzNTkgMTEgQyAxNC42NDUzNTkgMTEgMTUuNjM4NDA2IDExLjQ3NjQ2OSAxNi42OTE0MDYgMTEuOTgwNDY5IEMgMTcuNzM2NDA2IDEyLjQ4MjQ2OSAxOC44MTc4OTEgMTMgMjAuMDg3ODkxIDEzIEMgMjEuODQyODkxIDEzIDIzLjE1ODA0NyAxMi4wNTQ0ODQgMjMuOTk4MDQ3IDExLjM5NjQ4NCBMIDIzLjk5ODA0NyAxOS4wNjY0MDYgQyAyMy45OTcwNDcgMTkuMDcwNDA2IDIzLjk1Mjk4NCAxOS4xNDUyNjYgMjMuNzA4OTg0IDE5LjMyMjI2NiBMIDIzLjUwOTc2NiAxOS40NzQ2MDkgQyAyMi45NDI3NjYgMTkuOTEyNjA5IDIxLjc2Mjg5MSAyMC44MjQyMTkgMjAuMDg3ODkxIDIwLjgyNDIxOSBDIDE5LjI0OTg5MSAyMC44MjQyMTkgMTguNDQ2NjI1IDIwLjQ4MjkzNyAxNy41MTU2MjUgMjAuMDg1OTM4IEMgMTYuMzcyNjI1IDE5LjU5NzkzOCAxNS4wNzYzNTkgMTkuMDQ0OTIyIDEzLjQ0MzM1OSAxOS4wNDQ5MjIgQyAxMS44OTEzNTkgMTkuMDQ0OTIyIDEwLjc4NiAxOS4zNTggMTAgMTkuNzUgTCAxMCAxMi4zNjEzMjggQyAxMC4zNDUgMTEuOTA1MzI4IDExLjEzMjM1OSAxMSAxMy40NDMzNTkgMTEgeiIvPjwvc3ZnPg==";
var recent = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxNiA0IEMgMTEuODMyMDMxIDQgOC4xNTIzNDQgNi4xMTMyODEgNiA5LjM0Mzc1IEwgNiA2IEwgNCA2IEwgNCAxMyBMIDExIDEzIEwgMTEgMTEgTCA3LjM3NSAxMSBDIDkuMTAxNTYzIDguMDE5NTMxIDEyLjI5Njg3NSA2IDE2IDYgQyAyMS41MzUxNTYgNiAyNiAxMC40NjQ4NDQgMjYgMTYgQyAyNiAyMS41MzUxNTYgMjEuNTM1MTU2IDI2IDE2IDI2IEMgMTAuNDY0ODQ0IDI2IDYgMjEuNTM1MTU2IDYgMTYgTCA0IDE2IEMgNCAyMi42MTcxODggOS4zODI4MTMgMjggMTYgMjggQyAyMi42MTcxODggMjggMjggMjIuNjE3MTg4IDI4IDE2IEMgMjggOS4zODI4MTMgMjIuNjE3MTg4IDQgMTYgNCBaIE0gMTUgOCBMIDE1IDE3IEwgMjIgMTcgTCAyMiAxNSBMIDE3IDE1IEwgMTcgOCBaIi8+PC9zdmc+Cg==";
const _sfc_main$3 = defineComponent({
  name: "Header",
  setup(props) {
    const { state, updateSearch, updateActiveGroup } = inject("store");
    const hasSearch = computed(() => !state.options.hideSearch);
    const hasGroupIcons = computed(() => !state.options.hideGroupIcons);
    const orderedKeys = JSON.parse(JSON.stringify(state.orderedGroupKeys));
    const placeholder = computed(() => state.options.staticTexts.placeholder || "");
    const searchValue = computed({
      get: () => state.search,
      set: (value) => updateSearch(value)
    });
    const groups = [
      ...state.groups,
      ...Object.keys(state.options.additionalGroups).map((g) => ({
        key: g,
        title: state.options.groupNames[g] ? state.options.groupNames[g] : snakeToCapitalizedCase(g)
      }))
    ];
    const orderedGroups = [];
    orderedKeys.forEach((key) => {
      const index2 = groups.findIndex((group) => group.key === key);
      if (index2 === -1)
        return;
      orderedGroups.push(groups[index2]);
      groups.splice(index2, 1);
    });
    return {
      orderedGroups,
      orderedKeys,
      searchValue,
      updateActiveGroup,
      hasSearch,
      hasGroupIcons,
      placeholder,
      icons: __spreadProps(__spreadValues({
        smileys_people,
        animals_nature,
        food_drink,
        activities,
        travel_places,
        objects,
        symbols,
        flags
      }, state.options.groupIcons), {
        recent
      })
    };
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "v3-header"
};
const _hoisted_2$2 = {
  key: 0,
  class: "v3-groups"
};
const _hoisted_3$2 = ["onClick"];
const _hoisted_4$2 = ["title"];
const _hoisted_5$2 = ["src"];
const _hoisted_6$1 = {
  key: 1,
  class: "v3-spacing"
};
const _hoisted_7 = {
  key: 2,
  class: "v3-search"
};
const _hoisted_8 = ["placeholder"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.hasGroupIcons || _ctx.hasSearch ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
    _ctx.hasGroupIcons ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.orderedGroups, (group) => {
        return openBlock(), createElementBlock("button", {
          key: group.key,
          type: "button",
          class: normalizeClass(["v3-group", {
            "v3-is-hidden": !_ctx.icons[group.key]
          }]),
          onClick: ($event) => _ctx.updateActiveGroup(group.key)
        }, [
          createElementVNode("span", {
            title: group.title,
            class: "v3-icon"
          }, [
            createElementVNode("img", {
              src: _ctx.icons[group.key],
              alt: ""
            }, null, 8, _hoisted_5$2)
          ], 8, _hoisted_4$2)
        ], 10, _hoisted_3$2);
      }), 128))
    ])) : createCommentVNode("", true),
    _ctx.hasGroupIcons && _ctx.hasSearch ? (openBlock(), createElementBlock("div", _hoisted_6$1)) : createCommentVNode("", true),
    _ctx.hasSearch ? (openBlock(), createElementBlock("div", _hoisted_7, [
      withDirectives(createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchValue = $event),
        type: "text",
        placeholder: _ctx.placeholder
      }, null, 8, _hoisted_8), [
        [vModelText, _ctx.searchValue]
      ])
    ])) : createCommentVNode("", true)
  ])) : createCommentVNode("", true);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  name: "Header",
  setup() {
    const { state, updateSkinTone } = inject("store");
    const skinTone = ref(false);
    const hasError = ref(false);
    const stateSkinTone = computed(() => state.skinTone);
    const skinToneText = computed(() => state.options.staticTexts.skinTone || "Skin tone");
    const hasSkinTones = computed(() => !state.options.disableSkinTones);
    const platform = isMac() ? "is-mac" : "";
    const emoji = computed(() => {
      return __spreadProps(__spreadValues({}, state.emoji), {
        src: state.options.emojiRemoteSrc + "/" + state.emoji[EMOJI_RESULT_KEY] + ".png"
      });
    });
    function updateSkinToneState(open = true) {
      skinTone.value = open;
    }
    function toggleSkinToneState() {
      skinTone.value = !skinTone.value;
    }
    function selectSkinTone(tone) {
      updateSkinTone(tone);
      updateSkinToneState(false);
    }
    watch(() => state.emoji, () => {
      hasError.value = false;
    });
    return {
      emoji,
      SKIN_TONES,
      updateSkinToneState,
      skinTone,
      stateSkinTone,
      selectSkinTone,
      toggleSkinToneState,
      EMOJI_RESULT_KEY,
      EMOJI_NAME_KEY,
      skinToneText,
      hasSkinTones,
      native: state.options.native,
      unicodeToEmoji,
      platform,
      hasError
    };
  }
});
const _hoisted_1$1 = { class: "v3-foot-left" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = ["alt", "src"];
const _hoisted_4$1 = { class: "v3-text" };
const _hoisted_5$1 = { class: "v3-text" };
const _hoisted_6 = ["onClick"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "v3-footer",
    onMouseleave: _cache[2] || (_cache[2] = ($event) => _ctx.updateSkinToneState(false))
  }, [
    createElementVNode("div", _hoisted_1$1, [
      createElementVNode("span", {
        class: normalizeClass([_ctx.platform, "v3-icon"])
      }, [
        _ctx.native || _ctx.hasError ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.unicodeToEmoji(_ctx.emoji.r)), 1)) : (openBlock(), createElementBlock("img", {
          key: 1,
          alt: _ctx.unicodeToEmoji(_ctx.emoji.r),
          src: _ctx.emoji.src,
          onError: _cache[0] || (_cache[0] = ($event) => _ctx.hasError = true)
        }, null, 40, _hoisted_3$1))
      ], 2),
      createElementVNode("span", _hoisted_4$1, " :" + toDisplayString(_ctx.emoji[_ctx.EMOJI_NAME_KEY][1] || _ctx.emoji[_ctx.EMOJI_NAME_KEY][0]) + ": ", 1)
    ]),
    _ctx.hasSkinTones ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createElementVNode("button", {
        type: "button",
        class: "v3-tone",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.toggleSkinToneState && _ctx.toggleSkinToneState(...args))
      }, [
        createElementVNode("span", _hoisted_5$1, toDisplayString(_ctx.skinToneText), 1),
        createElementVNode("span", {
          class: normalizeClass(`v3-icon v3-tone-${_ctx.stateSkinTone}`)
        }, null, 2)
      ]),
      createElementVNode("div", {
        class: normalizeClass([_ctx.skinTone ? "v3-is-open" : "", "v3-skin-tones"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.SKIN_TONES, (tone) => {
          return openBlock(), createElementBlock("button", {
            key: tone,
            type: "button",
            class: normalizeClass(["v3-skin-tone-" + tone, "v3-skin-tone"]),
            onClick: ($event) => _ctx.selectSkinTone(tone)
          }, null, 10, _hoisted_6);
        }), 128))
      ], 2)
    ], 64)) : createCommentVNode("", true)
  ], 32);
}
var Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = defineComponent({
  name: "PickerRoot",
  components: {
    Header,
    Body,
    Footer
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    additionalGroups: {
      type: Object,
      default: () => ({})
    },
    groupOrder: {
      type: Array,
      default: () => []
    },
    groupIcons: {
      type: Object,
      default: () => ({})
    },
    groupNames: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:text", "select"],
  setup(props, { emit }) {
    const elem = ref();
    const button = ref();
    const picker = ref();
    const open = ref(false);
    const input = ref(props.text);
    const isInputType = props.type === "input" || props.type === "textarea";
    let cursor = -1;
    const { state } = inject("store");
    const colorTheme = computed(() => state.options.colorTheme);
    function onSelect(emoji) {
      if (isInputType) {
        const mode = state.options.mode;
        if (mode === "prepend") {
          input.value = emoji.i + input.value;
        } else if (mode === "insert" && cursor !== -1) {
          input.value = `${input.value.slice(0, cursor)}${emoji.i}${input.value.slice(cursor)}`;
          cursor += emoji.i.length;
        } else {
          input.value += emoji.i;
        }
        emit("update:text", input.value);
      }
      emit("select", emoji);
    }
    function updateCursor() {
      var _a;
      if (elem.value) {
        cursor = ((_a = elem.value) == null ? void 0 : _a.selectionEnd) || -1;
      }
    }
    function clickListener(event) {
      var _a;
      const isOutside = !((_a = event.target) == null ? void 0 : _a.closest(".v3-input-picker-wrap"));
      if (isOutside && open.value) {
        open.value = false;
      }
    }
    function setupPopper() {
      if (button.value && picker.value && isInputType) {
        let offset2 = state.options.offset;
        if (typeof offset2 !== "number") {
          offset2 = 6;
        }
        createPopper(button.value, picker.value, {
          placement: "bottom-end",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, offset2]
              }
            }
          ]
        });
        document.body.addEventListener("click", clickListener);
      }
    }
    function onChangeText(event) {
      input.value = event.target.value || "";
      emit("update:text", input.value);
    }
    onMounted(() => {
      setupPopper();
    });
    onBeforeUnmount(() => {
      document.body.removeEventListener("click", clickListener);
    });
    return {
      face: smileys_people,
      open,
      onSelect,
      input,
      elem,
      updateCursor,
      button,
      picker,
      isInputType,
      onChangeText,
      colorTheme
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "v3-input-emoji-picker"
};
const _hoisted_2 = { class: "v3-input-picker-root" };
const _hoisted_3 = ["value"];
const _hoisted_4 = ["value"];
const _hoisted_5 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_Body = resolveComponent("Body");
  const _component_Footer = resolveComponent("Footer");
  return _ctx.isInputType ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      _ctx.type === "input" ? (openBlock(), createElementBlock("input", {
        key: 0,
        ref: "elem",
        value: _ctx.input,
        type: "text",
        class: "v3-emoji-picker-input",
        onInput: _cache[0] || (_cache[0] = (...args) => _ctx.onChangeText && _ctx.onChangeText(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.updateCursor && _ctx.updateCursor(...args))
      }, null, 40, _hoisted_3)) : (openBlock(), createElementBlock("textarea", {
        key: 1,
        ref: "elem",
        value: _ctx.input,
        class: "v3-emoji-picker-textarea",
        onInput: _cache[2] || (_cache[2] = (...args) => _ctx.onChangeText && _ctx.onChangeText(...args)),
        onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.updateCursor && _ctx.updateCursor(...args))
      }, null, 40, _hoisted_4)),
      createElementVNode("div", {
        class: normalizeClass(["v3-input-picker-wrap", _ctx.open ? "v3-picker-is-open" : ""])
      }, [
        createElementVNode("button", {
          ref: "button",
          type: "button",
          class: "v3-input-picker-icon",
          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.open = !_ctx.open)
        }, [
          createElementVNode("img", {
            src: _ctx.face,
            alt: ""
          }, null, 8, _hoisted_5)
        ], 512),
        createElementVNode("div", {
          ref: "picker",
          class: normalizeClass(["v3-emoji-picker", "v3-color-theme-" + _ctx.colorTheme])
        }, [
          createVNode(_component_Header),
          createVNode(_component_Body, { onSelect: _ctx.onSelect }, null, 8, ["onSelect"]),
          createVNode(_component_Footer)
        ], 2)
      ], 2)
    ])
  ])) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(["v3-emoji-picker", "v3-color-theme-" + _ctx.colorTheme])
  }, [
    createVNode(_component_Header),
    createVNode(_component_Body, { onSelect: _ctx.onSelect }, null, 8, ["onSelect"]),
    createVNode(_component_Footer)
  ], 2));
}
var PickerRoot = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "Picker",
  components: {
    PickerRoot
  },
  props: {
    native: {
      type: Boolean,
      default: false
    },
    hideSearch: {
      type: Boolean,
      default: false
    },
    hideGroupIcons: {
      type: Boolean,
      default: false
    },
    hideGroupNames: {
      type: Boolean,
      default: false
    },
    staticTexts: {
      type: Object,
      default: () => ({})
    },
    disableStickyGroupNames: {
      type: Boolean,
      default: false
    },
    disabledGroups: {
      type: Array,
      default: () => []
    },
    groupNames: {
      type: Object,
      default: () => ({})
    },
    disableSkinTones: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "insert"
    },
    offset: {
      type: Number,
      default: 6
    },
    additionalGroups: {
      type: Object,
      default: () => ({})
    },
    groupOrder: {
      type: Array,
      default: () => []
    },
    groupIcons: {
      type: Object,
      default: () => ({})
    },
    pickerType: {
      type: String,
      default: ""
    },
    displayRecent: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "light"
    },
    emojiRemoteSrc: {
      type: String,
      default: EMOJI_REMOTE_SRC
    },
    lazyLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:text", "select"],
  setup(props, { emit }) {
    const input = ref(props.text);
    function onChangeText(text) {
      input.value = text || "";
      emit("update:text", input.value);
    }
    const store = Store();
    store.updateOptions({
      native: props.native,
      hideSearch: props.hideSearch,
      hideGroupIcons: props.hideGroupIcons,
      hideGroupNames: props.hideGroupNames,
      staticTexts: __spreadValues(__spreadValues({}, STATIC_TEXTS), props.staticTexts),
      disableStickyGroupNames: props.disableStickyGroupNames,
      disabledGroups: props.disabledGroups,
      groupNames: __spreadValues(__spreadValues({}, GROUP_NAMES), props.groupNames),
      disableSkinTones: props.disableSkinTones,
      displayRecent: props.displayRecent,
      additionalGroups: props.additionalGroups,
      mode: props.mode,
      offset: props.offset,
      groupOrder: props.groupOrder,
      groupIcons: props.groupIcons,
      colorTheme: COLOR_THEMES.includes(props.theme) ? props.theme : "light",
      emojiRemoteSrc: props.emojiRemoteSrc,
      lazyLoading: props.lazyLoading
    });
    provide("store", store);
    return {
      type: props.pickerType,
      input,
      onChangeText
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker_root = resolveComponent("picker-root");
  return openBlock(), createBlock(_component_picker_root, {
    type: _ctx.type,
    text: _ctx.input,
    onSelect: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("select", $event)),
    "onUpdate:text": _ctx.onChangeText
  }, null, 8, ["type", "text", "onUpdate:text"]);
}
var Picker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index = "";
export { Picker as default };
