/**
 * Kanaf Platform Charts Helper File
 * Uses Chart.js v4
 */

// Draw Sponsor Payments History
export function renderSponsorPaymentChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
      datasets: [{
        label: 'المدفوعات الشهرية لشراكة الكفالة ($)',
        data: [650, 650, 650, 950, 950, 950],
        borderColor: '#1B6B43',
        backgroundColor: 'rgba(27, 107, 67, 0.05)',
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#F5A623',
        pointBorderColor: '#fff',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { font: { family: 'Cairo', size: 12 } }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { font: { family: 'Cairo' } }
        },
        x: {
          ticks: { font: { family: 'Cairo' } }
        }
      }
    }
  });
}

// Draw Admin Dashboard Stats
export function renderAdminCoreCharts(monthlyCampaignId, orphanDistributionId) {
  const mCtx = document.getElementById(monthlyCampaignId);
  if (mCtx) {
    new Chart(mCtx, {
      type: 'bar',
      data: {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
        datasets: [{
          label: 'إجمالي واردات الكفالات (ألف دولار)',
          data: [15.2, 16.8, 18.5, 22.1, 23.5, 26.8],
          backgroundColor: '#1B6B43',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { font: { family: 'Cairo' } } }
        },
        scales: {
          y: { ticks: { font: { family: 'Cairo' } } },
          x: { ticks: { font: { family: 'Cairo' } } }
        }
      }
    });
  }

  const dCtx = document.getElementById(orphanDistributionId);
  if (dCtx) {
    new Chart(dCtx, {
      type: 'doughnut',
      data: {
        labels: ['ذكور مكفولين', 'إناث مكفولين', 'بانتظار الكفالة'],
        datasets: [{
          data: [85, 102, 58],
          backgroundColor: ['#1B6B43', '#F5A623', '#DC3545'],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { font: { family: 'Cairo', size: 11 } }
          }
        }
      }
    });
  }
}
