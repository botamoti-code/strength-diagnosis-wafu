const questions = [
    { text: "1. 仕事を進めるなら？", options: [{ label: "自分でゼロから作り上げたい", type: "C" }, { label: "誰かのやりたいことを裏で支えたい", type: "S" }] },
    { text: "2. 初対面の人と話すのは？", options: [{ label: "得意。積極的に話しかける", type: "E" }, { label: "どちらかというと聞き役に回るのが好き", type: "M" }] },
    { text: "3. 新しい情報を得た時、どうする？", options: [{ label: "まずは自分で試して、形にしてみる", type: "C" }, { label: "なぜそれが流行っているのか、構造を分析する", type: "S" }] },
    { text: "4. SNSでの発信について", options: [{ label: "自分の顔や名前を出してどんどん発信したい", type: "E" }, { label: "匿名やキャラを使い、有益な情報だけをまとめたい", type: "S" }] },
    { text: "5. トラブルが起きた時の対応は？", options: [{ label: "関わっている人たちの感情や関係性をいち早く修復する", type: "M" }, { label: "二度と同じことが起きないように仕組みを作り直す", type: "S" }] },
    { text: "6. プロジェクトの立ち上げではどちらをやりたい？", options: [{ label: "アイデアを出す、ビジョンを熱く語る", type: "E" }, { label: "スケジュールを引き、現実的にタスクを管理する", type: "M" }] },
    { text: "7. 家での一人の時間", options: [{ label: "一定のルーティンで黙々と作業するのが心地よい", type: "C" }, { label: "常に人と連絡を取り合いながら作業したい", type: "M" }] },
    { text: "8. 文章を書く時、気をつけるのは？", options: [{ label: "自分の想いや情熱が温度感をもって伝わること", type: "E" }, { label: "論理的で、誰が読んでも矛盾なく分かりやすいこと", type: "S" }] },
    { text: "9. 人から褒められて嬉しいのは？", options: [{ label: "「センスがいいね」「技術が高いね」", type: "C" }, { label: "「あの時のサポート助かったよ」「いてくれて良かった」", type: "M" }] },
    { text: "10. 決断する時の最も重要な基準は？", options: [{ label: "過去のデータや他者の成功・失敗事例", type: "S" }, { label: "自分の直感や「これをやりたい」というワクワク感", type: "E" }] },
    { text: "11. ついつい時間を忘れてやってしまうことは？", options: [{ label: "気になったことをとことん調べ尽くすこと", type: "S" }, { label: "気づいたら何かを黙々と手作りしていること", type: "C" }] },
    { text: "12. イベントを企画するなら？", options: [{ label: "メインスピーカーや主役としてステージに立つ", type: "E" }, { label: "会場の手配や参加者の案内など、裏方の運営を取り仕切る", type: "M" }] },
    { text: "13. 完璧主義？", options: [{ label: "細部のクオリティに納得がいくまでこだわり抜きたい", type: "C" }, { label: "8割の完成度でも、まずはスピード重視で世に出したい", type: "E" }] },
    { text: "14. チーム内での心地よい立ち位置", options: [{ label: "特定の専門スキルで貢献する「スペシャリスト」", type: "C" }, { label: "全体を見渡してバランスを調整する「ゼネラリスト」", type: "M" }] },
    { text: "15. 起業において一番大切だと思うのは？", options: [{ label: "失敗のリスクを最小限に抑えるための綿密な戦略", type: "S" }, { label: "人との繋がりやコミュニティの温かさ、信頼関係", type: "M" }] }
];

const resultsData = {
    "C": {
        title: "職人（クリエイター）タイプ",
        description: "あなたの在宅起業における最大の武器は「専門性とこだわり」です。\n\nゼロから何かを作り出す能力に長けており、他人が真似できないような質の高いサービスや作品を生み出すことができます。妥協を許さないその姿勢は、熱狂的なファンを獲得する原動力になるでしょう。\n\n【おすすめの起業スタイル】\n・Webデザイナーや動画クリエイターとしての独立\n・ハンドメイド作品やオリジナル商品の販売\n・専門知識を活かした深いコンテンツ制作（ブログ、電子書籍など）\n\n【ワンポイントアドバイス】\n作ることに没頭しすぎて発信が後回しになりがちです。完成度が8割でも発信する癖をつけると、さらにビジネスが加速します。"
    },
    "S": {
        title: "参謀（ストラテジスト）タイプ",
        description: "あなたの在宅起業における最大の武器は「分析力と仕組み化」です。\n\n物事の構造を冷静に読み解き、効率的な最短ルートを見つけ出すのが得意です。誰もが感覚でやっていることを言語化・体系化できるため、裏方として非常に重宝される存在です。\n\n【おすすめの起業スタイル】\n・起業家や経営者の右腕としてのビジネス秘書\n・LINE構築やマーケティング動線の設計代行\n・データ分析に基づくコンサルティング業務\n\n【ワンポイントアドバイス】\n頭で考えすぎて行動が遅くなる完璧主義な一面があります。「まずはテストする」という思考を取り入れると、戦略がより研ぎ澄まされます。"
    },
    "E": {
        title: "伝道師（エヴァンジェリスト）タイプ",
        description: "あなたの在宅起業における最大の武器は「情熱と発信力」です。\n\n自分の想いやビジョンを言葉にし、人を巻き込むエネルギーに溢れています。あなたの語るストーリーや人間性に惹かれて人が集まるため、コミュニティのカリスマ的なリーダーになれる素質があります。\n\n【おすすめの起業スタイル】\n・自身の経験を活かしたコーチングやコンサルティング\n・オンラインサロンやコミュニティの主宰\n・SNSインフルエンサーやYouTuberとしてのメディア運営\n\n【ワンポイントアドバイス】\nアイデアを思いつくのは得意ですが、細かい継続タスクが苦手な傾向があります。実務をサポートしてくれる「参謀」や「調整役」のパートナーを見つけると最強です。"
    },
    "M": {
        title: "調整役（マネージャー）タイプ",
        description: "あなたの在宅起業における最大の武器は「共感力とサポート力」です。\n\n周囲の人の感情の機微を察知し、みんなが心地よく活動できる環境を整える天才です。強烈な自己主張はしないかもしれませんが、あなたがいるだけで組織やコミュニティの空気が良くなり、絶対的な信頼を得られます。\n\n【おすすめの起業スタイル】\n・コミュニティマネージャーやオンラインサロンの運営サポート\n・ホスピタリティを活かしたカスタマーサポート代行\n・人と人を繋ぐマッチングサービスやコミュニティの仲介\n\n【ワンポイントアドバイス】\n他人のために頑張りすぎて、自分の時間や体力を削ってしまうことがあります。しっかりと「自分のための時間」と「価値への対価設定」を決めることが長く続く秘訣です。"
    }
};

let currentQuestionIndex = 0;
let scores = { C: 0, S: 0, E: 0, M: 0 };

// DOM要素の取得
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const questionCount = document.getElementById('question-count');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressIndicator = document.getElementById('progress-indicator');
const resultType = document.getElementById('result-type');
const resultDescription = document.getElementById('result-description');
const shareBtn = document.getElementById('share-btn');
const retryBtn = document.getElementById('retry-btn');

// イベントリスナー設定
startBtn.addEventListener('click', () => {
    switchScreen(startScreen, questionScreen);
    showQuestion(0);
});

retryBtn.addEventListener('click', () => {
    // リセット処理
    currentQuestionIndex = 0;
    scores = { C: 0, S: 0, E: 0, M: 0 };
    switchScreen(resultScreen, startScreen);
});

// 画面切り替えアニメーション関数
function switchScreen(from, to) {
    from.classList.remove('active');
    setTimeout(() => {
        from.style.display = 'none';
        to.style.display = 'flex';
        // 少し遅延を入れてCSSアニメーションを発火
        setTimeout(() => {
            to.classList.add('active');
        }, 50);
    }, 400); 
}

// 初期状態での非アクティブ画面の非表示設定
document.addEventListener('DOMContentLoaded', () => {
    questionScreen.style.display = 'none';
    loadingScreen.style.display = 'none';
    resultScreen.style.display = 'none';
});

// 質問の表示
function showQuestion(index) {
    if (index >= questions.length) {
        finishQuiz();
        return;
    }
    
    // スライドアニメーションのトリガー
    questionText.classList.remove('question-slide-in');
    void questionText.offsetWidth; // reflowを強制してアニメーションをリセット
    questionText.classList.add('question-slide-in');

    const q = questions[index];
    questionCount.textContent = `第${index + 1}問 / ${questions.length}`;
    questionText.innerHTML = q.text.replace(/\n/g, '<br>');
    
    // プログレスバーの更新
    progressIndicator.style.width = `${(index / questions.length) * 100}%`;

    // 選択肢の生成
    optionsContainer.innerHTML = '';
    q.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'btn option-btn';
        btn.textContent = opt.label;
        btn.onclick = () => handleAnswer(opt.type);
        optionsContainer.appendChild(btn);
    });
}

// 回答時の処理
function handleAnswer(type) {
    scores[type]++;
    currentQuestionIndex++;
    
    // 即座に次の問題へ遷移
    showQuestion(currentQuestionIndex);
}

// クイズ終了時の処理
function finishQuiz() {
    progressIndicator.style.width = `100%`;
    switchScreen(questionScreen, loadingScreen);
    
    // 1.5秒間ローディング画面を表示して分析している感を出す
    setTimeout(() => {
        showResult();
        switchScreen(loadingScreen, resultScreen);
    }, 1500);
}

// 結果の表示
function showResult() {
    // スコアの最大値を判定
    let maxScore = -1;
    let maxType = "C";
    
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            maxType = type;
        }
    }
    
    const result = resultsData[maxType];
    
    resultType.textContent = result.title;
    resultDescription.textContent = result.description;
    
    // ThreadsのシェアURL生成
    // ogpのURLがない場合はとりあえず診断完了テキストのみシェア
    const shareText = `私の在宅起業での強みは「${result.title}」でした！\n\n15の質問から在宅起業の隠れた武器を分析する診断はこちら👇\nfrom 五方よし起業道場\n`;
    const appUrl = window.location.href; 
    
    const encodedText = encodeURIComponent(shareText + appUrl);
    shareBtn.href = `https://www.threads.net/intent/post?text=${encodedText}`;
}
