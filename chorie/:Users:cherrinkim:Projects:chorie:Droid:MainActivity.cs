using System;
using Android.App;
using Android.OS;
using Android.Views;

using Xamarin.Forms;
using SkiaSharp.Views.Android;

namespace chorie.Droid
{
	public class MainActivity : Activity, Android.Views.View.IOnTouchListener
	{
		private Double fx;
		private Double fy;

		protected override void OnCreate(Bundle savedInstanceState)
		{
			base.OnCreate(savedInstanceState);
			SetContentView(Resource.Layout.Main);
		}

		public bool OnTouch(Android.Views.View v, MotionEvent e)
		{
			fx = e.GetX();
			fy = e.GetY();
			Console.WriteLine(fx);
			Console.WriteLine(fy);

			return true;
		}

		public Double getX()
		{
			return fx;
		}

		public double getY()
		{
			return fy;
		}
	}
}

