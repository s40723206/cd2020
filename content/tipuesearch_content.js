var tipuesearch = {"pages": [{'title': 'group-cd2020bg1', 'text': 'cd2020-bg1分組網站: https://s40723246.github.io/cd2020-bg1/content/index.html \n member: \n \n 吳沛汶Repository:\xa0 40723201 \xa0 | Site: \xa0 40723201 王冠驊Repository: \xa0 40723206 \xa0 | Site: \xa0 40723206 \xa0(小組長) 杜玗宸Repository: \xa0 40723213 \xa0 | Site: \xa0 40723213 林子欽Repository: \xa0 40723216 \xa0 | Site: \xa0 40723216 洪維成Repository: \xa0 40723223 \xa0 | Site: \xa0 40723223 高立倫Repository: \xa0 40723226 \xa0 | Site: \xa0 40723226 陳羽泓Repository: \xa0 40723229 \xa0 | Site: \xa0 40723229 \xa0 (小組長) 陳冠樺Repository: \xa0 40723230 \xa0 | Site: \xa0 40723230 葉承叡Repository: \xa0 40723241 \xa0 | Site: \xa0 40723241 趙子得Repository: \xa0 40723242 \xa0 | Site: \xa0 40723242 \xa0(小組長) 鄭竣元Repository: \xa0 40723246 \xa0 | Site: \xa0 40723246 \xa0 (group leader) Repository: \xa0 40732319 \xa0 | Site: \xa0 40732319 \n \n \n 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'group-cd2020bg1.html'}, {'title': 'weeks', 'text': '', 'tags': '', 'url': 'weeks.html'}, {'title': 'week1~5', 'text': 'week1 \n 創建github倉儲、設定新版可攜式套件 \n 1.創建課程倉儲並git clone到近端。 \n 2.用git config 設定name、email及proxy。 \n 3.用新指令 git submodule add 載下模組。 \n 4.輸入 python -m pip install flask cors 指令裝 pip 套件。 \n 5.練習開啟近端及遠端並更改網頁名稱。 \n \n week2 \n 將可攜系統python 3.7.3更新至python 3.8.2 \n 1.先去GOOGLE找 Python \n 2.下載 Windows x86-64 executable installer \xa0載完點並 不要勾選pip選項，接著按下next選取放置資料夾 \n 3.在隨身系統下新增放置資料夾cd2020，並在cd2020下新建資料夾data，data<py382< wscite432<portablegit \n 4.下載SciTE系統 \xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432 \n 5.在cd2020下建立新的start.bat及stop.bat \n start.bat: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \n%Disk%:\n \nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \nset PYTHONPATH=%Disk%:\\py373\\DLLs;%Disk%:\\py373\\Lib;%Disk%:\\py373\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py373\n \nset GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n \nset path_python=%Disk%:\\py373;%Disk%:\\py373\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n \npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n \nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \n \nExit \n stop.bat: \n @echo off\nset Disk=y\npath=%PATH%;\n  \ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n  \nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n  \nEXIT \n 8.下 載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data 9.下載 PortableGit\xa0 64-bit Git for Windows Portable \xa0至 portablegit 10 .裝入 pip ，另存新檔到data 11.測試 將python3.8.2版本，將缺少的模組下載回來 \n python get-pip.py\n \n pip install flask bs4 lxml pelican markdown flask_cors leo\n \n 第一次線上會議 \n 一.成員簽到 \n 40723201 (簽) 已建立完成網站  40723206 (簽) 已建立完成網站  小組長   40723213 (簽) 已建立完成網站  40723216 (簽) 已建立完成網站  40723223 (簽)  40723226 (簽) 已建立完成網站  40723229 (簽) 已建立完成網站  小組長   40723230 (簽) 已建立完成網站  40723241 (簽) 已建立完成網站  40723242 (簽) 已建立完成網站  小組長   40723246 ( group leader ) (簽) 已建立完成網站  40732319 (簽) \n 二.討論日後分工 \n 1.由(40723201、40723206、40723230、40723241、40723246)，已經建立 好網站及編輯完網站的同學，前去協助還沒完成的同學    2.40723213、40723242 督處尚未完成的同學，互相協助來完成第一周課程    3.40723223、40723223 負責處理小組會議    4.40723246 負責製作小組會議    5.40723241、40723216 提醒小組問題及完成分組作業 \n 三.有問題的同學提出問題\xa0 \n \n 組員會議中提醒的事項     1.網站的格式及編譯    2.其餘的工作分配    3.PDF 放倉儲的位置及如何放置   \n 分工表 \n \n \n week3 \n 上週我被分派為小組長，我帶領的組員是40723213、40723216、40723241，我們被分派做的部分是 研究並探討四輪車的模擬 ，因為我是小組長所以我分配成 BubbleRob tutorial 、 Line following BubbleRob tutorial 、 External controller  tutorial 、 Simulation \xa0 四個部分，每一個人分別研究一部份。 \n Four Wheel Car- Analysis and integration \n BubbleRob tutorial :\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 此部分由40723206提供 \n 在此教程中會讓我們設計簡單的BubbleRob機器人並進行一些基礎的模擬操作，而大二上我們其實就有實際的以v-rep操作過這個教程，在這個教程中的說明包括了如何建造模型機器人主體、車輪及後方支撐滑塊，還有如何建造及設置障礙物，以及設定好的距離傳感器後使其去感測並避開我們所設置的障礙物，而最重要的要點是如何去設計指令讓傳動器依照我們所想要的方式去做動，且當距離感測器偵測到障礙物時才能使機器人迅速閃避障礙物，另外還有視覺辨識器，使機器人在移動時，讓我們能夠觀測到機器人行徑方向之路況。 \n \n week4 \n week5 \n', 'tags': '', 'url': 'week1~5.html'}, {'title': 'week6~9', 'text': 'week6 \n MechanicalDesignProcess \n 第 3 章   結構注意事項 \n 在前面的章節中，我們定義了成功的設計是什麼，然後繼續確定將要在設計中放置的對象的位置。現在，我們將討論設計的結構性考慮。我覺得我們必須建立在 “ 堅實的基礎 ” 上，以便設計的其餘部分可以以此為基礎。電子外殼（本身）的結構必須堅固到足以在客戶（用戶）使用產品的各種環境中工作。因此，讓我們從討論提供產品的主要考慮因素入手。這個 “ 堅實的基礎 ” 。本章將著重於： \n \n 利用材料概念的優勢提出結構解決方案 \n 定義用於考慮電子外殼結構設計的通用過程 \n 查看一些具體說明一般概念的示例我們將在本章中最後一節標題為 “ 獎金部分 ” 。最後一部分旨在給我們在材料強度方面的問題增加一些複雜性，並展示除強度以外的其他考慮因素對於我們的設計選擇如何重要。 \n \n 3.1 簡介：材料的強度 \xa0 \n \xa0\xa0\xa0 結構注意事項對於設計的整體成功至關重要。 \xa0 讀者無需獲得機械工程學位或成為材料強度方面的專家即可從本章中受益，設計師對材料的基本強度了解得越多，外殼設計就越好。 \xa0 僅解決問題是不夠的，需要盡可能的以最具成本效益的方式解決問題 \xa0 設計適用於電子外殼的結構的分為 四個 基本方法可基本方法： \xa0 \n 1. 查看已經存在的類似產品，並使用已設計的解決方案作為手頭設計的快速起點。這種方法的優點是速度快，但是缺點是您的設計可能會因為缺乏創造力而無法解決特定產品應解決的獨特問題。 \n 2. 快速的 “ 信封背面 ” 設計。這種方法在簡化的結構元素上使用了一些基本的設計方程式。我們將在本章稍後探討這些設計方法的一些示例，以及一些示例問題。 \n 3. 更複雜的分析。在 Sect 中對此進行了更多探討。 \n 4.– 當然，過度設計 並不是所有設計的正確答案。在 競爭激烈的 產品市場中，客戶主要根據價格做出購買決定，過度設計可能會導致產品成本增加（或者肯定會增加重量和尺寸）。結構上的過度設計基本上是從一個非常有可能成功通過結構測試的設計開始的，也就是說，要在客戶使用環境中免受衝擊和振動的影響就可以通過。 \xa0 \n 過度設計原因有以下幾個： \n \n 設計能夠承受所一些力的未知的高精度。這將在 Sect 中進一步探討。 \n 設計中只有一個 “ 安全係數 ” 大於 1.0 。安全係數等於 1.0 意味著您的設計僅符合設計標準。在 Sect 中討論了增加安全係數的設計。 \n \n 3.2 結構的設計過程 \xa0 \n 我想給讀者一個通用的過程，以設計滿足設計要求的電子外殼（或外殼中的 單個零件 ）。通過完成這六個步驟，設計人員應該準備好提出可以使用的材料和橫截面。我將分別細分這六個步驟。\xa0 \n \xa0 \xa0 3.2.1 相似設計 \xa0 \n 業內其他設計如何處理相似情況？其他設計可能來自您自己公司內部的示例（過去的產品），也可能來自您自己公司外部的競爭產品。 \xa0 \n \xa0 \xa0 3.2.2 分力 \n 確定物體上的力（靜態和動態）–振幅和方向這些力量。通常不考慮零件的自重電子外殼可承受靜態力，但可以考慮使用動態力。在本文中，我指的是“對象”，“零件”和“成員”，但它們都應被視為完全是同一個人。 \n \xa0 \xa0 3.2.3 現有的最終條件 \xa0 \n 確定對象的 “ 最終條件 ” ，即其移動自由度以及如何支撐構件。常見的最終條件是 “ 固定 ” （不允許移動）或 “ 自由 ” （允許旋轉）。最終條件會影響確定負載將產生的應力大小。 \xa0 \n \xa0 \xa0 3.2.4 建議材料和橫截面 \xa0 \n 確定支撐這些材料所需的材料和橫截面組合力，請牢記“力量”屬於材料，力會在這些材料中產生應力。所有材料都有最大應力極限，我們要么開始變形或完全破壞點。 \n 基本上，只有兩種最初選擇來設計更高的承重構件 \xa0 \n \n 更換材料，從而可以更改應力極限。因此，選擇具有較高應力極限的材料可以在該構件上施加更多的載荷。 \n 更改材料的橫截面特性，基本上是構件的第二面積矩以及可以從構件的 “ 中性軸 ” 集中的面積。或質心。增大面積將實質上增加成員承載更多載荷的能力。遠離會員的 “ 中性軸 ” 增加該面積也將有助於會員承擔更多的負載（這就是 “ 工字梁 ” 的原因， “ 工字梁 ” 的許多橫截面都遠離 “ 中性軸 ” ，是出色的承載構件）。 \n \n \xa0 \xa0 \xa0 \xa0  3.2.4.2鋁解決方案 \xa0 \n 設計就是要提出一些合理的選擇，所以讓我們看一下鋁樑。 \n 我們可以選擇， b = 4 英寸， h = 2.5 英寸。我們可以看到最大應力為 23,100 psi 。這高於鋁的最大屈服應力，因此不會造成結構變形。在我們的設計中令人非常滿意。但是要記住光束的高度是我們對慣性矩的計算 b = 2.5 英寸和 h = 4 英寸？這將是與鋁樑的先前示例。現在，最大壓力將是 14,400 psi ，完全在該鋁的最大 22,000 psi 之內。因此，“旋轉 - 相同的橫截面，其中較厚的方向是在載荷方向上力，使這種材料選擇和橫截面在結構上成功。讓我們看一下鋁樑的重量。  169 磅 / 英尺 3 ，光束會是 47 磅。相比之下，松木為 40 磅。 \n 總之，我們研究了兩種不同的材料（松木和鋁最小）可用於解決結構問題。我們可以跨領域開發解決結構問題的每種材料的截面積。 \n 在設計中，變形通常與強度同等重要。負載構件可能具有足夠的強度以承受特定的載荷，但是它可能偏轉超出工程材料彈性的不可接受的量。撓度（以及材料的彈性模量 E ）也存在問題正在考慮中的內容將在本章中的一些示例中顯示。上述選擇的經濟性（更換物料或更換物料交叉部分）給 EPE 設計師帶來了一個有趣的問題。的許多組合材料和橫截面積可以使用，但必鬚根據實際情況進行選擇項目的總體目標。除了運作外，它還必須滿足項目的成本目標，可製造性，風險，重量，上市時間等。這些選擇將是進一步的在 ” 第 4 章 - 可能有替代解決方案需要進行審查 ” 開始進行調查，測試和製作原型。最大的資產之一設計師可以帶入設計中，以便快速找到要選擇的邏輯在可行的材料 / 橫截面選擇候選材料中做出解決眼前的問題。 \n   \xa0 \xa0 3.2.5 合併功能 \n 可以將正在設計的零件與裝配中的另一個零件組合嗎在這部分附近嗎？基本上，兩個單獨的部分可以合併成一個部分？查看被合併部分的“另類思維”方面是實際上希望從一個（設想的）單個零件創建兩個單獨的零件。這可能從而降低了總體成本，降低了組合設計的解決方案。主要選擇之一將是確定如何在生產中製造該解決方案。例如，一些這裡涉及的選擇是： \n \n 該項目的工具預算是多少？該項目可以“負擔”開支嗎？鑄造，注模，擠壓或其他製造所需的資金可能正在考慮的充氣技術？是否有現有工具可以利用？必須確定找到“投資回收期”解決方案。例如，了解： \n \n 1. 加工費用 \n 2. 需要多少個零件（在產品“使用壽命”內） \n 3. 未加工零件將花費多少 \n 4. 工具零件將花費多少 \n \xa0 \xa0 3.2.6 確定所需的安全 \xa0 \n 係數此時必須複查 “ 安全係數 ” 的確定。也就是說，必須知道以下問題的答案： \xa0 \n \n 如果零件失效，是否有人受傷？生命，金錢和時間上無法預測的失敗的代價是什麼？ \n 該特定部分在產品整體功能中的重要性如何？如果這部分失敗，那麼整個產品是否會失敗？ \n 對力的了解程度如何？我們是否知道 “ 誤差線 ” ，即力會偏離假定的名義值多少？ \n 確定所選設計（材料或幾何形狀）的 “ 關鍵方面 ” ，以及如何在生產中指定，認證和檢查它們？做筆記以確保將執行這些步驟（認證 / 檢查）。確定設計各個階段所需的測試，以確保最終設計足以將其交付給生產中的客戶。 \n 將有一個優化的解決方案，通常可以通過分析設計的主要組成部分並確定設計中 “ 弱鏈接 ” 的位置來找到。這可以通過利用某些測試方法來發現，這些方法會通過超出環境限制的測試（例如高度加速的壽命測試， HALT ）而導致失敗。通過首先確定可能發生故障的位置，然後通過測試設計原型，可以生成數據來確定某些段是否接近其設計極限。 \n \n \xa0\xa0\xa0  如果設計過程中的上述六個步驟中的任何一個都沒有一定程度的已知答案，則設計人員將面臨： \xa0 \n \n 進行進一步查詢以獲取更好的信息。 \n 進行設計。設計人員在設計過程的一開始就幾乎不了解零件的所有作用力和相互關係。當然，設計人員可以列出所做的假設以及必不可少的其他信息。當然，可以設計零件，對零件進行原型設計並在需要使用的條件下進行測試。解決 “ 在不知道所有信息的情況下進行設計 ” 這一難題的幾種方法可以被採取讓我們研究一個示例，其中： \n \n 設計 1 的重量為目標重量的 110 ％，但在結構上成功的可能性為 95 ％。設計 2 是目標重量的 100 ％，但 75 ％ \xa0 在結構上成功的機會。因此，設計 1 超出了目標重量的 10 ％，但是無法達到通過設計工作的設計目標的風險要低得多結構的觀點。因此，“折衷”是優化設計所需的時間。當然，產品必須從結構的角度進行工作。很難確定在程序開始時就在設計中“預留空間”。繼續前進在不知道所有信息的情況下進行設計的價值在於“基本設計”可以測試。希望可以迅速修改“基本設計”框架，使程序可以在獲得其餘信息時繼續運行。我們可以通過“過度設計”零件來快速前進，或者投入更多時間來“勉強”滿足所有要求。仔細研究了這兩個路徑以下更多解答： \n A. “過度設計”零件–這種方法可能保證零件會在測試中的結構功能。這裡的想法是迭代回到測試顯示出節省材料和減輕重量的地方，從而減少了保守的設計適當。這種方法至少使設計會議的機會最大化在項目測試階段的早期就對結構功能進行了要求等等。但是，設計的重量發生了變化，使這些零件更接近“  mar- 最終成功”將需要時間（和金錢）來重新測試設計以驗證更改。大多數項目在迭代方法上的時間有限獲得“完全”設計的零件。 \n B. 設計零件時使用“僅少量”會議會花費更多時間兼顧重量和強度要求。因此，這種策略與過度設計（以上），因為零件的設計有可能（只是勉強）工作。例如，如果空間和重量減少量最大產品要求列表，該設計在“基本”上可以接受結構強度因子，但具有更大的材料和重量節省，可能是需要什麼。這種方法試圖平衡“風險和回報”與應該徵得設計團隊的同意才能前進。有了這個設計可以達到材料和重量的目標。但是，這種設計的風險不大從結構上講，工作率從 5 ％上升到 25 ％。因此“  B ”設計路徑顯示不滿足產品結構強度要求的較高風險，但將滿足產品的重量要求。 \n C. 上述兩種方法的混合可能是合適的。也就是說，設計會比較保守，而設計的其他部分會更多有風險。這也許使“整體風險承受能力”成為整體風險的一部分。設計。經驗豐富的設計團隊將了解設計中的最佳位置“推翻接受度”。 \n 3.3 所需的分析 \xa0 \n 當然，有許多設計可以保證在電子包裝設計中進行最嚴格的分析。在任何競爭激烈的產品設計領域，將是使用給定技術進行最高生產力的公司，即將大程度地提高其成功機會。如果產品具有： \n \n 高產量。如果要生產成千上萬個特定單元，則每單位節省一美元可以帶來可觀的總節省。節省大量成本的分析會由於大量生產而帶來大量總體利潤。但是，如果只生產幾個單元，則節省的潛力就大大降低了，一旦設計被認為是可行的，在降低成本上的大量投資就不會帶來可觀的節省。 \n 由於要放置產品的環境，因此要求高度安全。例如運輸，公用事業，醫療或教育行業的產品。所有客戶都需要擁有安全操作的產品。 \n 對客戶至關重要的 “ 任務 ” 。這通常包括軍事，航天局或政府所需的產品。 \n \n 請注意，過分設計以致降低公司的盈利能力是沒有任何藉口的。設計師和工程師應該時刻警惕降低成本的可能性。零件的減少，可製造性的設計以及整體設計的優雅，導致了產品的領導地位。只有在設計的第一階段才能 最大 程度地降低成本。隨著設計甚至進入原型階段，為降低成本而重新設計的成本開始呈指數級增長。這方面的更多內容將在第一章中介紹。 \xa0 \n 另外，關於安全的注意事項也是適當的。在安全性很重要的任何領域，都不能為產品設計不足的藉口。當然，美國保險商實驗室（ UL ）和其他安全機構也會對電子設備進行安全考量認證。也就是說，安全機構將獲取產品（規格和工作單元），並對其進行審查和測試。大多數電子產品，當然是在全球範圍內銷售的產品，都必須通過嚴格的代理商批准認證。這方面的更多內容將在第一章中介紹。首要的設計考慮因素仍然是，並且將永遠是功能。即，零件必須 發揮作用 按預期。如果零件在負載下會失效，那麼它的外觀或生產的優雅程度都無關緊要。這是設計人員必須了解載荷的主要原因。 \xa0 \n \xa0\xa0\xa0  使用有限元分析（ FEA ）的現代分析軟件解決方案非常實用無處不在。在 Google 上進行的搜索顯示了一些入門資料，例如： \n A. 有限元分析，麻省理工學院的 David Roylance 。描述三個主體步驟為： \n \n 預處理，將要分析的零件模型（其中的幾何形狀劃分為多個離散的子區域或“元素”）進行連接在離散點稱為“節點” \n 分析，將預處理器準備的數據集用作輸入線性或非線性代數方程組，用於計算應力和位移 \n 後處理，以圖形方式顯示結果，以幫助可視化。分析結果 \n \n B. 線性分析，來自 MIT 開放式課件中的 K. J. Bathe 教授，麻省理工學院。該視頻系列是全面的學習課程，介紹了有效的實體和結構線性分析的有限元程序。 \n C. 有限元分析， H 。 J. Qi 博士。將 FEA 流程描述為： \n \n 制定物理模型，即描述（也許簡化）將實際工程問題轉化為 FEA 可以解決的問題 \n 通過離散化實體，定義材料屬性來使用 FEA 模型，並應用邊界條件 \n 選擇適當的近似函數，制定線性方程，並解決這些方程 \n 以數字和視覺格式獲得結果 \n \n 3.4 結構問題：靜載荷 \xa0 \n \n 問題是可以將其視為 “ 個體 ” ，即將載荷和力施加到 單個構件 要設計的上，也可以認為是 “ 整體結構 ” ，也就是說，它可以是對整個（組裝）結構的分析。 \n 許多單個零件（或子裝配體）的供應商會在自己的文獻中提供設計指南，這些指南肯定可供單個設計師使用。以圖形或表格格式顯示的某些信息植根於基本原理，但這可能並不明顯。這種可用的 “ 供應商數據 ” 類型的一些示例是塑料，密封件， EMI 組件和軸承（僅舉幾例）的設計。 \n \n \xa0 \n 電子外殼中靜載荷是由於的構件上的 1. 構件自身的重量 2. 其他構件施加的載荷 3. 由於熱效應，殘餘應力等 \xa0 引起的載荷。由於施加力而導致以下操作失敗： \xa0 \n 1. 超出材料的屈服強度。 \n 2. 構件過度偏轉，導致構件超出設計意圖。 \n 由於所有載荷都會產生一定的撓度，因此必須在設計中的某個時刻知道允許構件產生多少撓度。 \xa0 \n 靜態載荷下的斷裂破壞在韌性材料中不如在脆性材料中常見。在延性構件中，失效通常是由於過度的非彈性作用而導致的，該過度的彈性作用導致在斷裂之前很長的整體變形。 \xa0 \n 動態負載通常是隨時間變化的負載，而靜態負載在相對較短的時間內不會發生顯著變化。電子外殼設計中常見的一些動態載荷是反复載荷，衝擊載荷和能量載荷。能量負荷是指在撞擊期間傳輸的能量（比作用力）更容易表達的負荷。 \xa0 \n 重複載荷造成的斷裂通常稱為 “ 疲勞 ” 故障。振動可能會導致疲勞失效。 \xa0 以下三個問題通常涵蓋以下主題： \xa0 \n 1. 什麼是光束（相對於平板）？ \n 2. 應力公式和最大應力。 \n 3. 撓度公式和最大撓度。 \n 4. 截面模量。 \n 5. 彈性模量。 \n 6. 結束條件。 \n 7. 負載條件。 \n 8. 最壞的情況下加載。 \n 9. 組合加載。 \xa0 \n \n \xa0 \xa0 3.4.1 懸臂梁分析 \xa0 \n 本節重要性在於強調了橫向剪應力對最大應力的影響。在確定樑的最大應力時，除非用盡所有可能產生最大主應力的彎曲應力和剪切應力組合，否則不要對結果感到滿意。通常，剪切圖和彎矩圖的構造以及彎曲應力和橫向剪切應力的數量級比較將大大簡化問題。 \xa0 \n 使用梁應力公式，我們將繼續解決電子外殼設計人員可能面臨的問題的 “ 主推力 ” 。那就是確定 “ 蓋板 ” 到外殼底盤的（最大）緊固件距離。這種類型的問題涉及沿外殼提供的環境密封 \xa0 \n \n 防止灰塵，濕氣和蒸汽 \n 足夠的 EMI 屏蔽 \n \n 我們將在第 4 章中解決問題的屏蔽部分。現在，我們將解決設計基本密封設計幾何形狀方面的 “ 結構性問題 ” ，以保持足夠的強度以提供防潮密封。環境密封問題的結構考慮： \xa0 \n A. 密封材料： “ 產品環境（密封） ”  \n B. 蓋板和底盤材料：此處涵蓋的彈性模量 \n C. 此處覆蓋的截面積（需要慣性矩） \n D. 此處覆蓋的螺栓間距 \n E. 此處覆蓋的壓縮擋塊 \xa0\xa0 \n \xa0 \n 關於方程式（和答案）的其他一些觀察結果是： \xa0 \n 1. 我們發現，鋼製外殼的螺栓間距大於鋁製外殼的螺栓間距 – 這意味著較硬的材料將允許較少的撓曲。 \n 2. 我們看到螺栓間距隨著厚度的三次方而變化 – 我們期望方程式（用於螺栓間距）可能基於 “ 梁 ” 的慣性矩，從而得出厚度的 “ 立方體函數 ” 。 \n 3. 我們希望螺栓間距是 “ 1 ⁄ 4 功率 ” 的函數，這是梁在其長度上具有均勻載荷的撓曲的通用方程，該樑的撓度是其長度到四次冪的函數。對於載荷均勻的梁，相同的一般方程式也將根據其材料彈性模量（ E ）向 1 ⁄ 4 屈光力（ 3 1 ⁄ 4 = 1.3 ，即 78.5 / 60 ）偏轉。 \xa0 \n 因此，作為設計者，我們首先要估算對於鋁製外殼設計。顯然，我們可以在設計中對此間距進行原型設計，並在盡可能真實的條件下進行測試。值得注意的是，我們還假設了墊圈密封區域的橫截面面積以及墊圈在以下方面的厚度變化： \xa0 \n A. 未壓縮狀態（在擰緊緊固件之前）。 \n B. 壓縮狀態（在擰緊緊固件以在設計中設置 “ 止動件 ” 之後，即，緊固件附近的設計特徵專門限制了墊圈的使用範圍） \xa0 \n 被過度壓縮。所有墊圈都要求這些 “ 止動 ” 以使緊固件具有指定的壓縮極限。我們還可以查看類似的設計，其中防護等級（空氣或水）與我們設計的水平相匹配。如果我們發現本身設計的尺寸適用於這些設計，則可以我們一些信心，我們當然有成功的機會，還應當指出的是 的因素之一， 整體 設計將有的 最低 緊固件量。因此，緊固件之間的 5.0 英寸的距離會比 4.0 更好英寸的距離（從而節省了緊固件並節省了擰緊這些緊固件的工作量）。但是， 4.0 英寸的間距將增加墊圈設計在不屬於一部分的附加載荷下密封的可能性。計算（例如衝擊或熱），從而為設計提供一定的安全裕度。 \xa0 \n \xa0 \xa0 3.4.2 撓度公式和最大撓度 \xa0 \n \xa0 \xa0 我們知道在 “ 無肋 ” 結構上增加肋骨將增加該結構處理更多載荷的能力。通常，可以通過在 “ 常規 ” 壁厚上增加厚度來增加強度，例如： \xa0 \n σ = Mc / I  ，其中： \xa0 \n σ= 所考慮構件的應力 \n M = 該構件的最大力矩（通常是力乘以 “\xa0 距離 “ ，即是 ” 的距離 “ 從力到所述構件的部分） \n I / C = Z ，這是所考慮的部分的性質，也稱為從中性軸截面模量 \n C = 距離成員到 “ 外部纖維 ” 的 \n I = 成員的慣性矩（大約質心）成員因此，要增加的承載能力，您可以：增加 I 和 / 或減少 c （增加 Z ）。在 I 為矩形（長方形是用於製造的構件的共同選擇）其中  b = 的長度矩形的底邊， h 是矩形的 厚度 。請注意，，增加厚度（ h 由於 “ 平方函數 ” ）具有很大的影響。因此，將厚度加倍實際上使光束強度提高四倍。上述說來，加倍厚度將增加構件的重量。對於重量敏感型設計而言，這可能是 “ 災難 ” 。但是，通過添加肋骨，肋骨是厚度的 “ 間斷性 ” 添加，強度顯著提高（而重量僅少量增加）。為什麼是這樣？ \n 儘管肋骨會增加板的總慣性矩，但對於短肋骨，從中性軸到橫截面（ c ）的極端纖維的距離會更快地增加。對於間距較大的肋骨，此效果最為明顯。 \n \xa0 \xa0 3.4.3 另一個撓曲問題，這次是卡扣鉤 \n \xa0\xa0\xa0  這裡的想法是，鉤在連接操作過程中短暫偏轉，並卡入底切以完成配合操作。 \xa0 \n 選擇了以下介紹性問題： \xa0 \n A. 顯示了一種通用的緊固方法（用於塑料）。 \n B. 顯示了使用材料共同強度的公式，該公式利用了材料的彈性特性，在設計中將撓度用作優點，並優化了橫截面積和均勻應變。 \n C. 介紹了使用塑料材料進行設計的某些方面。 \n D. 利用供應商提供的文獻資料（在本例中為 Mobay Plastics ）。代替使用第一性原理解決一些更複雜（至今）的問題，使用列表選項和列線圖可以大大減少所需的設計時間。 \xa0 \n 3.5 動態載荷 \xa0 \n 電子機櫃中構件的動態載荷是由於載荷以非穩態方式承受在構件上的。它們包括但不限於： \xa0 \n A. 具有振幅和頻率的振動載荷（包括風力或與地震地面運動相關的慣性力） \n B. 離散衝擊載荷在這些振動和衝擊載荷情況下，將探討一些問題。 \n 章節摘要 在本章中，介紹了有關外殼結構方面的一些基本考慮。我們可以通過為這些外部船體提供材料來開始這種設計。同樣，我們的設計處置將是選擇船體的橫截面。這些橫截面和材料的最佳選擇是利用易於獲得的材料方程式的強度來進行的。但是，在各種解決方案中都需要做出選擇，並且要確定最佳設計，不僅要單獨考慮結構，還需要更多考慮。 \xa0 \n 此外，我們還介紹了一種用於設計電子外殼結構的通用過程。首先要看先前的設計，確定結構上的力，然後繼續確定設計中的安全因素。 \xa0 \n 參考文獻 \xa0: \n \n Roark RJ, Young WC (1975) Formulas for stress and strain. McGraw-Hill Book Co., New York \n Byars EF, Snyder RD (1969) Engineering mechanics of deformable bodies. International \n \n Textbook Co., Scranton \n \n Design guide to the selection and application of EMI shielding materials. TECKNIT, EMI \n \n Shielding Products (1991) \n \n Injection Molding magazine, May 1998 issue, R. Cramer of Dow Materials Engineering Center \n \n', 'tags': '', 'url': 'week6~9.html'}, {'title': 'week10~14', 'text': '', 'tags': '', 'url': 'week10~14.html'}, {'title': 'week15~18', 'text': '', 'tags': '', 'url': 'week15~18.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'assignment1', 'text': '', 'tags': '', 'url': 'assignment1.html'}, {'title': 'Random Grouping', 'text': '要進行隨機分組及隨機點名，必須先了解程式裡導入的模組及在模組中所用的 語法、迴圈: request 、 ast.literal_eval 、 random 、 for 迴圈 (1) \xa0request 模組:此模組是為了可以使用 Python 來下載網頁上的資料，是以 request 模組建立適當的 HTTP 請求，透過 HTTP 請求從網頁伺服器下載 指定的資料，分為兩種模式Post、Get。 參考文獻: \xa0 https://ithelp.ithome.com.tw/articles/10206215 (2) \xa0 ast 模組: 此模組是python原始碼到位元組碼的一種中間產物，藉助 ast 模組可以從語法樹的角度分析原始碼結構，其中的語法 ast.literal_eval 是為了能夠安全地評估表達式節點或包含Python文字或容器顯示的字符 串。提供的字符串或節點只能由以下Python文字結構組成：字符串、字 節、數字、元組、列表、字典、集合、布林值、None。 參考文獻: \xa0 https://docs.python.org/3/library/ast.html https://www.itread01.com/content/1544847254.html (3) \xa0 random 模組:此模組用於生成偽隨機數，且有許多種用法，例如:隨機選取 choice 、隨機選取 \xa0sample \xa0 (一次選多筆資料)、隨機調換順序 \xa0shuffle \xa0 (就 地調換順序)、隨機取得亂數 \xa0 random \xa0 (0~1之間的隨機亂數)、隨機取得亂 數 \xa0 uniform \xa0 (可以指定範圍)。 參考文獻: \xa0 https://ithelp.ithome.com.tw/articles/10207483 (4) \xa0 for 迴圈: 在處理資料的時候，時常會需要重複執行某些相同的步驟；而迴 圈 (loop) 的作用是讓指定的某段敘述在條件符合的情況下一直重覆執行， 是程式設計中很重要的一種控制結構，且分為兩類: for 、 while \n ○ \xa0 for 迴圈基本語法: for \xa0 變數 \xa0 in \xa0 list 、 字串 、 range ○ \xa0 while 迴圈基本語法: while \xa0 布林值 \xa0 for 迴圈及 while 迴圈比較: \xa0 for 迴圈比較適用在已知迴圈數的問題，而 while 迴圈則適用在「無法預知迴圈數」的問題上。 參考文獻: \xa0 https://medium.com/ccclub/ccclub-python-for-beginners-tutorial4990a5757aa6 \n', 'tags': '', 'url': 'Random Grouping.html'}, {'title': 'Potable System', 'text': 'text: \n 將可攜系統下的python 3.7.3系統更新至python 3.8.2 \n 1.先去GOOGLE SEARCH\xa0 PYTHON \xa0 (點這下載) \n 2.下載 Windows x86-64 executable installer \xa0 (點這下載) \n 3.載完點並 不要勾選pip選項，接著按下next選取放置資料夾 \n 4.在隨身系統下新增放置資料夾cd2020，並在cd2020下新建資料夾data，data<py382< wscite432<portablegit \n 5.下載SciTE系統 \xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432 \n 6.在cd2020下建立新的start.bat及stop.bat \n \n 7.至 SciTE系統更改 start.bat及stop.bat \n \n \n 8. 載入MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data 9. 載入PortableGit\xa0 64-bit Git for Windows Portable \xa0至 portablegit 10 .裝入 pip ，另存新檔到data 11.測試 將python3.8.2版本，將少的模組下載回來 \n \n', 'tags': '', 'url': 'Potable System.html'}, {'title': 'Four Wheel Car', 'text': 'Four Wheel Car- Analysis and integration \n BubbleRob tutorial :\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 此部分由40723206提供 \n 在此教程中會讓我們設計簡單的BubbleRob機器人並進行一些基礎的模擬操作，而大二上我們其實就有實際的以v-rep操作過這個教程，在這個教程中的說明包括了如何建造模型機器人主體、車輪及後方支撐滑塊，還有如何建造及設置障礙物，以及設定好的距離傳感器後使其去感測並避開我們所設置的障礙物，而最重要的要點是如何去設計指令讓傳動器依照我們所想要的方式去做動，且當距離感測器偵測到障礙物時才能使機器人迅速閃避障礙物，另外還有視覺辨識器，使機器人在移動時，讓我們能夠觀測到機器人行徑方向之路況。 \n translation Simulation ~ PDF \n \n translation\xa0 Simulation dialog ~ PDF \n \n Line following\xa0BubbleRob tutorial \n 在本教程中，我們旨在擴展BubbleRob的功能，以使他/她遵循地面上的規則。確保您已經閱讀並理解了第一個BubbleRob教程。本教程由Eric Rohmer提供。 \n 在CoppeliaSim的安裝文件夾中的tutorials / BubbleRob中加載第一個BubbleRob教程的場景。與本教程相關的場景文件位於tutorials / LineFollowingBubbleRob中。 下圖說明了我們將設計的仿真場景： \n \n 我們首先創建3個視覺傳感器中的第一個，並將其附加到bubbleRob對象。選擇[菜單欄->添加->視覺傳感器->正交類型]。通過雙擊場景層次中新創建的視覺傳感器圖標來編輯其屬性，並更改參數以反映以下對話框： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n 視覺傳感器必需面向地面，因此選擇它，然後在“方向”對話框中的“方向”選項上，將“ Alpha-Beta-Gamma”項設置為[180; 0; 0]。 \n 我們有幾種可能性可以讀取視覺傳感器。由於我們的視覺傳感器只有一個像素，並且操作簡單，因此我們只需查詢視覺傳感器讀取的圖像的平均強度值即可。對於更複雜的情況，我們可以設置視覺回調函數。現在，複製並貼上視覺傳感器兩次，並將其名稱調整為leftSensor，middleSensor和rightSensor。將bubbleRob設置為其關係（即，將其附加到bubbleRob對象）。現在，您的傳感器在場景層次中應如下所示： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 讓我們正確放置傳感器。為此使用位置對話框，在位置選項卡上，並設置以下絕對坐標： 左傳感器：[0.2; 0.042; 0.018] 中間傳感器：[0.2; 0; 0.018] 右傳感器：[0.2; -0.042; 0.018] 現在讓我們修改環境。我們可以移去BubbleRob前面的幾個圓柱體。接下來，我們將構建機器人將嘗試遵循的路徑。從現在開始切換到頂視圖：通過頁面選擇器工具欄按鈕選擇頁面4。然後點擊[菜單欄->添加->路徑->圓圈類型]。使用鼠標啟用對象移動。您可以通過兩種方式調整路徑的形狀： 選擇路徑（並且只有路徑）後，按住Ctrl並點擊其控制點之一。然後可以將它們拖動到正確的位置。 選擇路徑後，進入路徑編輯模式。在那裡，您可以靈活地調整各個路徑控制點。 \n 一旦對路徑的幾何形狀滿意（您隨時可以在以後的階段對其進行修改），請選擇它，然後在路徑屬性中取消選中“顯示點的方向”，“顯示路徑線”和“顯示路徑上的當前位置”。然後點擊顯示路徑整形對話框。這將打開路徑整形對話框。點擊啟用路徑變更，將類型設置為水平線段，並將縮放因子設置為4.0。最後將顏色調整為黑色。我們必須對路徑進行最後一個重要的調整：當前，路徑的z位置與地板的z位置重合。結果是有時我們會看到路徑，有時會看到地板（這種效果在openGl行話中被稱為“ z-fighting”）。這不僅影響我們所看到的，而且還會影響視覺傳感器所看到的。為了避免與z戰鬥有關的問題，只需將路徑對象的位置向上移動0.5毫米即可。 \n 最後一步是調整BubbleRob的控制器，使其也將遵循黑色路徑。打開附加到bubbleRob的子腳本，並將其替換為以下代碼： \n \n \n \n \n function speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    -- This is executed exactly once, the first time this script is executed\n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self)\n    leftMotor=sim.getObjectHandle("leftMotor")\n    rightMotor=sim.getObjectHandle("rightMotor")\n    noseSensor=sim.getObjectHandle("sensingNose")\n    minMaxSpeed={50*math.pi/180,300*math.pi/180}\n    backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode\n    floorSensorHandles={-1,-1,-1}\n    floorSensorHandles[1]=sim.getObjectHandle("leftSensor")\n    floorSensorHandles[2]=sim.getObjectHandle("middleSensor")\n    floorSensorHandles[3]=sim.getObjectHandle("rightSensor")\n    -- Create the custom UI:\n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.reate(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(noseSensor)\n    if (result>0) then backUntilTime=sim.getSimulationTime()+4 end\n\n    -- read the line detection sensors:\n    sensorReading={false,false,false}\n    for i=1,3,1 do\n        result,data=sim.readVisionSensor(floorSensorHandles[i])\n        if (result>=0) then\n            sensorReading[i]=(data[11]<0.3) -- data[11] is the average of intensity of the image\n        end\n        print(sensorReading[i])\n    end\n\n    -- compute left and right velocities to follow the detected line:\n    rightV=speed\n    leftV=speed\n    if sensorReading[1] then\n        leftV=0.03*speed\n    end\n    if sensorReading[3] then\n        rightV=0.03*speed\n    end\n    if sensorReading[1] and sensorReading[3] then\n        backUntilTime=sim.getSimulationTime()+2\n    end\n\n    if (backUntilTime<sim.getSimulationTime()) then\n        -- When in forward mode, we simply move forward at the desired speed\n        sim.setJointTargetVelocity(leftMotor,leftV)\n        sim.setJointTargetVelocity(rightMotor,rightV)\n    else\n        -- When in backward mode, we simply backup in a curve at reduced speed\n        sim.setJointTargetVelocity(leftMotor,-speed/2)\n        sim.setJointTargetVelocity(rightMotor,-speed/8)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui) end \n \n \n \n \n 您可以輕鬆地調試以下視覺傳感器的生產線：選擇一個，然後在場景視圖中選擇[右鍵->添加->浮動視圖]，然後在新添加的浮動視圖中選擇[右鍵->視圖- ->將視圖與選定的視覺傳感器關聯]。 \n CoppeliaSim \n 外部控制器教程 在CoppeliaSim中，有幾種方法可以控制機器人或仿真： 最方便的方法是編寫一個子腳本來處理給定機器人或模型的行為。這是最方便的方法，因為子腳本直接附加到場景對象，它們將與相關的場景對像一起復制，它們不需要使用外部工具進行任何編譯，它們可以在線程或非線程模式下運行，它們可以通過自定義Lua函數或Lua擴展庫進行擴展。使用子腳本的另一個主要優點是：與本節中提到的後3種方法（即使用常規API）一樣，沒有通信延遲，並且子腳本是應用程序主線程的一部分（固有的同步操作）。 \n \xa0\xa0\xa0 \xa0 可以控制機器人或模擬的另一種方法是編寫插件。插件機制允許使用回調機制，自定義 Lua 函數註冊，當然還可以訪問外部函數庫。插件通常與子腳本結合使用。使用插件的主要優勢還在於，與本節中提到的後 3 種方法（即使用常規 API ）一樣，沒有通信延遲，並且插件是應用程序主線程的一部分（固有的同步操作）。插件的缺點是：它們的編程更加複雜，並且也需要使用外部編譯。 \n \xa0\xa0 \xa0 控制機器人或模擬的第三種方法是編寫依賴於遠程 API 的外部客戶端應用程序。如果您需要從外部應用程序，機器人或另一台計算機運行控制代碼，這是一種非常便捷的方法。遠程 API 有兩個版本：基於 B0 的遠程 API 和舊版遠程 API 。 \n \xa0\xa0\xa0 \xa0 控制機器人或仿真的第五種方法是通過 ROS 節點。 \xa0 ROS 與遠程 API 相似，是使多個分佈式進程相互通信的便捷方法。儘管遠程 API 非常輕巧且快速，但它僅允許與 CoppeliaSim 通信。另一方面， ROS 允許幾乎將任意數量的進程相互連接，並且提供了大量兼容的庫。 \n \xa0\xa0\xa0\xa0 \xa0 控制機器人或模擬的第六種方法是通過 BlueZero （ BØ ）節點。與 ROS 類似， BlueZero 是使多個分佈式進程相互通信的一種便捷方法。 \n \xa0\xa0\xa0\xa0 \xa0 控制機器人或模擬的第七種方法是編寫一個外部應用程序，該應用程序通過各種方式（例如管道，套接字，串行端口等）與 CoppeliaSim 插件或 CoppeliaSim 腳本進行通信。 \n', 'tags': '', 'url': 'Four Wheel Car.html'}, {'title': 'assignment2', 'text': '', 'tags': '', 'url': 'assignment2.html'}, {'title': 'assignment3', 'text': '', 'tags': '', 'url': 'assignment3.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}]};