/**
 * Statistics Page - Enhanced Animations & Charts
 * Better Bagac Portal - Minimal Professional Design
 */

// Brand colors
const COLORS = {
    primary: '#0032a0',
    primaryDark: '#002170',
    secondary: '#003D82',
    accent: '#F77F00',
    success: '#06A77D',
    info: '#0077BE'
};

// Barangay data (2020 Census)
const barangayData = [
    { name: 'Pag-asa', pop: 3729 },
    { name: 'Parang', pop: 3480 },
    { name: 'Saysain', pop: 3468 },
    { name: 'Banawang', pop: 3460 },
    { name: 'Atilano L. Ricardo', pop: 3319 },
    { name: 'Binukawan', pop: 2814 },
    { name: 'Bagumbayan', pop: 2135 },
    { name: 'Ibaba', pop: 1920 },
    { name: 'Ibis', pop: 1884 },
    { name: 'San Antonio', pop: 1511 },
    { name: 'Tabing-Ilog', pop: 1321 },
    { name: 'Paysawan', pop: 862 },
    { name: 'Binuangan', pop: 752 },
    { name: 'Quinawan', pop: 710 }
];

// Historical data
const historicalData = {
    years: [1990, 1995, 2000, 2007, 2010, 2015, 2020, 2024],
    populations: [18241, 20906, 22353, 24202, 25568, 26936, 31365, 32799]
};

// Chart instances
let charts = {};

/**
 * Animate number counting
 */
function animateCount(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    requestAnimationFrame(update);
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    
                    // Trigger count animation for metric cards
                    const countEl = entry.target.querySelector('[data-count]');
                    if (countEl) {
                        const target = parseInt(countEl.dataset.count);
                        animateCount(countEl, target);
                    }
                    
                    // Animate bars
                    animateBars(entry.target);
                }, delay);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.animate-on-scroll, .metric-card').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Animate progress bars within an element
 */
function animateBars(container) {
    // Breakdown bars
    container.querySelectorAll('.breakdown-segment').forEach(bar => {
        const width = bar.dataset.width;
        if (width) {
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 300);
        }
    });
    
    // Barangay bars
    container.querySelectorAll('.bar-wrap .bar').forEach(bar => {
        const width = bar.dataset.width;
        if (width) {
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 100);
        }
    });
    
    // Sector bars
    container.querySelectorAll('.sector-bar').forEach(bar => {
        const width = bar.dataset.width;
        if (width) {
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 200);
        }
    });
    
    // Poverty bars
    container.querySelectorAll('.poverty-fill').forEach(bar => {
        const width = bar.dataset.width;
        if (width) {
            setTimeout(() => {
                bar.style.width = (width * 10) + '%';
            }, 300);
        }
    });
}

/**
 * Create Historical Line Chart
 */
function createHistoricalChart() {
    const ctx = document.getElementById('historicalLineChart');
    if (!ctx) return;
    
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, 'rgba(0, 50, 160, 0.15)');
    gradient.addColorStop(1, 'rgba(0, 50, 160, 0)');
    
    charts.historical = new Chart(ctx, {
        type: 'line',
        data: {
            labels: historicalData.years,
            datasets: [{
                label: 'Population',
                data: historicalData.populations,
                borderColor: COLORS.primary,
                backgroundColor: gradient,
                fill: true,
                tension: 0.35,
                pointBackgroundColor: COLORS.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                borderWidth: 2.5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0, 50, 160, 0.92)',
                    titleFont: { size: 13, weight: '600' },
                    bodyFont: { size: 12 },
                    padding: 10,
                    cornerRadius: 6,
                    displayColors: false,
                    callbacks: {
                        label: ctx => `Population: ${ctx.raw.toLocaleString()}`
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11, weight: '500' }, color: '#666' }
                },
                y: {
                    beginAtZero: false,
                    grid: { color: 'rgba(0,0,0,0.04)' },
                    ticks: {
                        font: { size: 11 },
                        color: '#666',
                        callback: v => (v / 1000) + 'K'
                    }
                }
            }
        }
    });
}

/**
 * Create Distribution Pie Chart
 */
function createDistributionChart() {
    const ctx = document.getElementById('distributionPieChart');
    if (!ctx) return;
    
    const top10 = barangayData.slice(0, 10);
    const colors = [
        COLORS.primary, COLORS.accent, COLORS.success, COLORS.info,
        '#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B', '#6366F1', COLORS.secondary
    ];
    
    charts.distribution = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: top10.map(d => d.name),
            datasets: [{
                data: top10.map(d => d.pop),
                backgroundColor: colors,
                borderColor: '#fff',
                borderWidth: 2,
                hoverBorderWidth: 2,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1200,
                easing: 'easeOutQuart'
            },
            cutout: '58%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12,
                        padding: 10,
                        font: { size: 11 },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 50, 160, 0.92)',
                    titleFont: { size: 13, weight: '600' },
                    bodyFont: { size: 12 },
                    padding: 10,
                    cornerRadius: 6,
                    callbacks: {
                        label: ctx => {
                            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                            const pct = ((ctx.raw / total) * 100).toFixed(1);
                            return `${ctx.raw.toLocaleString()} (${pct}%)`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * Create Population Bar Chart
 */
function createBarChart() {
    const ctx = document.getElementById('populationBarChart');
    if (!ctx) return;
    
    const sorted = [...barangayData].sort((a, b) => b.pop - a.pop);
    
    charts.bar = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(d => d.name),
            datasets: [{
                label: 'Population',
                data: sorted.map(d => d.pop),
                backgroundColor: sorted.map((_, i) => {
                    const opacity = 1 - (i * 0.025);
                    return `rgba(0, 50, 160, ${opacity})`;
                }),
                borderRadius: 3,
                borderSkipped: false,
                barThickness: 18
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1200,
                easing: 'easeOutQuart',
                delay: ctx => ctx.dataIndex * 40
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0, 50, 160, 0.92)',
                    titleFont: { size: 13, weight: '600' },
                    bodyFont: { size: 12 },
                    padding: 10,
                    cornerRadius: 6,
                    displayColors: false,
                    callbacks: {
                        label: ctx => `Population: ${ctx.raw.toLocaleString()}`
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.04)' },
                    ticks: {
                        font: { size: 10 },
                        color: '#666',
                        callback: v => v.toLocaleString()
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { size: 10, weight: '500' }, color: '#444' }
                }
            }
        }
    });
}

/**
 * Initialize all charts with lazy loading
 */
function initCharts() {
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chartId = entry.target.id;
                
                if (chartId === 'historicalLineChart' && !charts.historical) {
                    createHistoricalChart();
                } else if (chartId === 'distributionPieChart' && !charts.distribution) {
                    createDistributionChart();
                } else if (chartId === 'populationBarChart' && !charts.bar) {
                    createBarChart();
                }
                
                chartObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('canvas').forEach(canvas => {
        chartObserver.observe(canvas);
    });
}

/**
 * Initialize economy section counters
 */
function initEconomyCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const countEl = entry.target.querySelector('[data-count]');
                if (countEl) {
                    const target = parseInt(countEl.dataset.count);
                    animateCount(countEl, target, 1500);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.economy-card').forEach(card => {
        observer.observe(card);
    });
}

/**
 * CMCI (Competitive Index) Data
 */
const cmciData = {
    years: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    pillars: {
        economicDynamism: {
            labels: ['Pillar Score'],
            data: [
                [7.7927, 2.9825, null, 6.5178, 5.8978, 4.8484, 5.0069, 3.4251, 4.4403]
            ]
        },
        governmentEfficiency: {
            labels: ['Pillar Score'],
            data: [
                [11.0795, 5.4594, null, 10.9738, 10.6320, 9.4709, 10.8794, 8.2384, 8.5939]
            ]
        },
        infrastructure: {
            labels: ['Pillar Score'],
            data: [
                [7.1863, 6.5953, null, 5.6495, 5.4788, 5.3197, 3.0484, 2.9511, 3.3508]
            ]
        },
        resiliency: {
            labels: ['Pillar Score'],
            data: [
                [null, 12.1900, null, 15.0487, 16.3804, 13.3661, 10.3004, 10.2982, 11.2791]
            ]
        },
        innovation: {
            labels: ['Pillar Score'],
            data: [
                [null, null, null, null, null, null, 3.6167, 2.7567, 7.4175]
            ]
        }
    },
    keyIndicators: {
        labels: ['Economic Dynamism', 'Government Efficiency', 'Infrastructure', 'Resiliency', 'Innovation'],
        data: [
            [7.7927, 2.9825, null, 6.5178, 5.8978, 4.8484, 5.0069, 3.4251, 4.4403],
            [11.0795, 5.4594, null, 10.9738, 10.6320, 9.4709, 10.8794, 8.2384, 8.5939],
            [7.1863, 6.5953, null, 5.6495, 5.4788, 5.3197, 3.0484, 2.9511, 3.3508],
            [null, 12.1900, null, 15.0487, 16.3804, 13.3661, 10.3004, 10.2982, 11.2791],
            [null, null, null, null, null, null, 3.6167, 2.7567, 7.4175]
        ]
    }
};

/**
 * Create CMCI Overview Chart
 */
function createCMCIOverviewChart() {
    const ctx = document.getElementById('cmciOverviewChart');
    if (!ctx || charts.cmciOverview) return;
    
    const chartColors = [COLORS.primary, COLORS.accent, COLORS.success, COLORS.info, '#8B5CF6'];
    
    charts.cmciOverview = new Chart(ctx, {
        type: 'line',
        data: {
            labels: cmciData.years,
            datasets: cmciData.keyIndicators.labels.map((label, i) => ({
                label: label,
                data: cmciData.keyIndicators.data[i],
                borderColor: chartColors[i],
                backgroundColor: chartColors[i] + '15',
                fill: false,
                tension: 0.35,
                pointRadius: 3,
                pointHoverRadius: 5,
                borderWidth: 2
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1200, easing: 'easeOutQuart' },
            interaction: { intersect: false, mode: 'index' },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { boxWidth: 10, padding: 14, font: { size: 10 }, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 50, 160, 0.92)',
                    padding: 10,
                    cornerRadius: 6,
                    callbacks: {
                        label: ctx => ctx.raw !== null ? `${ctx.dataset.label}: ${ctx.raw.toFixed(4)}` : `${ctx.dataset.label}: N/A`
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 10 }, color: '#666' } },
                y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 }, color: '#666' } }
            }
        }
    });
}

/**
 * Create CMCI Pillar Chart
 */
function createCMCIPillarChart(pillarKey, canvasId) {
    const ctx = document.getElementById(canvasId);
    if (!ctx || charts[canvasId]) return;
    
    const pillarData = cmciData.pillars[pillarKey];
    if (!pillarData) return;
    
    const chartColors = [COLORS.primary, COLORS.accent, COLORS.success, COLORS.info, '#8B5CF6'];
    
    charts[canvasId] = new Chart(ctx, {
        type: 'line',
        data: {
            labels: cmciData.years,
            datasets: pillarData.labels.map((label, i) => ({
                label: label,
                data: pillarData.data[i],
                borderColor: chartColors[i],
                backgroundColor: chartColors[i] + '15',
                fill: false,
                tension: 0.35,
                pointRadius: 2.5,
                pointHoverRadius: 4,
                borderWidth: 1.5
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1000, easing: 'easeOutQuart' },
            interaction: { intersect: false, mode: 'index' },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { boxWidth: 8, padding: 10, font: { size: 9 }, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 50, 160, 0.92)',
                    padding: 8,
                    cornerRadius: 5,
                    callbacks: {
                        label: ctx => ctx.raw !== null ? `${ctx.dataset.label}: ${ctx.raw.toFixed(4)}` : `${ctx.dataset.label}: N/A`
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 9 }, color: '#666' } },
                y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 9 }, color: '#666' } }
            }
        }
    });
}

/**
 * Initialize CMCI Tab Navigation
 */
function initCMCITabs() {
    const tabs = document.querySelectorAll('.cmci-tab');
    const panels = document.querySelectorAll('.cmci-panel');
    
    if (!tabs.length) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const pillar = tab.dataset.pillar;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active panel
            panels.forEach(p => p.classList.remove('active'));
            const activePanel = document.getElementById(`panel-${pillar}`);
            if (activePanel) {
                activePanel.classList.add('active');
                
                // Create chart for this panel if needed
                if (pillar === 'overview') {
                    createCMCIOverviewChart();
                } else if (pillar === 'economic-dynamism') {
                    createCMCIPillarChart('economicDynamism', 'cmciEconomicChart');
                } else if (pillar === 'government-efficiency') {
                    createCMCIPillarChart('governmentEfficiency', 'cmciGovernmentChart');
                } else if (pillar === 'infrastructure') {
                    createCMCIPillarChart('infrastructure', 'cmciInfraChart');
                } else if (pillar === 'resiliency') {
                    createCMCIPillarChart('resiliency', 'cmciResiliencyChart');
                } else if (pillar === 'innovation') {
                    createCMCIPillarChart('innovation', 'cmciInnovationChart');
                }
                
                // Animate indicator bars
                animateCMCIBars(activePanel);
            }
        });
    });
}

/**
 * Animate CMCI indicator bars
 */
function animateCMCIBars(container) {
    container.querySelectorAll('.indicator-fill').forEach(bar => {
        const value = bar.dataset.value;
        if (value) {
            setTimeout(() => {
                bar.style.setProperty('--fill-width', value + '%');
                bar.classList.add('animated');
            }, 100);
        }
    });
}

/**
 * Initialize CMCI Section
 */
function initCMCISection() {
    const cmciSection = document.getElementById('competitive-index');
    if (!cmciSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initCMCITabs();
                createCMCIOverviewChart();
                animateCMCIBars(document.getElementById('panel-overview'));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(cmciSection);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initCharts();
    initEconomyCounters();
    initCMCISection();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        barangayData,
        historicalData,
        cmciData,
        COLORS,
        animateCount
    };
}