using System;

using Xamarin.Forms;
using Android.App;

namespace chorie.Droid
{
	public class BaseDependencyImplementation : Object
	{
		public Activity GetActivity()
		{
			var activity = (Activity)Forms.Context;
			return activity;
		}
	}
}

