// 共通のデータセットを生成する関数
const createDataset = (label: string, data: number[]) => ({
  labels: [
    '10~11.9万円',
    '12~13.9',
    '14~15.9',
    '16~17.9',
    '18~19.9',
    '20~21.9',
    '22~23.9',
    '24~25.9',
    '26~27.9',
    '28~29.9',
    '30~31.9',
    '32~33.9',
    '34~35.9',
    '36~37.9',
    '40~44.9',
    '45~49.9',
    '50~59.9',
    '60~69.9',
    '70~79.9',
    '80~89.9',
    '90~99.9',
    '100Over'
  ],
  datasets: [
    {
      label,
      backgroundColor: Array(22).fill('#e8f5e9'), // 共通の背景色
      borderColor: Array(22).fill('#388e3c'), // 共通のボーダー色
      borderWidth: 1, // 共通のボーダー幅
      data
    }
  ]
})

// 年齢層ごとのデータを定義
export const incomeDataByAgeGroup = {
  '20-24': createDataset(
    '割合(%) (20-24歳)',
    [
      0.2, 1.5, 4.5, 11.5, 19.6, 25.2, 17.6, 9.6, 5.2, 2.4, 1.1, 0.5, 0.4, 0.4, 0.2, 0.1, 0.0, 0, 0,
      0, 0, 0
    ]
  ),
  '25-29': createDataset(
    '割合(%)(25歳~29歳)',
    [
      0.1, 0.6, 2.4, 4.2, 8.1, 13.6, 18.3, 17.5, 11.9, 7.8, 5.2, 3.1, 2.3, 2.2, 1.1, 0.6, 0.4, 0.2,
      0.1, 0, 0, 0, 0
    ]
  ),
  '30-34': createDataset(
    '割合(%)(30歳~34歳)',
    [
      0.1, 0.4, 1.6, 2.7, 4.9, 7.8, 10.6, 12.4, 12.5, 10.8, 8.7, 7, 5.3, 6.4, 4.1, 2, 1.5, 0.7, 0.2,
      0.1, 0.1, 0.1, 0.1
    ]
  ),
  '35-39': createDataset(
    '割合(%)(35歳~39歳)',
    [
      0.1, 0.4, 1, 2.2, 3.6, 5.6, 7, 8.9, 9.4, 9.3, 9.1, 8.1, 6.4, 9.9, 8, 4.5, 4.1, 1.3, 0.6, 0.3,
      0.1, 0.2, 0.2
    ]
  ),
  '40-44': createDataset(
    '割合(%)(40歳~44歳)',
    [
      0.1, 0.3, 1.0, 1.9, 3.0, 4.1, 5.3, 6.7, 7.8, 7.9, 7.7, 7.3, 6.9, 11.2, 10.1, 6.5, 6.6, 3.1,
      1.2, 0.5, 0.3, 0.2, 0.3
    ]
  ),
  '45-49': createDataset(
    '割合(%)(45歳~49歳)',
    [
      0.1, 0.2, 0.9, 1.7, 2.6, 3.5, 4.2, 5.1, 5.8, 6.3, 6.7, 6.4, 6.1, 11.7, 11.6, 8.5, 9.8, 4.7, 2,
      1, 0.5, 0.3, 0.4
    ]
  ),
  '50-54': createDataset(
    '割合(%)(50歳~54歳)',
    [
      0.1, 0.3, 1, 1.9, 3, 3.4, 3.8, 4.3, 4.8, 4.9, 5.4, 5.5, 5, 10, 10.8, 8.9, 11.8, 7.4, 3.9, 1.9,
      0.7, 0.7, 0.6
    ]
  ),
  '55-59': createDataset(
    '割合(%)(55歳~59歳)',
    [
      0.1, 0.5, 1.4, 2.4, 3.3, 4.1, 4.1, 4.3, 4.7, 4.6, 4.8, 5.1, 4.7, 9.6, 11.1, 8.9, 11.9, 6.8,
      3.6, 1.7, 0.8, 0.7, 0.6
    ]
  ),
  '60-64': createDataset(
    '割合(%)(60歳~64歳)',
    [
      0.3, 1.2, 4.3, 8.5, 10.2, 10.7, 8.8, 8.5, 7.2, 5.4, 4.8, 3.8, 3.2, 4.9, 4.8, 3.1, 4.2, 2.4,
      1.3, 0.7, 0.4, 0.4, 0.6
    ]
  ),
  '65-69': createDataset(
    '割合(%)(65歳~69歳)',
    [
      0.8, 3.7, 9.6, 12.9, 12.8, 11.4, 8.8, 7.3, 5.8, 4.2, 4.5, 2.5, 2.2, 2.8, 2.7, 2.1, 2.1, 1.1,
      0.9, 0.5, 0.2, 0.3, 0.6
    ]
  ),
  '70+': createDataset(
    '割合(%)(70歳以上)',
    [
      2.2, 6.4, 13.2, 14, 12.9, 11.6, 7.5, 7, 4.8, 2.8, 3.5, 1.8, 2.2, 2.2, 1.8, 1.3, 1.1, 0.9, 0.4,
      0.4, 0.2, 0.7, 0.8
    ]
  )
}

// グラフの共通オプション
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 40
    }
  }
}