// list of names of everyone seen in the story
// basically, what we do is whenever we find a title, we look backwards to see if the previous words (up to 4) are somewhere in this list.
// unfortunately, that means that new characters might not get their titles corrected, so we gotta keep this up to date.
var okNamesList = [
    'Luo Li',
    'Zuo Mo',
    'Old Black',
    'Xu Yi',
    'Third',
    'Fourth',
    'Second',
    'First',
    'Hao Min',
    'Fei Yun',
    'Xin Yan',
    'Xiao Guo',
    'Li Ying Feng',
    'Wei Sheng',
    'Li Xian Er',
    'Chi Ye',
    'Yan Le',
    'Sect Head Pei Yuan Ran',
    'Shi Feng Rong',
    'Wei Nan',
    'Fu Jin',
    'Little Mo',
    'Xu Qing',
    'Shi Xiang',
    'Liang Luo',
    'Tian Song Zi',
    'Wei Nan',
    'Zong Ming Yan',
    'Yu Bai',
    'Qin Cheng',
    'Gongsun Qing',
    'Wu Ming',
    'Master Shao',
    'Lin Qian',
    'Xu Yi Xia',
    'Yuan Li',
    'Wen Tie',
    'Xue Yun',
    'Yan Ming Zi',
    'Hu Shan',
    'Tao Zhu Er',
    'Wen Fei',
    'Ming Dao',
    'Gu Rong Ping',
    'Cheng Heng',
    'Chao An',
    'Nan Men Yang',
    'Gui Feng',
    'Su',
    'Meng Qing',
    'Feng Qing',
    'Wei Fei',
    'Nan Ming Zi',
    'Chun Yu Cheng',
    'Gongsun Cha',
    'Zhang Hao',
    'Zou Han',
    'Bo Feng',
    'Mu Xi',
    'Ma Fan',
    'Yun Xia',
    'Wen Tei',
    'Hu Shan',
    'Tao Zhu Er',
    'Yan Ming Zi',
    'Wen Fei',
    'Ming Dao',
    'Wu Ling',
    'Wang',
    'Chang Heng',
    'Dong Fu',
    'Gu Feng',
    'Chun Yu Cheng',
    'Bo Feng',
    'Long Zheng',
    'Hong Yang',
    'Ma Fan',
    'Nian Lu',
    'Lei Peng',
    'Zong Ru',
    'Bao De',
    'Miss',
    'Lil’ Miss’',
    'Jin Bo Zhen',
    'Wei Cheng Bin',
    'Wei Ran',
    'Yuan Jiang',
    'He Xiang',
    'Pagoda',
    'Hong Jun Xuan',
    'Sky Yao',
    'Tian Mu',
    'Bai Ru Fen',
    'Mei',
    'Su Yue',
    'Fei Shan',
    'Rong Wei',
    'He Qiu',
    'Gao',
    'Wan Tian',
    'Chi',
    'Gong Liang Wei',
    'Li Zhuo',
    'Bing Lan',
    'Yi Zheng',
    'Cui',
    'Leng Yue',
    'Chang Zheng',
    'Qian Liu',
    'Bai Rou Lian',
    'Leng Yue',
    'Cang Ze',
    'Nan Yue',
    'Mu Wu Shang',
    'Huai Boy',
    'Xiao Mo',
    'Ming Jue Zi',
    'Qinghua Zang Shui',
    'Qing Hua',
    'Qinghua Xue',
    'Jin Zhen',
    'Feng Xing Zi',
    'Ji Li Yu',
    'Ming Yue Ye',
    'Hong',
    'Su Wei',
    'Jin Zhen',
    'Yu Zi Zhou',
    'Cang Lin',
    'Mo Ru Huo',
    'Mang Zang',
    'Liang Wei',
    'Lil’ Miss',
    'Yu Zi Zhou',
    'Ji Cheng',
    'Mu Xi',
    'He Yong',
    'Ming Yue Ye',
    'Sang Nan',
    'He Mei',
    'Ming Lie',
    'Bing Lan',
    'Liang Wei',
    'Song Yuan',
    'Xi Ye',
    'Xu Zheng Wei',
    'Ren Qing',
    'Gu Xiang Tian',
    'Shu Long',
    'Zhu Zheng',
    'Huang Long',
    'Gu Ming Gong',
    'Lu Zhen',
    'Li San',
    'Shi Dong',
    'Lil’ Bu',
    'Si Dong',
    'A Zhe',
    'Liao Qi Chang',
    'Xiao Wo',
    'Gu Ming Gong',
    'Gongye Xiao Rong',
    'Kang De',
    'He Wei',
    'Ding Zhen',
    'Ding Guang',
    'Bie Han',
    'Bing Yao',
    'Bing Yue',
    'Feng Yue',
    'Jiang Zhe',
    'Nangong Qing Lian',
    'Chao Yu',
    'Ceng Yi',
    'Ba La',
    'Shui Yue',
    'Tang Fei',
    'Tao Xing',
    'Shou Ping',
    'Ceng Lian’er',
    'Cha Xiong',
    'A Zha Ge',
    'Bu Zeng',
    'Hui Bao',
    'Marshall Yu',
    'Marshall Hao',
    'Ji Zheng',
    'Dai Tao',
    'Ding Dong',
    'Gu Liang Dao',
    'Ming Hui',
    'Xue Dong'
]

var okNames = {};
for (var i in okNamesList) {
    var fullName = okNamesList[i];
    var nameParts = fullName.split(' ');
    
    okNames[fullName] = 1;
    for (var j in nameParts) {
        var namePart = nameParts[j];
        okNames[namePart] = 1;
    }
}

////////////////////////////////////////////////////////

// titles. the translator puts titles after names, in the chinese way, but this script will put them back into the english order.
var titles = {
    'da ge' : 'Elder Brother',
    'ge' : 'Brother',
    'renyao' : 'Pretty Boy',
    'ye' : 'Grandpa',
    'ye\'ll' : 'Grandpa will',
    'shiji' : 'Senior Sister',
    'shijie' : 'Senior Sister',
    'shixjie' : 'Senior Sister',
    'shimei' : 'Junior Sister',
    'shixong' : 'Senior Brother',
    'shixiong' : 'Senior Brother',
    'shixoing' : 'Senior Brother',
    'shishizu': 'Ancestor',
    'shxiong' : 'Senior Brother',
    'shidi' : 'Junior Brother',
    'shibo' : 'Grand Elder',
    'shigu' : 'Grand Elder',
    'shifu' : 'Grand Elder',
    'shihu' : 'Grand Elder',
    'shishu' : 'Senior Uncle',
    'shizhi' : 'Junior Nephew',
    'shizi' : 'Junior Nephew',
    'xiani' : 'Goddess',
    'xianren' : 'Immortal',
    'sanren' : 'Rogue Cultivator',
    'saren' : 'Rogue Cultivator',
    'zhenren' : 'Expert',
    'daoren' : 'Daoist Expert',
    'bing' : 'Private',
    'wei' : 'Lieutenant',
    'jiao' : 'Captain',
    'tongling' : 'Major',
    'jiang' : 'Colonel',
    'shuai' : 'General',
    'wang' : 'King',
    'daren' : 'Honorable',
    'danren' : 'Honorable',
    'yeye' : 'Grandpa',
    'jiejie' : 'Grandma',
    'meimei' : 'Granddaughter'
}

var titleReferer = '((?:[A-Z]\\w+ [A-Z]\\w+ [A-Z]\\w+ [A-Z]\\w+)|(?:[A-Z]\\w+ [A-Z]\\w+ [A-Z]\\w+)|(?:[A-Z]\\w+ [A-Z]\\w+)|(?:[A-Z]\\w+))';

var titleWords = '(';
for (var title in titles) {
    var titleCap = title.slice(0,1);
    var titleRePart = '[' + titleCap + titleCap.toUpperCase() + ']' + title.slice(1);
    titleWords += (titleRePart + '|');
}
titleWords = titleWords.slice(0, -1) + ')';

var titleFindRe = new RegExp('<em>' + titleWords + '(s?)<\/em>', 'g');
var titleRe = new RegExp(titleReferer + ' <em>' + titleWords + '(s?)<\/em>', 'g');

////////////////////////////////////////////////////////

// other various pinyin words. these all get checked for potential pluralizations
var others = {
    '(?:[lL]ianqi|[lL]iangqi)' : 'Qi Condensation$1',
    '(?:[zZ]hujii|[zZ]huji)' : 'Foundation Establishment$1',
    '[nN]ingmai' : 'Meridian Channeling$1',
    '[nN]ingmmai' : 'Meridian Channeling$1',
    '[jJ]ing?dan' : 'Core Formation$1',
    '[yY]uanying' : 'Nascent Soul$1',
    '[fF]anxu' : 'Spirit Severing$1',
    '[dD]asheng' : 'Dao Seeking$1',
    '[dD]acheng' : 'Dao Seeking$1',
    
    '[sS]anren [xX](?:ui|iu)(?:zhe)?' : 'Rogue Cultivator$1',
    '(?:[lL]ianqi|[lL]iangqi) [xX](?:ui|iu)(?:zhe)?' : 'Qi Condensation Cultivator$1',
    '[zZ]huji [xX](?:ui|iu)(?:zhe)?' : 'Foundation Establishment Cultivator$1',
    '[zZ]huji [dD]an' : 'Foundation Establishment Pill$1',
    '[nN]ingmai [dD]an' : 'Meridian Channeling Pill',
    '[nN]ingami [xX](?:ui|iu)(?:zhe)?' : 'Meridian Channeling Cultivator$1',
    '[nN]ingmai [xX](?:ui|iu)(?:zhe)?' : 'Meridian Channeling Cultivator$1',
    '[jJ]ing?dan [xX](?:ui|iu)(?:zhe)?' : 'Core Formation Cultivator$1',
    '[yY]uanying [xX](?:ui|iu)(?:zhe)?' : 'Nascent Soul Cultivator$1',
    '[fF]anxu [xX](?:ui|iu)(?:zhe)?' : 'Spirit Severing Cultivator$1',
    '[dD]asheng [xX](?:ui|iu)(?:zhe)?' : 'Dao Seeking Cultivator$1',
    '[dD]acheng [xX](?:ui|iu)(?:zhe)?' : 'Dao Seeking Cultivator$1',
    
    '([dD])antian' : 'Cultivation Base$2',
    '([yY])ang' : 'Yang$2',
    '([yY])in' : 'Yin$2',
    '([yY])ing' : 'Yin$2',
    '([yY])in[yY]an' : 'Yin-Yang$2',
    '([yY])in[yY]ang' : 'Yin-Yang$2',
    '([yY])in [yY]ang' : 'Yin-Yang$2',
    '([lL])ing grains' : 'Spirit grains$2',
    '([lL])ingdan' : 'Spirit pill$2',
    '([lL])ing dan' : 'Spirit pill$2',
    '([dD])an' : 'Pill$2',
    '([aA])n' : 'I',
    '([fF])a jue' : 'Technique$2',
    '([yY])ao(?:mo)? [jJ]ie' : 'Demon Kingdom$2',
    '([mM])o [jJ]ie' : 'Devil Kingdom$2',
    '([jJ])ie [xX](?:ui|iu)(?:zhe)?' : 'Defense Force$2',
    '([jJ])ie' : 'Kingdom$2',
    '([jJ])ing' : 'Realm$2',
    '([lL])ing' : 'Spirit$2',
    '([jJ])inshi' : 'Spirit Stones$2',
    '([jJ])ingshi' : 'Spirit Stones$2',
    '([jJ])ing shi' : 'Spirit Stones$2',
    '([jJ])ingzhi' : 'Spirit Stones$2',
    '([jJ])ingsh' : 'Spirit Stones$2',
    '([jJ])inghsi' : 'Spirit Stones$2',
    '([jJ])inzhi' : 'Spell Formation$2',
    '([xX])iu' : 'Cultivator$2',
    '([xX])uizhe' : 'Cultivator$2',
    '([xX])iuzhe' : 'Cultivator$2',
    '([xX])iuhe' : 'Cultivator$2',
    '([yY])ao' : 'Demon$2',
    '([mM])o' : 'Devil$2',
    '([yY])aomo' : 'Nonhuman$2',
    '([zZ])henren' : 'Expert$2',
    '([dD])aren' : 'Honored One$2',
    '([dD])anren' : 'Honored One$2',
    '([aA])bhinna' : 'Abhinna$2',
    '([aA])bnhinna' : 'Abhinna$2', 
    '([dD])hyana' : 'Body',
    '([dD])hyana [xX](?:ui|iu)(?:zhe)?' : 'Body Cultivator$2',
    'Da([\s\W]+)Daren' : 'Hon$1Honored One',
    '([sS])hen' : 'Divine',
    '([mM])o [bB]ei' : 'Devil Money',
}

// other various pinyin words that the translator forgets to italicize 
othersBare = {
    '(?:[lL]ianqi|[lL]iangqi)' : 'Qi Condensation$1',
    '(?:[zZ]hujii|[zZ]huji)' : 'Foundation Establishment$1',
    '[nN]ingmai' : 'Meridian Channeling$1',
    '[jJ]ing?dan' : 'Core Formation$1',
    '[yY]uanying' : 'Nascent Soul$1',
    '[fF]anxu' : 'Spirit Severing$1',
    '[dD]asheng' : 'Dao Seeking$1',
    '[dD]acheng' : 'Dao Seeking$1',
    
    '([dD])antian' : 'Cultivation Base$2',
    '([yY])ang' : 'Yang$2',
    '([yY])in' : 'Yin$2',
    '([yY])ing' : 'Yin$2',
    '([yY])in[yY]an' : 'Yin-Yang$2',
    '([yY])in[yY]ang' : 'Yin-Yang$2',
    '([yY])in [yY]ang' : 'Yin-Yang$2',
    '([lL])ing grains' : 'Spirit grains$2',
    '([lL])ingdan' : 'Spirit pill$2',
    '([lL])ing dan' : 'Spirit pill$2',
    '([dD])an' : 'Pill$2',
    '([fF])a jue' : 'Technique$2',
    '([jJ])[iI]e' : 'Kingdom$2',
    '([jJ])ie [xX](?:ui|iu)(?:zhe)?' : 'Defense Force$2',
    '([yY])ao(?:mo)? [jJ]ie' : 'Demon Kingdom$2',
    '([mM])o [jJ]ie' : 'Devil Kingdom$2',
    '([jJ])ing' : 'Realm$2',
    '([lL])ing' : 'Spirit$2',
    '([jJ])inshi' : 'Spirit Stones$2',
    '([jJ])ingshi' : 'Spirit Stones$2',
    '([jJ])inzhi' : 'Spell Formation$2',
    '([xX])iu' : 'Cultivator$2',
    '([xX])iuhe' : 'Cultivator$2',
    '([xX])uizhe' : 'Cultivator$2',
    '([xX])iuzhe' : 'Cultivator$2',
    '([xX])iuhe' : 'Cultivator$2',
    '([yY])aomo' : 'Nonhuman$2',
    '[lL]ittle [mM]o [kK]ill' : 'Little Devil Kill',
}

// stuff that can be titles but sometimes not.
titleOthers = {
    '([zZ])henren' : 'Expert$2',
    '([dD])aren' : 'Honored One$2',
    '([dD])anren' : 'Honored One$2',
}

var othersRe = {};
for (var word in others) {
    othersRe[word] = new RegExp('<em>' + word + '(s?)<\/em>', 'g');
}

var othersReBare = {};
for (var word in othersBare) {
    othersReBare[word] = new RegExp('\\b' + word + '(s?)\\b', 'g');
}

var titleOthersRe = {};
for (var word in titleOthers) {
    titleOthersRe[word] = new RegExp('\\b' + word + '(s?)\\b', 'g');
}
var conversions = {
    '([cC])[uù]n' : '$1un',
    '([cC])h[iǐ]' : '$1hi',
    '([zZ])h[aà]ng' : '$1hang',
    '([lL])[iǐ](?!<\/em>\\W*(?:[fF]ire|[wW]ater))' : '$1i',
    '([lL])i[ǎa]ng' : '$1iang',
    '([jJ])[iī]n' : '$1in',
    '([pP])[iī]ng' : '$1ing',
    '([mM])[uǔ]' : '$1u',
}

// if we find a unit, we append this text as a new paragraph after it
var fullConversions = {
    '([cC])[uù]n' : '(1 cun = 3.3cm)',
    '([cC])h[iǐ]' : '(1 chi = 1/3m)',
    '([zZ])h[aà]ng' : '(1 zhang = 3.3m)',
    '([lL])[iǐ](?!<\/em>\\W*(?:[fF]ire|[wW]ater))' : '(1 li = 0.5km)',
    '([lL])i[ǎa]ng' : '(1 liang = 37g = 1.3 ounces)',
    '([jJ])[iī]n' : '(1 jin = 600g = 1.3 pounds)',
    '([pP])[iī]ng' : '(1 ping = 3.33m²)',
    '([mM])[uǔ]' : '(1 mu = 666 2⁄3m² = 1/6 acre)',
}

var conversionsRe = {};
for (var word in conversions) {
    conversionsRe[word] = new RegExp('<em>' + word + '(s?)<\/em>', 'g');
}

////////////////////////////////////////////////////////

var entries = document.getElementsByClassName('entry-content');
var conversionsDone = {}
for (var j = 0; j < entries.length; j++) {
    var entry = entries[j];
    var elements = entry.getElementsByTagName('p');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var originalText = element.innerHTML;
        var text = originalText + '';
        
        text = text.replace(/<i>/gi, '<em>');
        text = text.replace(/<\/i>/gi, '</em>');
        
        // fixText is slow so we only do it for paragraphs that have terms in them
        if (text.indexOf('<em>') > -1) {
            text = fixText(text, conversionsDone);
        }
    
        // all paragraphs get the bareWord list converted
        for (var word in othersBare) {
            var reg = othersReBare[word];
            var replacement = othersBare[word];
            text = text.replace(reg, replacement);
        }
        
        if (originalText !== text) {
            element.innerHTML = text;
        }
    }
}

////////////////////////////////////////////////////////

    
function fixText (text) {
    // first tranform the text into something easier to work with
    text = text.replace(/\s*<a [^>]+>(?:<strong>)?([^<]+)(?:<\/strong>)?\s*<\/a>\s*<\/em>/gi, '</em>');
    text = text.replace(/(\s*[,\.\?!"\-—\-\­]\s*)<\/em>/gi, '</em>$1');
    text = text.replace(/(\s*\W\s*)<\/em>/gi, '</em>$1');
    text = text.replace(/<em> /gi, ' <em>');
    text = text.replace(/ <\/em>/gi, '</em> ');
    text = text.replace(/<em>\s+/gi, ' <em>');
    text = text.replace(/\s+<\/em>/gi, '</em> ');
    text = text.replace(/<em>"/gi, '"<em>');
    text = text.replace(/(\s*[,\.\?!"\-\-—\-\­]\s*)<\/em>/gi, '</em>$1');
    text = text.replace(/(\s*\W\s*)<\/em>/gi, '</em>$1');
    text = text.replace(/['’]s<\/em>/gi, '</em>’s');
    text = text.replace(/<em>(\w+)(,?) \1<\/em>/gi, '<em>$1</em>$2 <em>$1</em>');
    text = text.replace(/<em>(\w+), (\w+), (\w+)<\/em>/gi, '<em>$1</em>, <em>$2</em>, <em>$3</em>');
    text = text.replace(/<em>(\W+)/gi, '$1<em>');
    text = text.replace(/(\W+)<\/em>/gi, '</em>$1');
    
    // next we'll do titles, which might need the words preceding them rearranged
    text = text.replace(titleRe, function (fullMatch, beforeReferer, word, s) {
        var replacement = titles[word.toLowerCase()] + s;
        
        beforeReferer = beforeReferer.replace(/^\s+/, '');
        beforeReferer = beforeReferer.replace(/\s+$/, '');
        
        if (beforeReferer == '') {
            return replacement;
        }
        
        var refWords = beforeReferer.split(' ');
        
        // if we have a match, we check to see if up to 4 referer words are in our name compounded name index
        var extra = '';
        var okCheck = '';
        for (var i=0; i<refWords.length; i++) {
            var refWord = refWords[refWords.length - 1 - i];
            if (!(refWord in okNames)) {
                extra = refWord;
                i += 1
                break;
            }
            
            var sp = (i==0) ? '' : ' ';
            okCheck = refWord + sp + okCheck;
        }
        
        for (; i<refWords.length; i++) {
            var sp = (extra == '') ? '' : ' ';
            extra = refWords[refWords.length - 1 - i] + sp + extra;
        }
        
        var sp1 = (extra == '') ? '' : ' ';
        var sp2 = (okCheck == '') ? '' : ' ';
        
        if (okCheck == '') {        
            for (var oword in titleOthers) {
                var oreg = titleOthersRe[oword];
                var oreplacement = titleOthers[oword];
                if (oreg.test(word)) {
                    return extra + sp1 + word.replace(oreg, oreplacement) + sp2;
                }
            }
        }
        
        var result = extra + sp1 + replacement + sp2 + okCheck;
        
        return result;
    });
    
    // next, other various conversions
    for (var word in others) {
        var reg = othersRe[word];
        var replacement = others[word];
        text = text.replace(reg, replacement);
    }
    
    // titles that are just scattered aroudn without a referer
    // we need to do this after others because I think there's some overlap?
    text = text.replace(titleFindRe, function (fullMatch, word, s) {
        return titles[word.toLowerCase()] + s;
    });
    
    // finally, we append conversions as a seperate paragraph
    var tpc = false;
    for (var word in conversions) {
        var prevText = text + '';
        var reg = conversionsRe[word];
        var replacement = conversions[word];
        text = text.replace(reg, replacement);
        
        if (text != prevText) {
            if (! conversionsDone.hasOwnProperty(word)) {
                if (tpc == false) {
                    text = text + '<br/>';
                    tpc = true;
                }
            
                var addendumText = fullConversions[word];
                text = text + '<br/><i><small>' + addendumText + '</small></i>';
                conversionsDone[word] = true;
            }
        }
    }
    
    return text;
}
