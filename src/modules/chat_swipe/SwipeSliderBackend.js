export const maxVal = 300.0;
const minVal = 40.0;
const delVal = 80.0;
const maxSeconds = 1209600.0; // 14 days

export function numberToTime(val) {
  if (val < 60) {
    return `${Math.round(val)} seconds`;
  } else if (val < 60 * 60) {
    return `${Math.round(val / 60)} minutes`;
  } else if (val < 60 * 60 * 24) {
    return `${Math.round(val / (60 * 60))} hours`;
  } else {
    return `${Math.round(val / (60 * 60 * 24))} days`;
  }
}

export class SwipeSliderData {
  constructor(isActor = false) {
    this.command = '';
    this.banDuration = null;
    this.text = '';
    this.time = 0;
    this.banVis = 0;
    this.unbanVis = 0;
    this.color = '';
    this.pos = '0px';
    this.isActor = isActor;
  }

  secondsToBanDuration(time) {
    const duration = {
      days: Math.floor(time / (24 * 3600)),
      hours: Math.floor((time % (24 * 3600)) / 3600),
      minutes: Math.floor((time % 3600) / 60),
      seconds: Math.floor(time % 60),
    };

    return [
      duration.days ? `${duration.days}d` : '',
      duration.hours ? `${duration.hours}h` : '',
      duration.minutes ? `${duration.minutes}m` : '',
      duration.seconds ? `${duration.seconds}s` : '',
    ]
      .filter(Boolean)
      .join('');
  }

  calculate(pos) {
    this.pos = `${this.isActor ? Math.max(0, pos) : pos}px`;

    this.banVis = 0;
    this.unbanVis = 0;

    if (pos < -40 && !this.isActor) {
      this.command = 'unban';
      this.unbanVis = 1;
      this.text = 'Unban';
      this.color = '#00FF00';
    } else if (pos < minVal) {
      this.command = '';
      this.text = '';
      this.color = '';
      return;
    } else if (pos < delVal) {
      this.command = 'delete';
      this.text = 'Delete';
      this.color = '#FFFF00';
      this.banVis = 1;
    } else if (pos < maxVal && !this.isActor) {
      const time = Math.pow((pos + 0.25 * maxVal - delVal) / (1.25 * maxVal - delVal), 10) * maxSeconds;
      this.command = 'ban';
      this.banDuration = this.secondsToBanDuration(Math.round(time)) || '14d';
      this.text = String(numberToTime(time));
      this.color = '#FFA500';
      this.banVis = 1;
    } else if (pos >= maxVal && !this.isActor) {
      this.command = 'ban';
      this.banDuration = null;
      this.text = 'Ban';
      this.color = '#C40000';
      this.banVis = 1;
    }
  }
}
